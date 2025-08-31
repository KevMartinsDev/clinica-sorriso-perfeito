import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  display: block;
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  color: #999;
  font-size: 0.875rem;

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const ErrorPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999;
  font-size: 0.875rem;
  flex-direction: column;
  gap: 0.5rem;

  &::before {
    content: '📷';
    font-size: 2rem;
    opacity: 0.5;
  }
`;

const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  loading = 'lazy',
  className,
  style,
  onLoad,
  onError,
  eager = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const { elementRef, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px' // Carrega quando está 100px de entrar na tela
  });

  useEffect(() => {
    if (hasBeenVisible && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [hasBeenVisible, shouldLoad]);

  const handleLoad = (event) => {
    setImageLoaded(true);
    onLoad?.(event);
  };

  const handleError = (event) => {
    setImageError(true);
    onError?.(event);
  };

  if (imageError) {
    return (
      <ErrorPlaceholder className={className} style={style}>
        Erro ao carregar
      </ErrorPlaceholder>
    );
  }

  return (
    <ImageContainer ref={elementRef} className={className} style={style}>
      {!imageLoaded && shouldLoad && (
        <LoadingPlaceholder>
          Carregando...
        </LoadingPlaceholder>
      )}
      
      {!shouldLoad && (
        <LoadingPlaceholder>
          🖼️
        </LoadingPlaceholder>
      )}
      
      {shouldLoad && (
        <>
          {webpSrc ? (
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              <Image
                src={src}
                alt={alt}
                loading="eager"
                onLoad={handleLoad}
                onError={handleError}
                style={{
                  opacity: imageLoaded ? 1 : 0,
                  ...style
                }}
              />
            </picture>
          ) : (
            <Image
              src={src}
              alt={alt}
              loading="eager"
              onLoad={handleLoad}
              onError={handleError}
              style={{
                opacity: imageLoaded ? 1 : 0,
                ...style
              }}
            />
          )}
        </>
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;