import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LightboxContainer = styled(motion.div)`
  position: relative;
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 600px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
    max-width: 500px;
    max-height: 400px;
  }
`;

const LightboxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.05);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  svg {
    color: var(--text-dark);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    top: -60px;
    right: -10px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-50%) scale(1);
    }
  }

  svg {
    color: var(--text-dark);
    font-size: 1.25rem;
  }

  &.prev {
    left: -70px;
  }

  &.next {
    right: -70px;
  }

  @media (max-width: 768px) {
    display: none; /* Ocultar setas no mobile */
  }
`;

const MobileNavArea = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:active {
    transform: scale(0.95);
    background: rgba(255, 255, 255, 1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    color: var(--text-dark);
    font-size: 1.1rem;
  }
`;

const SwipeIndicator = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DotsIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.2s ease;
`;

const ImageInfo = styled(motion.div)`
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    bottom: -120px;
  }
`;

const ImageTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageDescription = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
`;

const ImageCounter = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  color: white;
  font-size: 0.875rem;
  opacity: 0.7;

  @media (max-width: 768px) {
    top: -60px;
    font-size: 0.75rem;
  }
`;

const getOptimizedLightboxPath = (imagePath) => {
  const name = imagePath.split('/').pop().split('.')[0];
  // Por enquanto usar imagens originais até otimizar
  return {
    webp: null, // Desabilitado temporariamente
    jpg: imagePath, // Usar imagem original
    fallback: imagePath
  };
};

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handlePanEnd = (event, info) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      onPrev(); // Swipe direita = imagem anterior
    } else if (info.offset.x < -swipeThreshold) {
      onNext(); // Swipe esquerda = próxima imagem
    }
  };

  const currentImage = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <LightboxOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <LightboxContainer
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onPanEnd={handlePanEnd}
          dragElastic={0.1}
        >
          <CloseButton onClick={onClose} aria-label="Fechar lightbox">
            <FaTimes />
          </CloseButton>

          <ImageCounter>
            {currentIndex + 1} de {images.length}
          </ImageCounter>

          <NavButton
            className="prev"
            onClick={onPrev}
            disabled={isFirst}
            aria-label="Imagem anterior"
          >
            <FaChevronLeft />
          </NavButton>

          <img
            src={currentImage.src}
            alt={currentImage.title}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            }}
          />

          <NavButton
            className="next"
            onClick={onNext}
            disabled={isLast}
            aria-label="Próxima imagem"
          >
            <FaChevronRight />
          </NavButton>

          <MobileNavArea>
            <SwipeIndicator>
              <DotsIndicator>
                {images.slice(Math.max(0, currentIndex - 2), Math.min(images.length, currentIndex + 3)).map((_, index) => {
                  const actualIndex = Math.max(0, currentIndex - 2) + index;
                  return (
                    <Dot
                      key={actualIndex}
                      active={actualIndex === currentIndex}
                    />
                  );
                })}
              </DotsIndicator>
            </SwipeIndicator>
          </MobileNavArea>

          <ImageInfo
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ImageTitle>{currentImage.title}</ImageTitle>
            <ImageDescription>{currentImage.description}</ImageDescription>
          </ImageInfo>
        </LightboxContainer>
      </LightboxOverlay>
    </AnimatePresence>
  );
};

export default Lightbox;