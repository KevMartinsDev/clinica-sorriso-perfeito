import styled from 'styled-components';
import { motion } from 'framer-motion';
import Card from '../../../ui/Card';

export const ContactSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);

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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ContactCard = styled(Card)`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 8px 16px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.05);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

export const CardAction = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`;

export const ContactIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${ContactCard}:hover & {
    transform: scale(1.1);
    background: ${props => props.$color};
    color: white;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
`;

export const ContactText = styled.p`
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 0;
`;

export const ContactAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${props => props.$color};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  min-width: 140px;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => `${props.$color}40`};
  }
`;

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const DayLabel = styled.span`
  font-weight: 500;
  color: var(--text-dark);
`;

export const TimeLabel = styled.span`
  color: var(--text-gray);
`;

export const EmergencyBanner = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variants', 'initial', 'whileInView', 'viewport', 'transition'].includes(prop)
})`
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

export const EmergencyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;
`;

export const EmergencyText = styled.p`
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

export const EmergencyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #ff4757;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;