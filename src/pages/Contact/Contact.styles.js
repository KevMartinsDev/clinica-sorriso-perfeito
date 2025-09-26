import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const emergencyPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 71, 87, 0);
  }
`;

export const ContactContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  contain: layout style;
  will-change: auto;
`;

export const BreadcrumbNav = styled.nav`
  background: #f8f9fa;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;

  ol {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    list-style: none;
    font-size: 0.875rem;
    color: #6c757d;

    li {
      display: flex;
      align-items: center;

      &:not(:last-child)::after {
        content: '›';
        margin-left: 0.5rem;
        color: #adb5bd;
      }

      a {
        color: #007bff;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: #0056b3;
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    font-size: 0.8rem;
  }
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  padding: clamp(4rem, 8vw, 8rem) 0 clamp(3rem, 6vw, 6rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${shimmer} 20s infinite linear;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  color: white;
  letter-spacing: -0.02em;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
`;

export const ContactContent = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: #ffffff;
  position: relative;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

export const InfoCard = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: #2E8B57;
  }

  &:focus-within {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 360px) {
    padding: 1.25rem;
  }
`;

export const InfoIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};

  ${InfoCard}:hover & {
    transform: scale(1.1);
    background: ${props => props.$color};
    color: white;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`;

export const InfoDetails = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

export const InfoText = styled.div`
  color: #5a6c7d;
  line-height: 1.6;
  font-size: 1rem;

  a {
    color: #2E8B57;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;

    &:hover, &:focus {
      color: #1e5f3b;
      border-bottom-color: currentColor;
    }

    &:focus {
      outline: 2px solid #2E8B57;
      outline-offset: 2px;
      border-radius: 2px;
    }
  }

  strong {
    color: #2c3e50;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const WhatsAppLink = styled.button`
  background: none;
  border: none;
  color: #25D366;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
  padding: 0;
  font-family: inherit;

  &:hover, &:focus {
    color: #1da851;
    border-bottom-color: currentColor;
    transform: translateX(2px);
  }

  &:focus {
    outline: 2px solid #25D366;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const HoursCard = styled(InfoCard)`
  grid-column: 1 / -1;
  margin-top: 1rem;
`;

export const HoursList = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  span:first-child {
    color: #2c3e50;
    font-weight: 600;
  }

  span:last-child {
    color: #5a6c7d;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }
`;

export const ContactFormSection = styled.section`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: clamp(1.5rem, 3vw, 2rem);
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
    margin: 0 -0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232E8B57' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .form-header {
    text-align: center;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 1.5rem;
    }
  }

  .form-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 24px rgba(46, 139, 87, 0.3);
    animation: ${shimmer} 3s infinite;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
      margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: clamp(1.5rem, 2.5vw, 1.9rem);
      margin-bottom: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    color: #5a6c7d;
    margin-bottom: 0;
    line-height: 1.6;
    font-size: 1.1rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      max-width: 100%;
    }
  }
`;

export const MapSection = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #2c3e50;
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 4rem);
  font-weight: 600;
  line-height: 1.2;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const MapContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const MapPlaceholder = styled.div`
  background: white;
  padding: clamp(2rem, 4vw, 4rem);
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px dashed #dee2e6;
  transition: all 0.3s ease;

  &:hover {
    border-color: #2E8B57;
    transform: translateY(-2px);
  }

  svg {
    color: #2E8B57;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #2c3e50;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(46, 139, 87, 0.3);

    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(46, 139, 87, 0.4);
    }

    &:focus {
      outline: 2px solid #2E8B57;
      outline-offset: 2px;
    }
  }
`;

export const EmergencySection = styled.section`
  padding: clamp(3rem, 6vw, 6rem) 0;
  background: white;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

export const EmergencyCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(255, 71, 87, 0.3);
  position: relative;
  overflow: hidden;
  animation: ${emergencyPulse} 2s infinite;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    gap: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 1.25rem;
    border-radius: 12px;
    margin: 0 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 3s infinite;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const EmergencyIcon = styled.div`
  font-size: 3rem;
  flex-shrink: 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const EmergencyContent = styled.div`
  flex: 1;
  text-align: center;
`;

export const EmergencyTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: white;
`;

export const EmergencyText = styled.p`
  margin-bottom: 1.5rem;
  opacity: 0.95;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export const EmergencyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #ff4757;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  font-family: inherit;

  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.25rem;
  }
`;

export const GlobalMediaStyles = `
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;