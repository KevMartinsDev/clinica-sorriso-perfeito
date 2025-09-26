import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ErrorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-radius: 16px;
  border: 1px solid #fecaca;
  margin: 2rem 0;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 1.5rem;
    margin: 1rem 0;
  }
`;

export const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #991b1b;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #7f1d1d;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`;

export const RetryButton = styled(motion.button)`
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #dc2626;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: none;
    }
  }
`;

export const ErrorDetails = styled.details`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #f3f4f6;
  max-width: 100%;
  word-break: break-word;

  summary {
    cursor: pointer;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 0.5rem;

    &:hover {
      color: #374151;
    }
  }

  pre {
    background: #f9fafb;
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.75rem;
    overflow-x: auto;
    color: #6b7280;
    border: 1px solid #e5e7eb;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;

    pre {
      font-size: 0.7rem;
      padding: 0.5rem;
    }
  }
`;