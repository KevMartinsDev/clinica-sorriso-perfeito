import styled from 'styled-components';

export const BlogPostPageContainer = styled.div`
  .blog-post-content {
    padding: 40px 0;
    background: var(--white);

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .post-header {
      text-align: center;
      margin-bottom: 3rem;

      .post-title {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 700;
        line-height: 1.2;
      }

      .post-meta {
        display: flex;
        justify-content: center;
        gap: 2rem;
        color: var(--text-light);
        font-size: 0.95rem;
        margin-bottom: 1rem;

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          .meta-icon {
            color: var(--primary-color);
          }
        }
      }

      .post-excerpt {
        font-size: 1.1rem;
        color: var(--text-dark);
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
        font-style: italic;
      }
    }

    .post-image {
      margin: 2rem 0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .post-body {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-dark);

      h2 {
        font-size: 1.8rem;
        color: var(--primary-color);
        margin: 2rem 0 1rem;
        font-weight: 600;
      }

      h3 {
        font-size: 1.4rem;
        color: var(--primary-color);
        margin: 1.5rem 0 0.75rem;
        font-weight: 600;
      }

      p {
        margin-bottom: 1.5rem;
        text-align: justify;
      }

      ul, ol {
        margin: 1.5rem 0;
        padding-left: 2rem;

        li {
          margin-bottom: 0.5rem;
        }
      }

      blockquote {
        background: var(--light-gray);
        border-left: 4px solid var(--primary-color);
        padding: 1.5rem;
        margin: 2rem 0;
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: var(--text-dark);
      }

      .highlight {
        background: linear-gradient(120deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0.3) 100%);
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
      }
    }

    .post-tags {
      margin: 3rem 0;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);

      .tags-title {
        font-size: 1.1rem;
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .tags-list {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;

        .tag {
          background: var(--light-gray);
          color: var(--primary-color);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            background: var(--primary-color);
            color: var(--white);
          }
        }
      }
    }

    .post-navigation {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);

      .nav-title {
        text-align: center;
        font-size: 1.2rem;
        color: var(--primary-color);
        margin-bottom: 2rem;
        font-weight: 600;
      }

      .nav-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        .nav-link {
          padding: 1.5rem;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
          }

          .nav-label {
            font-size: 0.9rem;
            color: var(--text-light);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .nav-title {
            color: var(--primary-color);
            font-weight: 600;
            line-height: 1.3;
            margin: 0;
          }
        }

        .nav-prev {
          text-align: left;
        }

        .nav-next {
          text-align: right;
        }
      }
    }

    .back-to-blog {
      text-align: center;
      margin: 3rem 0;

      .back-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--primary-color);
        color: var(--white);
        padding: 12px 24px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
          background: #1e5f3b;
          transform: translateY(-2px);
        }

        .back-icon {
          font-size: 1rem;
        }
      }
    }
  }

  .related-posts {
    padding: 80px 0;
    background: var(--light-gray);

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 3rem;
      font-weight: 600;
    }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-post-content {
      padding: 30px 0;

      .container {
        padding: 0 1rem;
      }

      .post-title {
        font-size: 2rem;
      }

      .post-meta {
        flex-direction: column;
        gap: 0.75rem;
      }

      .post-body {
        font-size: 1rem;

        h2 {
          font-size: 1.5rem;
        }

        h3 {
          font-size: 1.3rem;
        }
      }

      .post-navigation .nav-links {
        grid-template-columns: 1fr;
        gap: 1rem;

        .nav-next {
          text-align: left;
        }
      }
    }

    .related-posts {
      padding: 60px 0;

      .section-title {
        font-size: 2rem;
      }

      .related-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    .post-title {
      font-size: 1.8rem;
    }

    .post-body {
      ul, ol {
        padding-left: 1.5rem;
      }

      blockquote {
        padding: 1rem;
        margin: 1.5rem 0;
      }
    }

    .post-navigation .nav-link {
      padding: 1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }
  }
`;