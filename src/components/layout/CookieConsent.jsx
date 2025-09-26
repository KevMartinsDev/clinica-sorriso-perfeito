import { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { FaCookie, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const CookieBanner = styled.div`
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  background: var(--white, #fff) !important;
  border-top: 3px solid var(--primary-color, #2E8B57) !important;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1) !important;
  padding: 1.5rem !important;
  z-index: 10000 !important;
  transform: translateY(${props => props.$hidden ? '100%' : '0'}) !important;
  transition: transform 0.3s ease !important;
  width: 100% !important;
  box-sizing: border-box !important;

  @media (max-width: 1024px) {
    padding: 1.3rem !important;
  }

  @media (max-width: 768px) {
    padding: 1rem !important;
    border-top-width: 2px !important;
  }

  @media (max-width: 480px) {
    padding: 0.8rem !important;
    left: 0.5rem !important;
    right: 0.5rem !important;
    bottom: 0.5rem !important;
    border-radius: 12px !important;
    border-top: 2px solid var(--primary-color, #2E8B57) !important;
    border: 2px solid var(--primary-color, #2E8B57) !important;
  }
`;

const CookieContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1.3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const CookieIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color, #2E8B57);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CookieText = styled.div`
  flex: 1;
  color: var(--text-color, #333);
  line-height: 1.5;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-secondary, #666);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }

  a {
    color: var(--primary-color, #2E8B57);
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

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
    max-width: 200px;

    button {
      width: 100%;
      font-size: 0.85rem;
      padding: 0.6rem 1rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary, #666);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    top: 0.8rem;
    right: 0.8rem;
    padding: 0.4rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    top: 0.6rem;
    right: 0.6rem;
    padding: 0.3rem;
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--text-color, #333);
    background: var(--light-bg, #f8f9fa);
  }
`;

const COOKIE_CONSENT_KEY = 'cookie-consent';

const CookieConsent = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowSize();

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

  if (!isVisible) {
    return null;
  }

  return (
    <CookieBanner
      $hidden={!isVisible}
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      style={{
        position: 'fixed',
        bottom: width <= 480 ? '0.5rem' : '0',
        left: width <= 480 ? '0.5rem' : '0',
        right: width <= 480 ? '0.5rem' : '0',
        borderRadius: width <= 480 ? '12px' : '0',
        border: width <= 480 ? '2px solid #2E8B57' : '3px solid #2E8B57',
        borderTop: width <= 480 ? '2px solid #2E8B57' : '3px solid #2E8B57',
        padding: width <= 1024 ? (width <= 768 ? (width <= 480 ? '0.6rem' : '0.8rem') : '1rem') : '1.2rem',
        zIndex: 10000,
        width: width <= 480 ? 'auto' : '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box'
      }}
    >
      <CloseButton
        onClick={handleClose}
        aria-label="Fechar banner de cookies"
      >
        <FaTimes />
      </CloseButton>

      <CookieContent
        style={{
          flexDirection: width <= 768 ? 'column' : 'row',
          alignItems: width <= 768 ? 'center' : 'center',
          textAlign: width <= 768 ? 'center' : 'left',
          gap: width <= 1024 ? (width <= 768 ? (width <= 480 ? '0.5rem' : '0.8rem') : '1rem') : '1.2rem'
        }}
      >
        <CookieIcon
          style={{
            fontSize: width <= 768 ? (width <= 480 ? '1.2rem' : '1.4rem') : '1.8rem'
          }}
        >
          <FaCookie />
        </CookieIcon>

        <CookieText>
          <h4
            id="cookie-title"
            style={{
              fontSize: width <= 768 ? (width <= 480 ? '0.85rem' : '0.95rem') : '1rem',
              marginBottom: width <= 480 ? '0.2rem' : '0.4rem'
            }}
          >
            Cookies e Privacidade
          </h4>
          <p
            id="cookie-description"
            style={{
              fontSize: width <= 768 ? (width <= 480 ? '0.75rem' : '0.85rem') : '0.9rem',
              lineHeight: width <= 480 ? '1.3' : '1.4'
            }}
          >
            Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego.
            Ao continuar navegando, você concorda com nossa{' '}
            <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>.
          </p>
        </CookieText>

        <CookieActions
          style={{
            flexDirection: width <= 480 ? 'column' : 'row',
            width: width <= 768 ? '100%' : 'auto',
            maxWidth: width <= 480 ? '180px' : 'none',
            gap: width <= 1024 ? (width <= 768 ? (width <= 480 ? '0.4rem' : '0.6rem') : '0.8rem') : '1rem'
          }}
        >
          <Button
            variant="primary"
            size="small"
            onClick={handleAccept}
            aria-describedby="cookie-description"
            style={{
              width: width <= 480 ? '100%' : 'auto',
              fontSize: width <= 480 ? '0.75rem' : '0.85rem',
              padding: width <= 480 ? '0.5rem 0.8rem' : '0.7rem 1rem'
            }}
          >
            Aceitar
          </Button>
          <Button
            variant="outline"
            size="small"
            onClick={handleDecline}
            aria-describedby="cookie-description"
            style={{
              width: width <= 480 ? '100%' : 'auto',
              fontSize: width <= 480 ? '0.75rem' : '0.85rem',
              padding: width <= 480 ? '0.5rem 0.8rem' : '0.7rem 1rem'
            }}
          >
            Recusar
          </Button>
        </CookieActions>
      </CookieContent>
    </CookieBanner>
  );
});

export default CookieConsent;