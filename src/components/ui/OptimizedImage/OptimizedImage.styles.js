import styled, { keyframes, css } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--light-gray);
  border-radius: var(--radius-md);

  ${props => props.$aspectRatio && `
    aspect-ratio: ${props.$aspectRatio};
  `}

  ${props => props.$width && `
    width: ${typeof props.$width === 'number' ? `${props.$width}px` : props.$width};
  `}

  ${props => props.$height && `
    height: ${typeof props.$height === 'number' ? `${props.$height}px` : props.$height};
  `}

  ${props => !props.$width && !props.$height && !props.$aspectRatio && `
    width: 100%;
    height: 200px;
  `}
`;

export const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => !['$objectFit', '$loaded'].includes(prop)
})`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit};
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.$loaded ? 1 : 0};

  ${props => props.$loaded && css`
    animation: ${fadeIn} 0.3s ease-in-out;
  `}
`;

export const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 600px;

  ${css`
    animation: ${shimmer} 1.2s ease-in-out infinite;
  `}
`;

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--light-gray);
  border-top: 2px solid var(--primary-color);
  border-radius: 50%;

  ${css`
    animation: ${spin} 1s linear infinite;
  `}
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-gray);
  color: var(--text-light);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--space-md);
`;