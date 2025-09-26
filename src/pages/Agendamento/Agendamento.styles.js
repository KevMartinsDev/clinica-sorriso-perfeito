import styled from 'styled-components';

export const AgendamentoContainer = styled.div`
  .hero-section {
    background: linear-gradient(135deg, var(--primary-color) 0%, #228B22 100%);
    color: var(--white);
    padding: var(--space-3xl) 0 var(--space-2xl);
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
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
      background-size: 50px 50px;
      opacity: 0.3;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      margin-bottom: var(--space-lg);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      color: var(--white);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: var(--font-size-xl);
      opacity: 0.95;
      max-width: 600px;
      margin: 0 auto var(--space-xl);
      line-height: 1.7;
      font-weight: 400;
      letter-spacing: 0.01em;
    }

    @media (max-width: 1024px) {
      padding: var(--space-2xl) 0 var(--space-xl);

      .hero-title {
        font-size: var(--font-size-3xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-lg);
      }
    }

    @media (max-width: 768px) {
      padding: var(--space-xl) 0 var(--space-lg);

      .hero-title {
        font-size: var(--font-size-2xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-base);
      }
    }

    @media (max-width: 480px) {
      padding: var(--space-lg) 0 var(--space-md);

      .hero-title {
        font-size: var(--font-size-xl);
      }

      .hero-subtitle {
        font-size: var(--font-size-sm);
      }
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      gap: 1.2rem;
    }
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      transform: translateY(-12px) scale(1.02);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                  0 8px 16px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.05);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.9);
      display: block;
    }

    .feature-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--white);
    }

    .feature-description {
      font-size: 0.9rem;
      opacity: 0.85;
      line-height: 1.4;
      color: var(--white);
    }

    @media (max-width: 768px) {
      padding: var(--space-md);

      .feature-icon {
        font-size: 2rem;
      }

      .feature-title {
        font-size: 1rem;
      }

      .feature-description {
        font-size: 0.85rem;
      }
    }
  }

  .form-section {
    padding: 80px 0;
    background: var(--white);

    @media (max-width: 768px) {
      padding: 60px 0;
    }

    @media (max-width: 480px) {
      padding: 40px 0;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: -0.01em;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color, #87CEEB));
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .section-description {
    font-size: 1.1rem;
    color: var(--text-gray);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.65;
    text-align: center;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      line-height: 1.55;
    }
  }

  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  .info-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12),
                0 4px 16px rgba(0, 0, 0, 0.08),
                0 2px 8px rgba(0, 0, 0, 0.04);
    border: 2px solid transparent;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
                  0 12px 32px rgba(0, 0, 0, 0.12),
                  0 6px 16px rgba(0, 0, 0, 0.08);
    }

    .info-card-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .info-icon {
        font-size: 1.5rem;
      }
    }

    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 0;
        color: var(--text-gray);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5;

        &::before {
          content: '✓';
          color: var(--primary-color);
          font-weight: bold;
          font-size: 1rem;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 1.5rem;

      .info-card-title {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 480px) {
      padding: 1.2rem;

      .info-card-title {
        font-size: 1.1rem;
      }
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  button:focus-visible,
  [tabindex]:focus-visible,
  .info-card:focus-visible {
    outline: 3px solid var(--focus-color, #005fcc);
    outline-offset: 2px;
  }

  .feature-card:focus-visible,
  .feature-card:focus {
    outline: none;
  }

  @media (prefers-contrast: high) {
    .feature-card {
      border: 2px solid var(--white);
    }

    .info-card {
      border: 2px solid var(--primary-color);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .feature-card,
    .info-card {
      transition: none;
    }

    .feature-card:hover,
    .info-card:hover {
      transform: none;
    }
  }

  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .feature-card,
  .info-card {
    will-change: transform;
    contain: layout style paint;
  }

  .feature-card:hover,
  .info-card:hover {
    will-change: auto;
  }

  @media (pointer: coarse) {
    .feature-card,
    .info-card {
      min-height: 44px;
    }
  }
`;