import styled from 'styled-components';
import { motion } from 'framer-motion';
import Card from '../../../ui/Card';

export const ServicesSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

export const SectionTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['variants', 'initial', 'whileInView', 'viewport', 'transition'].includes(prop)
})`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['variants', 'initial', 'whileInView', 'viewport', 'transition'].includes(prop)
})`
  font-size: 1.1rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  /* Tablet - 2x2 layout */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  /* Mobile - 1x1x1x1 layout */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

export const ServiceCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['$color', 'variant', 'clickable'].includes(prop)
})`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$color};
    transition: height 0.3s ease;
  }

  &:hover::before {
    height: 6px;
    box-shadow: 0 2px 8px ${props => `${props.$color}30`};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ServiceIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
    background: ${props => props.$color};
    color: white;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
`;

export const ServiceDescription = styled.p`
  color: var(--text-gray);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  color: var(--text-gray);

  li {
    padding: 0.25rem 0;

    &::before {
      content: '✓';
      color: var(--primary-color);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

export const ViewAllButton = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variants', 'initial', 'whileInView', 'viewport', 'transition'].includes(prop)
})`
  text-align: center;
  margin-top: 3rem;
`;

export const ViewAllLink = styled.button`
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;