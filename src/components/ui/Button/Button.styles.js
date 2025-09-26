import styled, { css } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.$loading && css`
    cursor: wait;

    svg:not(.spinner) {
      opacity: 0;
    }
  `}

  ${props => props.$size === 'small' && css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `}

  ${props => props.$size === 'medium' && css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `}

  ${props => props.$size === 'large' && css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
  `}

  ${props => props.$variant === 'primary' && css`
    background: var(--primary-color);
    color: var(--white);

    &:hover:not(:disabled) {
      background: #1e5f3f;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.$variant === 'secondary' && css`
    background: var(--secondary-color);
    color: var(--white);

    &:hover:not(:disabled) {
      background: #5fa8d3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(135, 206, 235, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.$variant === 'outline' && css`
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);

    &:hover:not(:disabled) {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.$variant === 'whatsapp' && css`
    background: #25D366;
    color: var(--white);

    &:hover:not(:disabled) {
      background: #128C7E;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}
`;

export const LoadingSpinner = styled(FaSpinner)`
  position: absolute;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;