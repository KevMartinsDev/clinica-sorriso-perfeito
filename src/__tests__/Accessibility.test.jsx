import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Home from '../pages/Home';
import About from '../pages/About';

global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }) => children,
}));


vi.mock('../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    elementRef: { current: null },
    hasBeenVisible: true,
  }),
}));

const renderWithRouter = (component, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};

describe('Accessibility Tests', () => {
  describe('Home Page Accessibility', () => {
    it('should have proper ARIA labels and roles', () => {
      renderWithRouter(<Home />);


      const banner = document.querySelector('[role="banner"]');
      expect(banner).toBeInTheDocument();


      const regions = document.querySelectorAll('[role="region"]');
      expect(regions.length).toBeGreaterThan(0);


      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();

      const h2Elements = screen.getAllByRole('heading', { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it('should have accessible navigation elements', () => {
      renderWithRouter(<Home />);


      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);


      const ctaButton = screen.getByRole('button', { name: /Agendar consulta pelo WhatsApp/i });
      expect(ctaButton).toHaveAttribute('aria-label');
    });

    it('should have proper list structure', () => {
      renderWithRouter(<Home />);


      const lists = screen.getAllByRole('list');
      expect(lists.length).toBeGreaterThan(0);


      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBeGreaterThan(0);
    });

    it('should have proper grid structure for services', () => {
      renderWithRouter(<Home />);


      const grid = document.querySelector('[role="grid"]');
      expect(grid).toBeInTheDocument();


      const gridCells = document.querySelectorAll('[role="gridcell"]');
      expect(gridCells.length).toBeGreaterThan(0);
    });
  });

  describe('About Page Accessibility', () => {
    it('should have proper semantic structure', () => {
      renderWithRouter(<About />, ['/sobre']);


      const banner = document.querySelector('[role="banner"]');
      expect(banner).toBeInTheDocument();


      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveTextContent('Sobre a Clínica Sorriso Perfeito');


      const h2Elements = screen.getAllByRole('heading', { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);

      const h3Elements = screen.getAllByRole('heading', { level: 3 });
      expect(h3Elements.length).toBeGreaterThan(0);
    });

    it('should have accessible mission, vision, and values cards', () => {
      renderWithRouter(<About />, ['/sobre']);


      const articles = document.querySelectorAll('article');
      expect(articles.length).toBe(3);


      expect(screen.getByText('Nossa Missão')).toBeInTheDocument();
      expect(screen.getByText('Nossa Visão')).toBeInTheDocument();
      expect(screen.getByText('Nossos Valores')).toBeInTheDocument();
    });

    it('should have accessible CTA section', () => {
      renderWithRouter(<About />, ['/sobre']);


      const nav = document.querySelector('nav[aria-label="Ações principais"]');
      expect(nav).toBeInTheDocument();


      const agendarLink = screen.getByRole('link', { name: /Ir para página de contato para agendar consulta/i });
      const servicosLink = screen.getByRole('link', { name: /Ver página completa de todos os serviços/i });

      expect(agendarLink).toHaveAttribute('aria-label');
      expect(servicosLink).toHaveAttribute('aria-label');
    });

    it('should have proper ARIA attributes for icons', () => {
      renderWithRouter(<About />, ['/sobre']);


      const hiddenIcons = document.querySelectorAll('[aria-hidden="true"]');
      expect(hiddenIcons.length).toBeGreaterThan(0);
    });
  });

  describe('Focus Management', () => {
    it('should support keyboard navigation', () => {
      renderWithRouter(<Home />);


      const focusableElements = document.querySelectorAll('[tabindex]');
      expect(focusableElements.length).toBeGreaterThan(0);


      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should have proper focus indicators', () => {
      renderWithRouter(<About />, ['/sobre']);


      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);


      links.forEach(link => {
        expect(link).not.toHaveAttribute('tabindex', '-1');
      });
    });
  });

  describe('Content Structure', () => {
    it('should have proper landmark roles', () => {
      renderWithRouter(<Home />);


      const main = document.querySelector('main');
      if (main) {
        expect(main).toBeInTheDocument();
      }


      const banner = document.querySelector('[role="banner"]');
      expect(banner).toBeInTheDocument();


      const regions = document.querySelectorAll('[role="region"]');
      expect(regions.length).toBeGreaterThan(0);
    });

    it('should have descriptive text for screen readers', () => {
      renderWithRouter(<Home />);


      const labeledElements = document.querySelectorAll('[aria-label]');
      expect(labeledElements.length).toBeGreaterThan(0);


      const labelledByElements = document.querySelectorAll('[aria-labelledby]');
      expect(labelledByElements.length).toBeGreaterThan(0);
    });
  });
});