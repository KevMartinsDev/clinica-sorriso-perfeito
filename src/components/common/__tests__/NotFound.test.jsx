import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import NotFound from '../NotFound';

const renderWithRouter = (children) => {
  return render(
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

describe('NotFound', () => {
  it('renders 404 error message', () => {
    renderWithRouter(<NotFound />);

    expect(screen.getByLabelText('Erro 404')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(screen.getByText(/A página que você está procurando não existe/)).toBeInTheDocument();
  });

  it('renders main action buttons', () => {
    renderWithRouter(<NotFound />);

    const homeButton = screen.getByRole('link', { name: /ir para início/i });
    const appointmentButton = screen.getByRole('link', { name: /agendar consulta/i });

    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveAttribute('href', '/');
    
    expect(appointmentButton).toBeInTheDocument();
    expect(appointmentButton).toHaveAttribute('href', '/agendamento');
  });

  it('renders navigation menu with all links', () => {
    renderWithRouter(<NotFound />);

    const navigation = screen.getByRole('navigation', { name: /navegação principal/i });
    expect(navigation).toBeInTheDocument();

    const expectedLinks = [
      { text: 'Sobre Nós', href: '/sobre' },
      { text: 'Serviços', href: '/servicos' },
      { text: 'Galeria', href: '/galeria' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contato', href: '/contato' }
    ];

    expectedLinks.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('has proper semantic structure', () => {
    renderWithRouter(<NotFound />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();
  });

  it('renders responsive design elements', () => {
    renderWithRouter(<NotFound />);

    const container = screen.getByRole('main');
    expect(container).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center'
    });
  });

  it('has proper heading hierarchy', () => {
    renderWithRouter(<NotFound />);

    const mainHeading = screen.getByRole('heading', { level: 1 });
    const subHeading = screen.getByRole('heading', { level: 2 });

    expect(mainHeading).toHaveTextContent('404');
    expect(subHeading).toHaveTextContent('Página não encontrada');
  });
});