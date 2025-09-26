import { useState, useRef, useEffect } from 'react';
import {
  ImageContainer,
  Image,
  PlaceholderContainer,
  LoadingSpinner,
  ErrorMessage
} from './OptimizedImage.styles';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  sizes,
  priority = false,
  onLoad,
  onError,
  placeholder = true,
  aspectRatio,
  objectFit = 'cover',
  quality = 80,
  ...props
}) => {
  const [imageStatus, setImageStatus] = useState('loading');
  const [imageSrc, setImageSrc] = useState('');
  const imageRef = useRef(null);
  const observerRef = useRef(null);

  const generateResponsiveSrc = (originalSrc, size) => {
    if (!originalSrc.includes('pexels.com') && !originalSrc.includes('unsplash.com')) {
      return originalSrc;
    }

    if (originalSrc.includes('pexels.com')) {
      return `${originalSrc.split('?')[0]}?auto=compress&cs=tinysrgb&w=${size}&h=${Math.round(size * 0.75)}&fit=crop`;
    }

    if (originalSrc.includes('unsplash.com')) {
      return `${originalSrc}?auto=format&fit=crop&w=${size}&h=${Math.round(size * 0.75)}&q=${quality}`;
    }

    return originalSrc;
  };

  const createSrcSet = (originalSrc) => {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes
      .map(size => `${generateResponsiveSrc(originalSrc, size)} ${size}w`)
      .join(', ');
  };

  useEffect(() => {
    const currentImageRef = imageRef.current;

    if (loading === 'lazy' && !priority) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      if (currentImageRef) {
        observerRef.current.observe(currentImageRef);
      }
    } else {
      setImageSrc(src);
    }

    return () => {
      if (observerRef.current && currentImageRef) {
        observerRef.current.unobserve(currentImageRef);
      }
    };
  }, [src, loading, priority]);

  const handleImageLoad = (e) => {
    setImageStatus('loaded');
    onLoad?.(e);
  };

  const handleImageError = (e) => {
    setImageStatus('error');
    onError?.(e);
  };

  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <ImageContainer
      ref={imageRef}
      $aspectRatio={aspectRatio}
      $width={width}
      $height={height}
      className={className}
      {...props}
    >
      {imageStatus === 'loading' && placeholder && (
        <PlaceholderContainer>
          <LoadingSpinner />
        </PlaceholderContainer>
      )}

      {imageStatus === 'error' && (
        <ErrorMessage>
          Erro ao carregar imagem
        </ErrorMessage>
      )}

      {imageSrc && (
        <Image
          src={imageSrc}
          srcSet={createSrcSet(imageSrc)}
          sizes={defaultSizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleImageLoad}
          onError={handleImageError}
          $objectFit={objectFit}
          $loaded={imageStatus === 'loaded'}
          decoding="async"
          fetchpriority={priority ? 'high' : 'auto'}
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;