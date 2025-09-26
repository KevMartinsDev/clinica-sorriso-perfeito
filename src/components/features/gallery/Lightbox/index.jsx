import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 70vw;
    height: 65vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 85vw;
    height: 75vh;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 300;
  transition: all 0.3s ease;
  z-index: 1001;
  padding: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  &:hover {
    color: #ffffff;
    transform: scale(1.2);
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Navigation = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  z-index: 1001;
  padding: 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  &:hover {
    color: #ffffff;
    transform: translateY(-50%) scale(1.2);
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  ${props => props.direction === 'prev' ? 'left: 20px;' : 'right: 20px;'}

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.9;
    line-height: 1.5;
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    bottom: -60px;
    left: 20px;
    right: 20px;
    transform: none;
    max-width: none;
    padding: 1rem 1.5rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const Counter = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1001;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrev = currentIndex > 0;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      }
      if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  useEffect(() => {
    setImageLoading(true);
    setDragX(0);
    setIsDragging(false);
  }, [currentIndex]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleDragStart = (e, info) => {
    setIsDragging(true);
  };

  const handleDrag = (e, info) => {
    setDragX(info.offset.x);
  };

  const handleDragEnd = (e, info) => {
    const threshold = 100;
    const velocity = info.velocity.x;

    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 && hasPrev) {
        onPrev();
      } else if (info.offset.x < 0 && hasNext) {
        onNext();
      }
    }

    setDragX(0);
    setIsDragging(false);
  };

  if (!currentImage) {
    return null;
  }

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <Container onClick={(e) => e.stopPropagation()}>
          <Counter>
            {currentIndex + 1} / {images.length}
          </Counter>

          <CloseButton onClick={onClose} title="Fechar (Esc)">
            ×
          </CloseButton>

          {hasPrev && (
            <Navigation direction="prev" onClick={onPrev} title="Imagem anterior (←)">
              ‹
            </Navigation>
          )}

          <AnimatePresence mode="wait">
            <ImageWrapper
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: dragX
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: isDragging ? 0 : 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              style={{
                filter: isDragging ? 'brightness(0.8)' : 'brightness(1)',
                transform: `translateX(${dragX}px) ${isDragging ? 'scale(0.95)' : 'scale(1)'}`,
                transition: isDragging ? 'none' : 'all 0.3s ease'
              }}
            >
              {imageLoading && <LoadingSpinner />}
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                onLoad={handleImageLoad}
                style={{
                  opacity: imageLoading ? 0 : 1,
                  pointerEvents: 'none'
                }}
              />

              {/* Efeito de escurecimento lateral durante swipe */}
              {isDragging && (
                <>
                  {/* Overlay escuro lado esquerdo */}
                  {dragX > 20 && hasPrev && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: Math.min(0.6, Math.abs(dragX) / 150)
                      }}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '30%',
                        height: '100%',
                        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                        pointerEvents: 'none',
                        borderRadius: '8px 0 0 8px'
                      }}
                    />
                  )}

                  {/* Overlay escuro lado direito */}
                  {dragX < -20 && hasNext && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: Math.min(0.6, Math.abs(dragX) / 150)
                      }}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '30%',
                        height: '100%',
                        background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                        pointerEvents: 'none',
                        borderRadius: '0 8px 8px 0'
                      }}
                    />
                  )}

                  {/* Indicador de progresso do swipe */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '120px',
                      height: '3px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      pointerEvents: 'none'
                    }}
                  >
                    <motion.div
                      animate={{
                        width: `${Math.min(100, Math.abs(dragX) / 1.2)}%`,
                        x: dragX > 0 ? '0%' : `${100 - Math.min(100, Math.abs(dragX) / 1.2)}%`
                      }}
                      style={{
                        height: '100%',
                        background: Math.abs(dragX) > 80
                          ? 'linear-gradient(90deg, #2E8B57, #32CD32)'
                          : 'linear-gradient(90deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8))',
                        borderRadius: '2px',
                        transition: 'none'
                      }}
                    />
                  </motion.div>
                </>
              )}
            </ImageWrapper>
          </AnimatePresence>

          {hasNext && (
            <Navigation direction="next" onClick={onNext} title="Próxima imagem (→)">
              ›
            </Navigation>
          )}

          <ImageInfo>
            <h3>{currentImage.title}</h3>
            <p>{currentImage.description}</p>
          </ImageInfo>
        </Container>
      </Overlay>
    </AnimatePresence>
  );
};

export default Lightbox;