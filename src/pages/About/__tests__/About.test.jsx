import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import About from '../index';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});


vi.mock('../../../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    elementRef: { current: null },
    hasBeenVisible: true,
  }),
}));

const renderWithRouter = (component, initialEntries = ['/sobre']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  );
};

describe('About Page', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('should render the about page with all sections', () => {
    renderWithRouter(<About />);

    expect(screen.getByText('Sobre a Clínica Sorriso Perfeito')).toBeInTheDocument();
    expect(screen.getByText('Nossa História')).toBeInTheDocument();
    expect(screen.getByText('Nossa Missão')).toBeInTheDocument();
    expect(screen.getByText('Nossa Visão')).toBeInTheDocument();
    expect(screen.getByText('Nossos Valores')).toBeInTheDocument();
  });

  it('should render CTA buttons', () => {
    renderWithRouter(<About />);

    const agendarButton = screen.getByText('Agendar Consulta');
    const servicosButton = screen.getByText('Ver Serviços');

    expect(agendarButton).toBeInTheDocument();
    expect(servicosButton).toBeInTheDocument();
  });

  it('should have correct href attributes for navigation links', () => {
    renderWithRouter(<About />);

    const agendarButton = screen.getByText('Agendar Consulta').closest('a');
    const servicosButton = screen.getByText('Ver Serviços').closest('a');

    expect(agendarButton).toHaveAttribute('href', '/contato');
    expect(servicosButton).toHaveAttribute('href', '/servicos');
  });

  it('should apply correct CSS classes to buttons', () => {
    renderWithRouter(<About />);

    const agendarButton = screen.getByText('Agendar Consulta');
    const servicosButton = screen.getByText('Ver Serviços');

    expect(agendarButton).toHaveClass('btn', 'btn-primary');
    expect(servicosButton).toHaveClass('btn', 'btn-secondary');
  });

  it('should render the hero section with correct content', () => {
    renderWithRouter(<About />);

    expect(screen.getByText('Cuidando do seu sorriso com excelência e humanização desde 2014')).toBeInTheDocument();
  });

  it('should render mission, vision and values cards', () => {
    renderWithRouter(<About />);

    expect(screen.getByText(/Proporcionar tratamentos odontológicos de excelência/)).toBeInTheDocument();
    expect(screen.getByText(/Ser referência em odontologia na Vila Madalena/)).toBeInTheDocument();
    expect(screen.getByText(/Ética, transparência, excelência técnica/)).toBeInTheDocument();
  });

  it('should render the CTA section with call to action text', () => {
    renderWithRouter(<About />);

    expect(screen.getByText('Pronto para transformar seu sorriso?')).toBeInTheDocument();
    expect(screen.getByText('Agende sua consulta e descubra como podemos ajudar você a ter o sorriso dos seus sonhos.')).toBeInTheDocument();
  });
});