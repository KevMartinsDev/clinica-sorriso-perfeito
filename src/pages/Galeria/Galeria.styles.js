import styled from 'styled-components';

export const GaleriaContainer = styled.div`
  .hero-section {
    background: var(--primary-color);
    color: var(--white);
    padding: 100px 0 80px;
    text-align: center;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .gallery-section {
    padding: 80px 0;
    background: var(--white);

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-intro {
      text-align: center;
      margin-bottom: 4rem;

      .section-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .section-description {
        font-size: 1.1rem;
        color: var(--text-light);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    /* Os estilos da ImageGallery já estão no componente */
    .image-gallery-wrapper {
      margin-top: 2rem;
    }
  }

  .cta-section {
    padding: 80px 0;
    background: var(--light-gray);
    text-align: center;

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      .cta-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .cta-description {
        font-size: 1.2rem;
        color: var(--text-light);
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;

        .btn {
          padding: 15px 30px;
          border-radius: 5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;

          &.btn-primary {
            background: var(--primary-color);
            color: var(--white);

            &:hover {
              background: #1e5f3b;
              transform: translateY(-2px);
            }
          }

          &.btn-secondary {
            background: var(--white);
            color: var(--primary-color);
            border: 2px solid var(--primary-color);

            &:hover {
              background: var(--primary-color);
              color: var(--white);
            }
          }
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-section {
      padding: 60px 0 40px;

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }
    }

    .gallery-section,
    .cta-section {
      padding: 60px 0;
    }

    .section-title,
    .cta-title {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;

      .btn {
        width: 100%;
        max-width: 250px;
      }
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .section-title,
    .cta-title {
      font-size: 1.8rem;
    }

    .container {
      padding: 0 1rem;
    }
  }
`;