import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../../../../data/gallery';
import FilterButtons from '../FilterButtons';
import LazyImage from '../LazyImage';
import Lightbox from '../Lightbox';
import LoadingSpinner from '../../../ui/LoadingSpinner';
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll';
import useIntersectionObserverRef from '../../../../hooks/useIntersectionObserverRef';

import imagePreloader from '../../../../utils/imagePreloader';
import {
  GalleryContainer,
  GalleryHeader,
  Title,
  Subtitle,
  ImageGrid,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription
} from './ImageGallery.styles';

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const loadMoreRef = useRef();
  
  const [preloadingProgress, setPreloadingProgress] = useState(0);

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

  const handleImageClick = useCallback((index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex(prev => {
      const nextIndex = prev < filteredImages.length - 1 ? prev + 1 : 0;
      
      const nextNextIndex = nextIndex < filteredImages.length - 1 ? nextIndex + 1 : 0;
      imagePreloader.preloadImage(filteredImages[nextNextIndex].src);
      return nextIndex;
    });
  }, [filteredImages]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex(prev => {
      const prevIndex = prev > 0 ? prev - 1 : filteredImages.length - 1;
      
      const prevPrevIndex = prevIndex > 0 ? prevIndex - 1 : filteredImages.length - 1;
      imagePreloader.preloadImage(filteredImages[prevPrevIndex].src);
      return prevIndex;
    });
  }, [filteredImages]);

  
  useEffect(() => {
    const visibleImages = displayedItems.slice(0, 6);
    const imagesToPreload = visibleImages.map(img => img.src);

    imagePreloader.preloadImageBatch(imagesToPreload, 2)
      .then(() => {
        setPreloadingProgress(100);
      })
      .catch((error) => {
        console.warn('Some images failed to preload:', error);
      });
  }, [displayedItems, activeFilter]);

  useEffect(() => {
    if (lightboxOpen && filteredImages.length > 0) {
      const preloadIndexes = [
        currentImageIndex - 1 >= 0 ? currentImageIndex - 1 : filteredImages.length - 1,
        currentImageIndex + 1 < filteredImages.length ? currentImageIndex + 1 : 0
      ];

      preloadIndexes.forEach(index => {
        imagePreloader.preloadImage(filteredImages[index].src, 'high');
      });
    }
  }, [lightboxOpen, currentImageIndex, filteredImages]);

  return (
    <GalleryContainer>
      <GalleryHeader>
        <Title id="gallery-title">Nossa Galeria</Title>
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
                ease: 'easeOut'
              }}
              role="grid"
              aria-labelledby="gallery-title"
              aria-label={`Galeria de imagens - categoria: ${activeFilter === 'todos' ? 'todas' : galleryCategories.find(cat => cat.id === activeFilter)?.name || activeFilter}`}
            >
              {displayedItems.map((image, index) => (
                <LazyImage
                  key={image.id}
                  src={image.thumbnail || image.src}
                  alt={`${image.title}. ${image.description}`}
                  title={image.title}
                  description={image.description}
                  index={index}
                  onClick={handleImageClick}
                  role="gridcell"
                  aria-describedby={`image-desc-${image.id}`}
                />
              ))}
            </ImageGrid>

            {/* Botão Carregar Mais */}
            {hasMore && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <button
                  onClick={loadMore}
                  disabled={loading}
                  style={{
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: loading ? '#9ca3af' : '#ffffff',
                    backgroundColor: loading ? '#e5e7eb' : '#2E8B57',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    minWidth: '160px',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = '#228B22';
                      e.target.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!loading) {
                      e.target.style.backgroundColor = '#2E8B57';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <LoadingSpinner />
                      Carregando...
                    </>
                  ) : (
                    'Carregar mais imagens'
                  )}
                </button>
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