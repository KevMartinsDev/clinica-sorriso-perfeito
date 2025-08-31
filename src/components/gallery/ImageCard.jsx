import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const CardContainer = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  will-change: transform;
  transform-origin: center;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-5px) translateZ(0);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease-out;
    will-change: transform;
  }

  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.2s ease-out;
  will-change: opacity;
  pointer-events: none;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  transform: translateY(100%);
  transition: transform 0.2s ease-out;
  will-change: transform;

  ${CardContainer}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    transform: translateY(0);
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    margin-top: -60px;
    z-index: 1;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  line-height: 1.4;
`;

const getOptimizedImagePath = (imagePath) => {
  const name = imagePath.split('/').pop().split('.')[0];
  // Por enquanto usar imagens originais até otimizar
  return {
    webp: null, // Desabilitado temporariamente
    jpg: imagePath, // Usar imagem original
    fallback: imagePath
  };
};

const ImageCard = ({ image, onClick, index }) => {
  const optimizedPaths = getOptimizedImagePath(image.thumbnail);
  const isEager = index < 6; // Primeiras 6 imagens carregam imediatamente
  
  return (
    <CardContainer
      onClick={() => onClick(index)}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.03,
          ease: "easeOut"
        }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <ImageWrapper>
        <StyledImage>
          <OptimizedImage
            src={optimizedPaths.jpg}
            webpSrc={optimizedPaths.webp}
            alt={image.title}
            eager={isEager}
          />
        </StyledImage>
        <Overlay />
        <Content>
          <Title>{image.title}</Title>
          <Description>{image.description}</Description>
        </Content>
      </ImageWrapper>
    </CardContainer>
  );
};

export default ImageCard;