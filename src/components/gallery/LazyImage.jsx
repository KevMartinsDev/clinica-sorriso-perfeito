import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaImage } from 'react-icons/fa';
import { createThumbnail, createBlurPlaceholder } from '../../utils/imageOptimization';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
  background: #f0f0f0;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  image-rendering: optimizeQuality;
  
  /* Enhance image quality for gallery thumbnails */
  filter: contrast(1.08) saturate(1.15) brightness(1.02);

  &:hover {
    transform: scale(1.05);
    filter: contrast(1.12) saturate(1.2) brightness(1.03);
  }
`;

const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  transform: scale(1.1);
  opacity: ${props => props.$show ? 0.7 : 0};
  transition: opacity 0.3s ease;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ccc;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const ErrorPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
`;

const LazyImage = ({ src, alt, onClick, index }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef();
  const [thumbnailSrc, setThumbnailSrc] = useState(null);
  const [blurPlaceholder, setBlurPlaceholder] = useState(null);

  useEffect(() => {
    // Create optimized thumbnail and blur placeholder
    const createOptimizedVersions = async () => {
      try {
        // Create high-quality thumbnail (85% quality, max 500x400)
        const thumbnail = await createThumbnail(src, 0.85, 500, 400);
        setThumbnailSrc(thumbnail);
        
        // Create blur placeholder for loading state
        const blur = await createBlurPlaceholder(src);
        setBlurPlaceholder(blur);
      } catch (error) {
        // Fallback to original image if compression fails
        setThumbnailSrc(src);
        console.warn('Image optimization failed, using original:', error);
      }
    };

    createOptimizedVersions();
  }, [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Load earlier for better UX
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  const handleClick = () => {
    if (onClick && !error) {
      onClick(index);
    }
  };

  return (
    <motion.div
      ref={imgRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1 
      }}
    >
      <ImageContainer onClick={handleClick}>
        {!loaded && !error && (
          <Placeholder>
            <FaImage />
          </Placeholder>
        )}
        
        {error && (
          <ErrorPlaceholder>
            <FaImage style={{ opacity: 0.3 }} />
            <div style={{ marginTop: '0.5rem' }}>
              Erro ao carregar imagem
            </div>
          </ErrorPlaceholder>
        )}
        
        {/* Blur placeholder background */}
        <BlurredBackground 
          $bgImage={blurPlaceholder}
          $show={inView && !loaded && !error}
        />
        
        {inView && !error && thumbnailSrc && (
          <Image
            src={thumbnailSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: loaded ? 'block' : 'none' }}
          />
        )}
      </ImageContainer>
    </motion.div>
  );
};

export default LazyImage;