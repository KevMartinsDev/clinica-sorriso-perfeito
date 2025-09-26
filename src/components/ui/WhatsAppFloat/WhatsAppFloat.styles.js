import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

export const FloatingButton = styled(motion.button || 'button').withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: #25D366;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  animation: ${pulse} 2s infinite;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    animation: none;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1rem;
    width: 56px;
    height: 56px;
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    right: 0.75rem;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 360px) {
    right: 0.5rem;
    width: 48px;
    height: 48px;
  }

  svg {
    color: white;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }

    @media (max-width: 360px) {
      font-size: 1.1rem;
    }
  }
`;

export const Tooltip = styled(motion.div || 'div').withConfig({
  shouldForwardProp: (prop) => !['$show', 'variants'].includes(prop)
})`
  position: absolute;
  right: calc(100% + 1rem);
  top: 50%;
  transform: translateY(-50%);
  background: var(--text-dark);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;

  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-left-color: var(--text-dark);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NotificationDot = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #ff4757;
  border: 2px solid white;
  border-radius: 50%;
  animation: ${pulse} 1.5s infinite;
`;