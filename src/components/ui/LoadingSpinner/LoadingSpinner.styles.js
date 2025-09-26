import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Spinner = styled.div`
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  width: ${props => props.$size || '40px'};
  height: ${props => props.$size || '40px'};
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  margin-left: 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
`;