import { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { FaCookie, FaTimes } from 'react-icons/fa';
import Button from './Button';

const CookieBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 3px solid var(--primary-color);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 10000;
  transform: translateY(${props => props.$hidden ? '100%' : '0'});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CookieContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const CookieIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CookieText = styled.div`
  flex: 1;
  color: var(--text-color);
  line-height: 1.5;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-secondary);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CookieActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--text-color);
    background: var(--light-bg);
  }
`;

const COOKIE_CONSENT_KEY = 'cookie-consent';

const CookieConsent = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <CookieBanner $hidden={!isVisible} role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <CloseButton 
        onClick={handleClose}
        aria-label="Fechar banner de cookies"
      >
        <FaTimes />
      </CloseButton>
      
      <CookieContent>
        <CookieIcon>
          <FaCookie />
        </CookieIcon>
        
        <CookieText>
          <h4 id="cookie-title">Cookies e Privacidade</h4>
          <p id="cookie-description">
            Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego. 
            Ao continuar navegando, você concorda com nossa{' '}
            <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>.
          </p>
        </CookieText>
        
        <CookieActions>
          <Button 
            variant="primary" 
            size="small" 
            onClick={handleAccept}
            aria-describedby="cookie-description"
          >
            Aceitar
          </Button>
          <Button 
            variant="outline" 
            size="small" 
            onClick={handleDecline}
            aria-describedby="cookie-description"
          >
            Recusar
          </Button>
        </CookieActions>
      </CookieContent>
    </CookieBanner>
  );
});

export default CookieConsent;