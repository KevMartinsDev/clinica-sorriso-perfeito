import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #2E8B57;
    --secondary-color: #87CEEB;  
    --accent-color: #FFD700;
    --text-dark: #333;
    --text-light: #666;
    --white: #fff;
    --light-gray: #f8f9fa;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 1.2;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Smooth loading for images */
  img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img[loading="lazy"].loaded {
    opacity: 1;
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border: none;
  }

  .btn-primary {
    background: var(--primary-color);
    color: white;
  }

  .btn-primary:hover {
    background: #246342;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: var(--primary-color);
    color: white;
    border: 2px solid var(--primary-color);
  }

  .btn-secondary:hover {
    background: #246342;
    color: white;
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }

  .btn-outline:hover {
    background: var(--primary-color);
    color: white;
  }

  .service-card .btn-outline {
    background: white;
    color: var(--primary-color);
    border: 2px solid white;
    font-weight: 600;
  }

  .service-card .btn-outline:hover {
    background: var(--accent-color);
    color: var(--primary-color);
    border-color: var(--accent-color);
    transform: translateY(-2px);
  }

  .btn-small {
    padding: 8px 16px;
    font-size: 14px;
  }

  .btn-whatsapp {
    background: #25D366;
    color: white;
  }

  .btn-whatsapp:hover {
    background: #1db954;
  }

  .btn-emergency {
    background: #dc3545;
    color: white;
  }

  .btn-emergency:hover {
    background: #c82333;
  }

  /* Section Styles */
  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-dark);
  }

  /* Hero Sections */
  .hero-section {
    background: linear-gradient(135deg, var(--primary-color) 0%, #3a9d66 100%);
    color: white;
    padding: 120px 0 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* About Page Styles */
  .about-page {
    min-height: 100vh;
  }

  .our-story {
    padding: 100px 0;
    background: white;
    position: relative;
  }

  .our-story::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .story-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .story-text {
    margin-top: 3rem;
  }

  .story-text p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--text-light);
    font-weight: 400;
  }

  /* Team Section Styles */
  .team-section {
    padding: 100px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .team-card {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    transition: all 0.4s ease;
    position: relative;
  }

  .team-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  }

  .team-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 32px 80px rgba(0,0,0,0.12);
  }

  .team-card-image {
    width: 100%;
    height: 280px;
    overflow: hidden;
    position: relative;
  }

  .team-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    transition: transform 0.4s ease;
  }

  .team-card:hover .team-card-image img {
    transform: scale(1.05);
  }

  .team-card-content {
    padding: 2.5rem 2rem;
  }

  .team-member-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  .team-member-specialty {
    font-size: 1rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .team-member-specialty strong {
    color: var(--primary-color);
  }

  .team-member-education {
    font-size: 0.95rem;
    color: var(--text-light);
    margin-bottom: 1.25rem;
    font-weight: 400;
  }

  .team-member-education strong {
    color: var(--text-dark);
  }

  .team-member-description {
    font-size: 1rem;
    color: var(--text-light);
    line-height: 1.7;
    font-style: italic;
    padding-top: 1rem;
    border-top: 1px solid #e9ecef;
  }

  .differentials-section {
    margin-top: 5rem;
    text-align: center;
  }

  .differentials-title {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 3rem;
    font-weight: 600;
  }

  .differentials-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    list-style: none;
    max-width: 1000px;
    margin: 0 auto;
  }

  .differential-item {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform 0.3s ease;
  }

  .differential-item:hover {
    transform: translateY(-4px);
  }

  .differential-icon {
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .differential-item:hover .differential-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .mission-vision {
    padding: 80px 0;
    background: var(--light-gray);
  }

  .mission-vision-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .mission-card, .vision-card, .values-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .mission-card:hover, .vision-card:hover, .values-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.15);
  }

  .card-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .mission-card .card-icon {
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
  }

  .vision-card .card-icon {
    background: rgba(65, 105, 225, 0.15);
    color: #4169E1;
  }

  .values-card .card-icon {
    background: rgba(255, 107, 53, 0.15);
    color: #FF6B35;
  }

  .mission-card:hover .card-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .vision-card:hover .card-icon {
    background: #4169E1;
    color: white;
    transform: scale(1.1);
  }

  .values-card:hover .card-icon {
    background: #FF6B35;
    color: white;
    transform: scale(1.1);
  }

  .mission-card h3, .vision-card h3, .values-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .mission-card p, .vision-card p, .values-card p {
    line-height: 1.7;
    color: var(--text-light);
  }

  .cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #4169E1, #2E5DCA);
    color: white;
    text-align: center;
  }

  .cta-section .btn-primary,
  .cta-section .btn-secondary {
    background: white;
    color: #4169E1;
    border: 2px solid white;
  }

  .cta-section .btn-primary:hover,
  .cta-section .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: white;
    transform: translateY(-2px);
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: 2.5rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Services Page Styles */
  .services-page {
    min-height: 100vh;
  }

  .services-section {
    padding: 100px 0 60px 0;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  .service-category {
    margin-bottom: 5rem;
    position: relative;
  }

  .service-category::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
  }

  .category-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .service-card {
    background: linear-gradient(135deg, var(--primary-color) 0%, #3a9d66 100%);
    border: none;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.4s ease;
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.2);
    position: relative;
    overflow: hidden;
    min-height: 200px;
    justify-content: space-between;
    cursor: pointer;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary-color);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .service-card:hover::before {
    transform: scaleY(1);
  }

  .service-card:hover {
    background: linear-gradient(135deg, var(--secondary-color) 0%, #6BB6E8 100%);
    box-shadow: 0 20px 60px rgba(135, 206, 235, 0.3);
    transform: translateY(-8px);
  }

  .service-card:hover::before {
    transform: scaleY(1);
  }

  .service-info {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-info h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    line-height: 1.4;
    margin: 0;
  }

  .service-price {
    color: var(--accent-color);
    font-weight: 700;
    font-size: 1.375rem;
    margin: 1rem 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .payment-info {
    padding: 60px 0;
    background: var(--light-gray);
    position: relative;
  }

  .payment-info::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .payment-info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 1024px) {
    .payment-info-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  .info-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 12px 48px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
    position: relative;
  }

  .info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 0 0 4px 4px;
  }

  .info-card:hover {
    transform: translateY(-8px);
  }

  .info-card .info-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    filter: none;
  }

  .info-card:nth-child(1) .info-icon {
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
  }

  .info-card:nth-child(2) .info-icon {
    background: rgba(65, 105, 225, 0.15);
    color: #4169E1;
  }

  .info-card:nth-child(3) .info-icon {
    background: rgba(255, 107, 53, 0.15);
    color: #FF6B35;
  }

  .info-card:nth-child(4) .info-icon {
    background: rgba(138, 43, 226, 0.15);
    color: #8A2BE2;
  }

  .info-card:hover .info-icon {
    transform: scale(1.1);
  }

  .info-card:nth-child(1):hover .info-icon {
    background: var(--primary-color);
    color: white;
  }

  .info-card:nth-child(2):hover .info-icon {
    background: #4169E1;
    color: white;
  }

  .info-card:nth-child(3):hover .info-icon {
    background: #FF6B35;
    color: white;
  }

  .info-card:nth-child(4):hover .info-icon {
    background: #8A2BE2;
    color: white;
  }

  .info-card h3 {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1.25rem;
  }

  .info-card p {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 1rem;
  }

  .insurance-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .insurance-item {
    background: linear-gradient(135deg, var(--primary-color), #3a9d66);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.2);
  }

  .services-cta {
    padding: 100px 0;
    background: linear-gradient(135deg, var(--primary-color) 0%, #2c7a54 100%);
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .services-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  }

  .services-cta .cta-content {
    position: relative;
    z-index: 2;
  }

  .testimonials-preview {
    padding: 100px 0;
    background: white;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 4rem;
  }

  .testimonial-card {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 2.5rem;
    border-radius: 20px;
    text-align: center;
    position: relative;
    box-shadow: 0 8px 32px rgba(0,0,0,0.06);
    transition: transform 0.3s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-4px);
  }

  .testimonial-card::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    color: var(--primary-color);
    opacity: 0.3;
    font-family: serif;
  }

  .testimonial-stars {
    color: var(--accent-color);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
  }

  .testimonial-text {
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: var(--text-light);
    font-size: 1.125rem;
  }

  .testimonial-author {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1rem;
    position: relative;
  }

  .testimonial-author::before {
    content: '—';
    margin-right: 0.5rem;
    opacity: 0.6;
  }

  /* Contact Page Styles */
  .contact-page {
    min-height: 100vh;
  }

  .contact-content {
    padding: 100px 0;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
    margin-top: 2rem;
  }

  .contact-info {
    background: white;
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    position: relative;
  }

  .contact-info::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 24px 24px 0 0;
  }

  .contact-info h2 {
    font-size: 2.25rem;
    color: var(--primary-color);
    margin-bottom: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  .info-section {
    margin-bottom: 3rem;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    transition: transform 0.3s ease;
  }

  .info-item:hover {
    transform: translateX(8px);
  }

  .info-icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 0.25rem;
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .info-item:hover .info-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .info-details h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
  }

  .info-details p, .info-details a {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 1rem;
  }

  .whatsapp-link {
    color: #25D366 !important;
    font-weight: 700;
    transition: color 0.3s ease;
  }

  .whatsapp-link:hover {
    color: #1db954 !important;
  }

  .hours-section {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 12px 48px rgba(0,0,0,0.06);
  }

  .hours-section h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .hours-list {
    display: grid;
    gap: 0.75rem;
  }

  .hours-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    transition: transform 0.2s ease;
  }

  .hours-item:hover {
    transform: scale(1.02);
  }

  .day {
    font-weight: 600;
    color: var(--text-dark);
  }

  .time {
    color: var(--primary-color);
    font-weight: 600;
  }

  .contact-form-section {
    background: white;
    padding: 3rem;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    position: relative;
  }

  .contact-form-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
    border-radius: 24px 24px 0 0;
  }

  .contact-form-section h2 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  .contact-form-section p {
    color: var(--text-light);
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .map-section {
    padding: 100px 0;
    background: var(--light-gray);
    position: relative;
  }

  .map-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  .map-container {
    margin-top: 3rem;
  }

  .map-placeholder {
    background: white;
    border-radius: 24px;
    padding: 5rem 3rem;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    position: relative;
  }

  .map-placeholder::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 0 0 6px 6px;
  }

  .map-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(46, 139, 87, 0.15);
    color: var(--primary-color);
    font-size: 3rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .map-placeholder:hover .map-icon {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  .map-placeholder p {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2.5rem;
    line-height: 1.7;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .emergency-contact {
    padding: 100px 0;
    background: white;
  }

  .emergency-card {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    padding: 4rem 3rem;
    border-radius: 24px;
    display: flex;
    align-items: center;
    gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 20px 60px rgba(220, 53, 69, 0.2);
    position: relative;
    overflow: hidden;
  }

  .emergency-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="emergency-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23emergency-pattern)"/></svg>');
  }

  .emergency-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 3rem;
    flex-shrink: 0;
    animation: pulse 2s infinite;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
  }

  .emergency-card:hover .emergency-icon {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .emergency-content {
    z-index: 2;
    position: relative;
  }

  .emergency-content h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .emergency-content p {
    margin-bottom: 2rem;
    line-height: 1.7;
    opacity: 0.95;
    font-size: 1.125rem;
  }

  /* Form Styles */
  .input-group {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .input-label {
    display: block;
    font-weight: 600;
    color: var(--text-dark);
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    transition: all 0.3s ease;
  }

  .required {
    color: #e74c3c;
    margin-left: 0.25rem;
  }

  .input {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background: white;
    color: var(--text-dark);
    transition: all 0.3s ease;
    font-family: inherit;
    outline: none;
    
    &::placeholder {
      color: #a0a8b0;
      font-size: 0.95rem;
    }
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
      transform: translateY(-1px);
    }
    
    &:hover:not(:focus) {
      border-color: #c3d4db;
    }
  }

  .input-error {
    border-color: #e74c3c !important;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
  }

  .error-message {
    display: block;
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  .select {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background: white;
    color: var(--text-dark);
    transition: all 0.3s ease;
    font-family: inherit;
    outline: none;
    cursor: pointer;
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
      transform: translateY(-1px);
    }
    
    &:hover:not(:focus) {
      border-color: #c3d4db;
    }
  }

  .textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background: white;
    color: var(--text-dark);
    transition: all 0.3s ease;
    font-family: inherit;
    outline: none;
    resize: vertical;
    min-height: 120px;
    
    &::placeholder {
      color: #a0a8b0;
      font-size: 0.95rem;
    }
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
      transform: translateY(-1px);
    }
    
    &:hover:not(:focus) {
      border-color: #c3d4db;
    }
  }

  /* Radio Button Styling */
  input[type="radio"] {
    width: 20px;
    height: 20px;
    border: 2px solid #e1e8ed;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    
    &:checked {
      border-color: var(--primary-color);
      background: var(--primary-color);
    }
    
    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
    }
  }

  /* Error Alert Animation */
  @keyframes slideInAlert {
    from { 
      transform: translateX(100%); 
      opacity: 0; 
    }
    to { 
      transform: translateX(0); 
      opacity: 1; 
    }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  .input-error {
    animation: shake 0.5s ease-in-out;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .hero-title {
      font-size: 3rem;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .emergency-card {
      gap: 2rem;
      padding: 3rem 2.5rem;
    }

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }

    .hero-section {
      padding: 100px 0 70px;
    }

    .hero-title {
      font-size: 2.5rem;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }

    .our-story, .team-section, .services-section, .contact-content, .map-section, .emergency-contact {
      padding: 80px 0;
    }

    .mission-vision-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .mission-card, .vision-card, .values-card {
      padding: 2rem;
    }

    .team-card-image {
      height: 250px;
    }

    .team-card-content {
      padding: 2rem 1.5rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.5rem;
    }

    .category-title {
      font-size: 2rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .contact-info, .contact-form-section {
      padding: 2.5rem;
    }

    .info-item {
      padding: 1.25rem;
    }

    .emergency-card {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
      padding: 3rem 2rem;
    }

    .emergency-icon {
      font-size: 4rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .btn {
      width: 100%;
      max-width: 280px;
    }

    .testimonials-grid, .payment-info-grid, .differentials-list {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .map-placeholder {
      padding: 4rem 2.5rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 16px;
    }

    .hero-section {
      padding: 80px 0 60px;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .section-title {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .our-story, .team-section, .services-section, .contact-content, .map-section, .emergency-contact {
      padding: 60px 0;
    }

    .story-text p {
      font-size: 1.125rem;
    }

    .mission-card, .vision-card, .values-card {
      padding: 1.5rem;
    }

    .team-card-image {
      height: 220px;
    }

    .team-card-content {
      padding: 1.5rem;
    }

    .team-member-name {
      font-size: 1.25rem;
    }

    .service-card {
      padding: 1.25rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .service-price {
      margin-left: 0;
      font-size: 1rem;
    }

    .category-title {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .contact-info, .contact-form-section {
      padding: 2rem 1.5rem;
    }

    .contact-info h2, .contact-form-section h2 {
      font-size: 1.75rem;
    }

    .info-item {
      padding: 1rem;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    .info-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    .hours-section {
      padding: 2rem 1.5rem;
    }

    .hours-item {
      padding: 0.75rem 1rem;
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }

    .emergency-card {
      padding: 2rem 1.5rem;
      gap: 1.5rem;
    }

    .emergency-content h3 {
      font-size: 1.5rem;
    }

    .emergency-content p {
      font-size: 1rem;
    }

    .map-placeholder {
      padding: 3rem 1.5rem;
    }

    .map-icon {
      font-size: 4rem;
    }

    .cta-content h2 {
      font-size: 2rem;
    }

    .cta-content p {
      font-size: 1rem;
    }

    .testimonial-card {
      padding: 2rem 1.5rem;
    }

    .testimonial-text {
      font-size: 1rem;
    }

    .info-card {
      padding: 2rem 1.5rem;
    }

    .differential-item {
      padding: 1.5rem;
      flex-direction: column;
      text-align: center;
      gap: 0.75rem;
    }
  }

  /* Accessibility and UX Improvements */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus states for better accessibility */
  .btn:focus,
  .whatsapp-link:focus,
  .info-details a:focus {
    outline: 3px solid var(--accent-color);
    outline-offset: 2px;
  }

  /* Loading states */
  .loading {
    opacity: 0.7;
    pointer-events: none;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Print styles */
  @media print {
    .hero-section::before,
    .our-story::before,
    .payment-info::before,
    .map-section::before,
    .emergency-card::before,
    .services-cta::before {
      display: none;
    }

    .emergency-card,
    .service-card,
    .team-card,
    .testimonial-card,
    .info-card {
      box-shadow: none;
      border: 1px solid #ddd;
    }
  }
`;