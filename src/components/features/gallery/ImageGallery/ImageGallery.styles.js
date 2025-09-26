import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  container-type: inline-size;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

export const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  margin-top: 2rem;
  align-items: start;

  @container (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  }

  @container (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

export const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const EmptyDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;