import { useState, useMemo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../../data/gallery';
import FilterButtons from './FilterButtons';
import LazyImage from './LazyImage';
import Lightbox from './Lightbox';
import LoadingSpinner from './LoadingSpinner';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useIntersectionObserverRef from '../../hooks/useIntersectionObserverRef';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EmptyDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const loadMoreRef = useRef();

  const filteredImages = useMemo(() => {
    if (activeFilter === 'todos') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  const { displayedItems, hasMore, loading, loadMore } = useInfiniteScroll(filteredImages, 6);

  const imageCounts = useMemo(() => {
    const counts = { todos: galleryImages.length };
    galleryCategories.forEach(category => {
      if (category.id !== 'todos') {
        counts[category.id] = galleryImages.filter(img => img.category === category.id).length;
      }
    });
    return counts;
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    const nextIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    setCurrentImageIndex(prevIndex);
  };

  // Intersection Observer para carregamento infinito
  const isIntersecting = useIntersectionObserverRef(loadMoreRef, {
    threshold: 0.1,
    rootMargin: '100px'
  });

  useEffect(() => {
    if (isIntersecting && hasMore && !loading) {
      loadMore();
    }
  }, [isIntersecting, hasMore, loading, loadMore]);

  // Preload de imagens vizinhas no lightbox
  useEffect(() => {
    if (lightboxOpen && filteredImages.length > 0) {
      const preloadIndexes = [
        currentImageIndex - 1 >= 0 ? currentImageIndex - 1 : filteredImages.length - 1,
        currentImageIndex + 1 < filteredImages.length ? currentImageIndex + 1 : 0
      ];
      
      preloadIndexes.forEach(index => {
        const img = new Image();
        img.src = filteredImages[index].src;
      });
    }
  }, [lightboxOpen, currentImageIndex, filteredImages]);

  return (
    <GalleryContainer>
      <GalleryHeader>
        <Title>Nossa Galeria</Title>
        <Subtitle>
          Conheça alguns dos nossos casos de sucesso e veja as transformações 
          que realizamos com carinho e profissionalismo.
        </Subtitle>
      </GalleryHeader>

      <FilterButtons
        categories={galleryCategories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        imageCounts={imageCounts}
      />

      <AnimatePresence mode="wait">
        {filteredImages.length > 0 ? (
          <>
            <ImageGrid
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              {displayedItems.map((image, index) => (
                <LazyImage
                  key={image.id}
                  src={image.thumbnail || image.src}
                  alt={image.title}
                  index={index}
                  onClick={handleImageClick}
                />
              ))}
            </ImageGrid>
            
            {/* Loading trigger e spinner */}
            {hasMore && (
              <div ref={loadMoreRef}>
                {loading && <LoadingSpinner />}
              </div>
            )}
            
          </>
        ) : (
          <EmptyState
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <EmptyIcon>🔍</EmptyIcon>
            <EmptyTitle>Nenhuma imagem encontrada</EmptyTitle>
            <EmptyDescription>
              Não temos imagens para esta categoria no momento.
            </EmptyDescription>
          </EmptyState>
        )}
      </AnimatePresence>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;