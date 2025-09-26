import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: ${props => props.borderRadius || '12px'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 1.5s ease-in-out;
  }

  &.loading::before {
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.loaded ? 1 : 0};
  display: block;
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.4s ease;
  z-index: 1;
`;