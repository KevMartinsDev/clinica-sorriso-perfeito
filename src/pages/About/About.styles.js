import styled from 'styled-components';

export const AboutContainer = styled.div`
  .hero-section {
    animation: fadeInUp 0.8s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .our-story,
  .mission-vision,
  .cta-section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }

  .our-story.animate-in,
  .mission-vision.animate-in,
  .cta-section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

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
      color: var(--white);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .our-story {
    padding: 80px 0;
    background: var(--white);

    .section-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 2rem;
    }

    .story-text {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-dark);

      p {
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }
  }

  .mission-vision {
    padding: 80px 0;
    background: #f8f9fa;

    .mission-vision-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;

      @media (max-width: 1200px) {
        gap: 1.8rem;
        margin-top: 2.5rem;
      }

      @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 2rem;
      }

      @media (max-width: 480px) {
        gap: 1.2rem;
      }
    }

    .mission-card,
    .vision-card,
    .values-card {
      background: var(--white);
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      @media (max-width: 768px) {
        padding: 1.5rem;
      }

      @media (max-width: 480px) {
        padding: 1.2rem;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      }

      .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 2rem;
        margin: 0 auto 1.5rem;
        transition: all 0.3s ease;
      }

      h3 {
        font-size: 1.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-light);
        line-height: 1.6;
      }
    }

    .mission-card {
      .card-icon {
        background: rgba(46, 139, 87, 0.15);
        color: #2E8B57;
      }

      &:hover .card-icon {
        transform: scale(1.1);
        background: #2E8B57;
        color: white;
      }
    }

    .vision-card {
      .card-icon {
        background: rgba(65, 105, 225, 0.15);
        color: rgb(65, 105, 225);
      }

      &:hover .card-icon {
        transform: scale(1.1);
        background: rgb(65, 105, 225);
        color: white;
      }
    }

    .values-card {
      .card-icon {
        background: rgba(255, 107, 53, 0.15);
        color: rgb(255, 107, 53);
      }

      &:hover .card-icon {
        transform: scale(1.1);
        background: rgb(255, 107, 53);
        color: white;
      }
    }
  }

  .cta-section {
    padding: 50px 0;
    background: rgb(65, 105, 225);
    color: var(--white);
    text-align: center;

    .cta-content {
      max-width: 900px;
      margin: 0 auto;

      h2 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
        color: var(--white);
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;

      .btn {
        padding: 15px 30px;
        border-radius: 12px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
        border: 2px solid transparent;

        @media (max-width: 768px) {
          padding: 12px 24px;
          font-size: 0.95rem;
        }

        @media (max-width: 480px) {
          padding: 12px 20px;
          font-size: 0.9rem;
        }

        &.btn-primary,
        &.btn-secondary {
          background: var(--white);
          color: rgb(65, 105, 225);
          border-color: var(--white);

          &:hover {
            background: var(--light-gray);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .hero-section {
      padding: 80px 0 60px;

      .hero-title {
        font-size: 2.8rem;
      }

      .hero-subtitle {
        font-size: 1.15rem;
      }
    }

    .our-story,
    .mission-vision {
      padding: 70px 0;
    }

    .cta-section {
      padding: 45px 0;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 60px 0 40px;

      .hero-title {
        font-size: 2.2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }
    }

    .our-story,
    .mission-vision {
      padding: 60px 0;
    }

    .cta-section {
      padding: 40px 0;
    }
  }

    .mission-vision-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }


    .cta-content {
      max-width: 100%;

      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding: 50px 0 30px;

      .hero-title {
        font-size: 1.8rem;
      }

      .hero-subtitle {
        font-size: 0.95rem;
      }
    }

    .our-story,
    .mission-vision {
      padding: 50px 0;
    }

    .cta-section {
      padding: 35px 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .mission-card,
    .vision-card,
    .values-card {
      padding: 1.5rem;
    }

    .cta-content {
      h2 {
        font-size: 1.5rem;
        line-height: 1.3;
      }

      p {
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }
  }
`;