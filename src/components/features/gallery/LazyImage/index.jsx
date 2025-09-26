import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background: var(--background-color);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 4/3;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};

  &:hover {
    transform: ${props => props.$clickable ? 'translateY(-4px)' : 'none'};
    box-shadow: ${props => props.$clickable ? '0 8px 24px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.$loaded ? 1 : 0};
  border-radius: 12px;
  ${props => props.$isThumbnail && `
    filter: contrast(0.95) brightness(0.98);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.3s ease;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  color: var(--text-light);
  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 0.3s ease;
  border-radius: 12px;
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;

  &::before {
    content: '📷';
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
`;

const LazyImage = ({ src, alt, index, onClick, title, description, isThumbnail = true, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  const containerRef = useRef();

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(false);
  };

  const handleClick = () => {
    if (onClick && typeof index !== 'undefined') {
      onClick(index);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      handleClick();
    }
  };

  const isClickable = Boolean(onClick);

  return (
    <ImageContainer
      ref={containerRef}
      onClick={isClickable ? handleClick : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      tabIndex={isClickable ? 0 : -1}
      role={isClickable ? 'button' : 'img'}
      aria-label={isClickable ? `Ver imagem: ${alt}` : alt}
      $clickable={isClickable}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      {...props}
    >
      {isInView && (
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          title={title}
          $loaded={loaded}
          $isThumbnail={isThumbnail}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
      <Placeholder $show={!loaded && !error && isInView}>
        {error ? 'Erro ao carregar imagem' : 'Carregando...'}
      </Placeholder>
    </ImageContainer>
  );
};

export default LazyImage;