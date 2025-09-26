import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BlogContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #f8fcff 0%, #e3f4f1 50%, #f0f9ff 100%);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #4a5568;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  strong {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #2E8B57;
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  span {
    font-size: 0.9rem;
    color: #4a5568;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    strong {
      font-size: 1.5rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2rem 0 3rem 0;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 0.5rem;
    padding: 1rem;
    margin: 1.5rem 0 2rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? '#2E8B57' : '#e2e8f0'};
  background: ${props => props.$active ? '#2E8B57' : '#ffffff'};
  color: ${props => props.$active ? '#ffffff' : '#4a5568'};
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border-color: #2E8B57;
    background: ${props => props.$active ? '#228B22' : '#f0fff4'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.2);
  }

  &:focus-visible {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

export const TagButton = styled(FilterButton)`
  background: ${props => props.$active ? '#2E8B57' : '#ffffff'};
  border-color: ${props => props.$active ? '#2E8B57' : '#cbd5e0'};
  color: ${props => props.$active ? '#ffffff' : '#2d3748'};
  font-weight: 500;

  &:hover {
    background: ${props => props.$active ? '#228B22' : '#edf2f7'};
    border-color: #2E8B57;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 139, 87, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(46, 139, 87, 0.4);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
    margin: 2rem auto 0;
  }
`;

export const NoResults = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;

  h3 {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    color: #4a5568;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.5rem;

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  font-size: 1.1rem;
  color: #4a5568;

  &::before {
    content: '';
    width: 32px;
    height: 32px;
    border: 3px solid #e2e8f0;
    border-top: 3px solid #2E8B57;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #2E8B57;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  z-index: 1000;

  &:focus {
    top: 6px;
  }
`;