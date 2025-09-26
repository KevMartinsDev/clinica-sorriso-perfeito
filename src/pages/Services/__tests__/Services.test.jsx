import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Services from '../index';


vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }) => children,
}));


vi.mock('../../components/ui/Modal', () => ({
  default: ({ isOpen, onClose, service, category }) =>
    isOpen ? (
      <div data-testid="modal">
        <button onClick={onClose} data-testid="modal-close">Close</button>
        <div data-testid="modal-service-name">{service?.name}</div>
        <div data-testid="modal-category">{category}</div>
      </div>
    ) : null
}));

const renderWithRouter = (component, initialEntries = ['/servicos']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};

describe('Services Page Accessibility and UX Tests', () => {
  describe('Accessibility Features', () => {
    it('should have proper semantic structure with landmarks', () => {
      renderWithRouter(<Services />);

      const banner = document.querySelector('[role="banner"]');
      expect(banner).toBeInTheDocument();

      const main = document.querySelector('[role="main"]');
      expect(main).toBeInTheDocument();

      const regions = document.querySelectorAll('[role="region"]');
      expect(regions.length).toBeGreaterThan(0);
    });

    it('should have proper heading hierarchy', () => {
      renderWithRouter(<Services />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveTextContent('Nossos Serviços');

      const h2Elements = screen.getAllByRole('heading', { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);

      const h3Elements = screen.getAllByRole('heading', { level: 3 });
      expect(h3Elements.length).toBeGreaterThan(0);
    });

    it('should have proper ARIA labels and descriptions', () => {
      renderWithRouter(<Services />);

      const labelledByElements = document.querySelectorAll('[aria-labelledby]');
      expect(labelledByElements.length).toBeGreaterThan(0);

      const labeledElements = document.querySelectorAll('[aria-label]');
      expect(labeledElements.length).toBeGreaterThan(0);

      const hiddenElements = document.querySelectorAll('.visually-hidden');
      expect(hiddenElements.length).toBeGreaterThan(0);
    });

    it('should have proper grid structure', () => {
      renderWithRouter(<Services />);

      const grids = document.querySelectorAll('[role="grid"]');
      expect(grids.length).toBeGreaterThan(0);

      const gridCells = document.querySelectorAll('[role="gridcell"]');
      expect(gridCells.length).toBeGreaterThan(0);
    });

    it('should support keyboard navigation', () => {
      renderWithRouter(<Services />);

      const focusableCards = document.querySelectorAll('[tabindex="0"]');
      expect(focusableCards.length).toBeGreaterThan(0);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);

      const firstCard = focusableCards[0];
      if (firstCard) {
        fireEvent.keyDown(firstCard, { key: 'Enter' });
      }
    });

    it('should have accessible links with proper attributes', () => {
      renderWithRouter(<Services />);

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);

      const whatsappLinks = screen.getAllByText('WhatsApp');
      const whatsappLink = whatsappLinks.find(link => link.closest('a')?.getAttribute('aria-label')?.includes('WhatsApp'))?.closest('a') || whatsappLinks[0]?.closest('a');
      expect(whatsappLink).toHaveAttribute('target', '_blank');
      expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(whatsappLink).toHaveAttribute('aria-label');
    });
  });

  describe('Responsive Design', () => {
    it('should render service cards in a grid layout', () => {
      renderWithRouter(<Services />);

      const serviceGrids = document.querySelectorAll('.services-grid');
      expect(serviceGrids.length).toBeGreaterThan(0);
    });

    it('should have payment info grid', () => {
      renderWithRouter(<Services />);

      const paymentGrid = document.querySelector('.payment-info-grid');
      expect(paymentGrid).toBeInTheDocument();
    });

    it('should have testimonials grid', () => {
      renderWithRouter(<Services />);

      const testimonialsGrid = document.querySelector('.testimonials-grid');
      expect(testimonialsGrid).toBeInTheDocument();
    });
  });

  describe('Content Structure', () => {
    it('should display service categories and services', () => {
      renderWithRouter(<Services />);

      const serviceButtons = screen.getAllByText('Saiba mais');
      expect(serviceButtons.length).toBeGreaterThan(0);
    });

    it('should display payment information section', () => {
      renderWithRouter(<Services />);

      expect(screen.getByText('Parcelamento')).toBeInTheDocument();
      expect(screen.getByText('Convênios')).toBeInTheDocument();
      expect(screen.getByText('Orçamento')).toBeInTheDocument();
    });

    it('should display CTA section with contact options', () => {
      renderWithRouter(<Services />);

      expect(screen.getByText('Interessado em algum tratamento?')).toBeInTheDocument();
      expect(screen.getByText('Agendar Consulta')).toBeInTheDocument();
      expect(screen.getAllByText('WhatsApp').length).toBeGreaterThan(0);
    });

    it('should display testimonials section', () => {
      renderWithRouter(<Services />);

      expect(screen.getByText('O que nossos pacientes dizem')).toBeInTheDocument();

      const ratingContainers = document.querySelectorAll('.rating-container');
      expect(ratingContainers.length).toBeGreaterThan(0);
    });
  });

  describe('Interactive Features', () => {
    it('should have clickable service buttons', () => {
      renderWithRouter(<Services />);

      const serviceButtons = screen.getAllByText('Saiba mais');
      expect(serviceButtons.length).toBeGreaterThan(0);

      serviceButtons.forEach(button => {
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'button');
      });
    });

    it('should support keyboard navigation on service cards', () => {
      renderWithRouter(<Services />);

      const serviceCards = document.querySelectorAll('[role="gridcell"][tabindex="0"]');
      expect(serviceCards.length).toBeGreaterThan(0);

      serviceCards.forEach(card => {
        expect(card).toHaveAttribute('tabindex', '0');
      });
    });

    it('should have proper button types and attributes', () => {
      renderWithRouter(<Services />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        if (button.getAttribute('type') !== null) {
          expect(button).toHaveAttribute('type', 'button');
        }
      });
    });
  });

  describe('Visual Hierarchy', () => {
    it('should have proper heading structure for each section', () => {
      renderWithRouter(<Services />);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Nossos Serviços');

      const sectionTitles = screen.getAllByRole('heading', { level: 2 });
      expect(sectionTitles.length).toBeGreaterThan(0);

      const serviceNames = screen.getAllByRole('heading', { level: 3 });
      expect(serviceNames.length).toBeGreaterThan(0);
    });

    it('should have proper price formatting', () => {
      renderWithRouter(<Services />);

      const prices = document.querySelectorAll('.service-price');
      expect(prices.length).toBeGreaterThan(0);

      prices.forEach(price => {
        expect(price).toHaveAttribute('aria-label');
      });
    });
  });
});