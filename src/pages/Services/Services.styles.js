import styled from 'styled-components';

export const ServicesContainer = styled.div`
  .hero-section {
    background: var(--primary-color);
    color: var(--white);
    padding: var(--space-3xl) 0 var(--space-2xl);
    text-align: center;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      margin-bottom: var(--space-lg);
      text-shadow: var(--shadow-sm);
      color: var(--white);
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: var(--font-size-xl);
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
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

  .services-section {
    padding: 80px 0;
    background: var(--white);

    .service-category {
      margin-bottom: 4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .category-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;

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

    .service-card {
      background: #2E8B57;
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      box-shadow: var(--shadow-md);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: 2px solid transparent;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      min-height: 280px;

      &:hover {
        transform: translateY(-12px) scale(1.02);
        background: linear-gradient(135deg, var(--secondary-color) 0%, #6BB6E8 100%);
        box-shadow: rgba(135, 206, 235, 0.3) 0px 20px 60px;
      }

      &:focus-within {
        outline: 3px solid var(--focus-color);
        outline-offset: 2px;
      }

      .service-icon {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: var(--space-lg);
        display: block;
      }

      .service-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .service-name {
        font-size: var(--font-size-xl);
        color: #fff;
        font-weight: 600;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      .service-description {
        color: #fff;
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }

      .service-price {
        font-size: var(--font-size-lg);
        color: #FFD700;
        font-weight: 700;
        margin-bottom: 1.5rem;
        display: block;
        width: 100%;
      }

      .btn {
        background: #fff;
        color: #2E8B57;
        border: 2px solid #fff;
        padding: 0.75rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: block;
        width: 80%;
        margin-top: auto;

        &:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }
      }

      @media (max-width: 768px) {
        padding: var(--space-lg);

        .service-name {
          font-size: var(--font-size-lg);
        }

        .service-price {
          font-size: var(--font-size-base);
        }
      }

      @media (max-width: 480px) {
        padding: var(--space-md);
      }
    }
  }

  .additional-info {
    padding: 80px 0;
    background: var(--light-gray);

    .info-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 3rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .info-card {
      background: var(--white);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05);
      }

      .info-icon {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      .info-title {
        font-size: 1.5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .info-description {
        color: var(--text-light);
        line-height: 1.6;
      }
    }
  }

  .payment-info {
    padding: 80px 0;
    background: var(--white);

    .section-title {
      font-size: 2.5rem;
      color: var(--primary-color);
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 600;
    }

    .payment-info-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;

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

    .info-card {
      background: var(--light-gray);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 2px solid transparent;

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05);

        .info-icon {
          transform: scale(1.1);
          color: white;
        }
      }


      .info-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 2rem;
        margin: 0 auto 1.5rem;
        transition: all 0.3s ease;
        background: rgba(46, 139, 87, 0.15);
        color: var(--primary-color);
      }

      &:nth-child(1) .info-icon {
        background: rgba(46, 139, 87, 0.15);
        color: var(--primary-color);
      }

      &:nth-child(2) .info-icon {
        background: rgba(65, 105, 225, 0.15);
        color: #4169e1;
      }

      &:nth-child(3) .info-icon {
        background: rgba(255, 107, 53, 0.15);
        color: #ff6b35;
      }

      &:nth-child(4) .info-icon {
        background: rgba(128, 0, 128, 0.15);
        color: #8a2be2;
      }

      &:nth-child(1):hover .info-icon {
        background: var(--primary-color);
        color: white;
      }

      &:nth-child(2):hover .info-icon {
        background: #4169e1;
        color: white;
      }

      &:nth-child(3):hover .info-icon {
        background: #ff6b35;
        color: white;
      }

      &:nth-child(4):hover .info-icon {
        background: #8a2be2;
        color: white;
      }

      h3 {
        font-size: 1.4rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      p {
        color: var(--text-dark);
        line-height: 1.6;
      }

      .insurance-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;

        .insurance-item {
          background: var(--primary-color);
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          text-align: center;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(46, 139, 87, 0.2);
          display: inline-block;
          width: fit-content;
          white-space: nowrap;

          &:hover {
            background: #1e5f3b;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
          }
        }
      }
    }
  }

  .services-cta {
    padding: 80px 0;
    background: var(--primary-color);
    color: var(--white);
    text-align: center;

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
        color: var(--white);
        white-space: nowrap;

        @media (max-width: 768px) {
          white-space: normal;
          font-size: 2rem;
        }

        @media (max-width: 480px) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        line-height: 1.6;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .btn {
      position: relative;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 180px;
      border: 2px solid transparent;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &.btn-primary {
        background: linear-gradient(135deg, var(--white) 0%, #f8f9fa 100%);
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(46, 139, 87, 0.25);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }

      &.btn-whatsapp {
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: var(--white);
        border-color: #25D366;

        &:hover {
          background: linear-gradient(135deg, #128C7E 0%, #0d6155 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }

        @media (max-width: 768px) {
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            animation: shine 2s infinite;
            z-index: 1;
          }

          @keyframes shine {
            0% {
              left: -100%;
            }
            50% {
              left: 100%;
            }
            100% {
              left: 100%;
            }
          }
        }
      }

      @media (max-width: 768px) {
        padding: 14px 28px;
        font-size: 0.95rem;
        min-width: 160px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        padding: 12px 24px;
        font-size: 0.9rem;
      }
    }
  }

  .cta-section {
    padding: 80px 0;
    background: var(--primary-color);
    color: var(--white);
    text-align: center;

    .cta-content {
      max-width: 600px;
      margin: 0 auto;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .cta-button {
      position: relative;
      padding: 16px 32px;
      background: linear-gradient(135deg, var(--white) 0%, #f8f9fa 100%);
      color: var(--primary-color);
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 180px;
      border: 2px solid var(--primary-color);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &:hover {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 25px rgba(46, 139, 87, 0.25);
      }

      &:active {
        transform: translateY(-1px) scale(1.01);
      }

      @media (max-width: 768px) {
        padding: 14px 28px;
        font-size: 0.95rem;
        min-width: 160px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        padding: 12px 24px;
        font-size: 0.9rem;
      }
    }

    .btn {
      position: relative;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 180px;
      border: 2px solid transparent;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      margin: 0 0.75rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      &.btn-primary {
        background: linear-gradient(135deg, var(--white) 0%, #f8f9fa 100%);
        color: var(--primary-color);
        border-color: var(--primary-color);

        &:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(46, 139, 87, 0.25);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }

      &.btn-whatsapp {
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: var(--white);
        border-color: #25D366;

        &:hover {
          background: linear-gradient(135deg, #128C7E 0%, #0d6155 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }

      @media (max-width: 768px) {
        padding: 14px 28px;
        font-size: 0.95rem;
        min-width: 160px;
        margin: 0 0.5rem;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        padding: 12px 24px;
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }
    }
  }

  .testimonials-preview {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%);

    @media (max-width: 768px) {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2.5rem;
      color: var(--text-dark);
      text-align: center;
      margin-bottom: 4rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .testimonial-card {
      position: relative;
      text-align: left;
      height: 100%;
      cursor: pointer;
      background: var(--white);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05);
      }

      .quote-icon {
        position: absolute;
        top: -10px;
        left: 1.5rem;
        background: var(--primary-color);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
      }

      .testimonial-text {
        font-size: 1.1rem;
        color: var(--text-dark);
        line-height: 1.6;
        margin: 1.5rem 0 2rem 0;
        font-style: italic;
        position: relative;
      }

      .patient-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: auto;
      }

      .patient-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), #45a049);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
      }

      .patient-details {
        flex: 1;
      }

      .patient-name {
        margin: 0 0 0.25rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      .patient-meta {
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        color: var(--text-gray);
      }

      .rating-container {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .star-icon {
        color: #ffd700;
        font-size: 1rem;
      }
    }
  }

  .modal-content {
    padding: 2rem;

    .modal-title {
      font-size: 1.8rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .modal-category {
      color: var(--text-light);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .modal-description {
      color: var(--text-dark);
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .modal-price {
      font-size: 1.3rem;
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .modal-benefits {
      margin-bottom: 2rem;

      h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          padding: 0.5rem 0;
          color: var(--text-dark);

          &:before {
            content: '✓';
            color: var(--primary-color);
            font-weight: bold;
            margin-right: 0.5rem;
          }
        }
      }
    }

    .modal-cta {
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);

      .cta-button {
        position: relative;
        padding: 14px 28px;
        background: linear-gradient(135deg, var(--primary-color) 0%, #1e5f3b 100%);
        color: var(--white);
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        min-width: 160px;
        border: 2px solid var(--primary-color);
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.25);
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        &:hover::before {
          left: 100%;
        }

        &:hover {
          background: linear-gradient(135deg, #1e5f3b 0%, #155a31 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(46, 139, 87, 0.4);
        }

        &:active {
          transform: translateY(-1px) scale(1.01);
        }
      }
    }
  }

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

    .services-section,
    .additional-info,
    .cta-section {
      padding: 60px 0;
    }

    .services-grid,
    .info-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .category-title,
    .info-title,
    .cta-content h2 {
      font-size: 2rem;
    }

    .service-card,
    .info-card {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .category-title,
    .info-title {
      font-size: 1.8rem;
    }

    .service-card,
    .info-card {
      padding: 1.25rem;
    }
  }
`;