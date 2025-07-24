import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: ${props => props.$fullHeight ? '200px' : 'auto'};
`;

const Spinner = styled.div`
  width: ${props => props.$size === 'small' ? '24px' : props.$size === 'large' ? '48px' : '32px'};
  height: ${props => props.$size === 'small' ? '24px' : props.$size === 'large' ? '48px' : '32px'};
  border: 3px solid rgba(46, 139, 87, 0.1);
  border-left: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
  text-align: center;
`;

const Loading = ({ 
  size = 'medium', 
  text = 'Carregando...', 
  fullHeight = false,
  showText = true 
}) => {
  return (
    <LoadingContainer $fullHeight={fullHeight}>
      <Spinner $size={size} />
      {showText && <LoadingText>{text}</LoadingText>}
    </LoadingContainer>
  );
};

export default Loading;