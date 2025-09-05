import styled, { keyframes } from 'styled-components';
import { memo } from 'react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: var(--text-color);
  font-size: 1rem;
`;

const LoadingSpinner = memo(({ text = 'Carregando...' }) => (
  <SpinnerContainer role="status" aria-label={text}>
    <div>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </div>
  </SpinnerContainer>
));

export default LoadingSpinner;