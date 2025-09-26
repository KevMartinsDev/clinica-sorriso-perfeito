import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);
  padding: 4rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: 70vh;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
    gap: 1.5rem;
  }
`;

export const HeroContent = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const HeroTitle = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.3;
  }

  @media (max-width: 360px) {
    font-size: 1.75rem;
  }
`;

export const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  font-size: 1.25rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const BenefitsList = styled(motion.ul).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`;

export const BenefitItem = styled(motion.li).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-dark);

  @media (max-width: 768px) {
    justify-content: center;
  }

  svg {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
    padding: 0.25rem;
    border-radius: 50%;
    min-width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CTAContainer = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  margin-top: 2.5rem;
`;

export const HeroImage = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  min-height: 500px;
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    order: 1;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-height: 250px;
    border-radius: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05));
    border-radius: 20px;
    z-index: 1;

    @media (max-width: 480px) {
      border-radius: 16px;
    }
  }
`;

export const FloatingCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variants'].includes(prop)
})`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    min-width: auto;
  }
`;

export const CardTitle = styled.h4`
  color: var(--primary-color);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const CardText = styled.p`
  color: var(--text-gray);
  margin: 0;
  font-size: 0.9rem;
`;