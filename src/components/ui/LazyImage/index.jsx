import { useState, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ImageContainer, Image, Placeholder } from './LazyImage.styles';

const LazyImage = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  objectFit = 'cover',
  borderRadius,
  placeholder = 'Carregando...',
  onLoad,
  onError,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  });

  const handleLoad = useCallback(() => {
    setLoaded(true);
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setError(true);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  const handleImageLoad = useCallback(() => {
    if (inView && !loaded && !isLoading && !error) {
      setIsLoading(true);

      
      const img = new Image();
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = src;
    }
  }, [inView, loaded, isLoading, error, src, handleLoad, handleError]);

  
  useState(() => {
    if (inView) {
      handleImageLoad();
    }
  }, [inView, handleImageLoad]);

  return (
    <ImageContainer
      ref={ref}
      className={`${className || ''} ${isLoading ? 'loading' : ''}`}
      style={{ width, height, ...style }}
      borderRadius={borderRadius}
    >
      {inView && !error && (
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          loaded={loaded}
          objectFit={objectFit}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          loading="lazy"
          {...props}
        />
      )}

      {(!loaded || error) && (
        <Placeholder show={!loaded || error}>
          {error ? 'Erro ao carregar imagem' : placeholder}
        </Placeholder>
      )}
    </ImageContainer>
  );
};

export default LazyImage;