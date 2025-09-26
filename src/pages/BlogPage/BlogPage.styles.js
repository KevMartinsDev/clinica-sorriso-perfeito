import styled from 'styled-components';

export const BlogPageContainer = styled.div`
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

  .blog-content {
    padding: 80px 0;
    background: var(--white);

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .blog-header {
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

    .blog-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;

      .search-container {
        max-width: 400px;
        flex: 1;
        min-width: 250px;
      }
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .no-posts {
      text-align: center;
      color: var(--text-light);
      font-size: 1.1rem;
      margin: 3rem 0;
    }

    .load-more {
      text-align: center;
      margin-top: 3rem;

      .load-more-button {
        background: var(--primary-color);
        color: var(--white);
        padding: 12px 24px;
        border: none;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: #1e5f3b;
          transform: translateY(-2px);
        }

        &:disabled {
          background: var(--text-light);
          cursor: not-allowed;
          transform: none;
        }
      }
    }
  }

  .newsletter-section {
    padding: 80px 0;
    background: var(--light-gray);
    text-align: center;

    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;

      .newsletter-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .newsletter-description {
        font-size: 1.2rem;
        color: var(--text-light);
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .newsletter-form {
        display: flex;
        gap: 1rem;
        max-width: 400px;
        margin: 0 auto;

        .newsletter-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border-color);
          border-radius: 5px;
          font-size: 1rem;

          &:focus {
            outline: none;
            border-color: var(--primary-color);
          }
        }

        .newsletter-button {
          background: var(--primary-color);
          color: var(--white);
          padding: 12px 24px;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background: #1e5f3b;
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

    .blog-content,
    .newsletter-section {
      padding: 60px 0;
    }

    .blog-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .blog-filters {
      flex-direction: column;
      align-items: center;

      .search-container {
        max-width: 100%;
      }
    }

    .newsletter-form {
      flex-direction: column;
      max-width: 100%;

      .newsletter-input,
      .newsletter-button {
        width: 100%;
      }
    }

    .section-title,
    .newsletter-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .section-title,
    .newsletter-title {
      font-size: 1.8rem;
    }

    .container {
      padding: 0 1rem;
    }

    .blog-grid {
      grid-template-columns: 1fr;
    }
  }
`;