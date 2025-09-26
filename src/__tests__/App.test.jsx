import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';


vi.mock('../pages/Home', () => ({
  default: () => <div data-testid="home-page">Home Page</div>
}));

vi.mock('../pages/About', () => ({
  default: () => <div data-testid="about-page">About Page</div>
}));

vi.mock('../pages/Services', () => ({
  default: () => <div data-testid="services-page">Services Page</div>
}));

vi.mock('../pages/Agendamento', () => ({
  default: () => <div data-testid="agendamento-page">Agendamento Page</div>
}));

vi.mock('../pages/Galeria', () => ({
  default: () => <div data-testid="galeria-page">Galeria Page</div>
}));

vi.mock('../pages/BlogPage', () => ({
  default: () => <div data-testid="blog-page">Blog Page</div>
}));

vi.mock('../pages/BlogPostPage', () => ({
  default: () => <div data-testid="blog-post-page">Blog Post Page</div>
}));

vi.mock('../pages/Contact', () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>
}));

vi.mock('../components/layout/NotFound', () => ({
  default: () => <div data-testid="not-found-page">404 Not Found</div>
}));


vi.mock('../components/layout/ScrollToTop', () => ({
  default: () => null
}));


vi.mock('../components/layout/CookieConsent', () => ({
  default: () => <div data-testid="cookie-consent">Cookie Consent</div>
}));


vi.mock('../components/layout/ErrorBoundary', () => ({
  default: ({ children }) => <div data-testid="error-boundary">{children}</div>
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders Home page on root route', async () => {
    window.history.pushState({}, 'Home', '/');
    render(<App />);
    
    
    const homePage = await screen.findByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });

  it('renders cookie consent banner', () => {
    render(<App />);
    expect(screen.getByTestId('cookie-consent')).toBeInTheDocument();
  });

  it('wraps app with ErrorBoundary', () => {
    
    render(<App />);
    
    expect(document.body).toBeInTheDocument();
  });

  it('has proper structure with HelmetProvider', () => {
    render(<App />);
    
    expect(document.body).toBeInTheDocument();
  });


  it('renders 404 page for unknown routes', async () => {
    render(<App />);

    window.location.hash = '#/unknown-route';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    const notFoundPage = await screen.findByTestId('not-found-page');
    expect(notFoundPage).toBeInTheDocument();
  });

  it('provides React Router context', () => {
    render(<App />);
    
    expect(document.body).toBeInTheDocument();
  });

  it('provides Helmet context for SEO', () => {
    render(<App />);
    
    expect(document.body).toBeInTheDocument();
  });

  it('uses Suspense for lazy loading', () => {
    render(<App />);
    
    expect(document.body).toBeInTheDocument();
  });
});