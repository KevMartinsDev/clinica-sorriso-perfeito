import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

describe('Hero Component', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  test('renders title and subtitle correctly', () => {
    renderWithRouter(<Hero />);
    
    expect(screen.getByText('Transformamos sorrisos há mais de 10 anos')).toBeInTheDocument();
    expect(screen.getByText('Cuidamos da saúde bucal de toda sua família com carinho, tecnologia e profissionalismo.')).toBeInTheDocument();
  });

  test('renders all benefits', () => {
    renderWithRouter(<Hero />);
    
    const benefits = [
      'Tratamentos sem dor',
      'Tecnologia de ponta',
      'Ambiente acolhedor',
      'Agendamento online 24h'
    ];
    
    benefits.forEach(benefit => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  test('CTA button is present and clickable', () => {
    renderWithRouter(<Hero />);
    
    const ctaButton = screen.getByTestId('cta-button');
    expect(ctaButton).toBeInTheDocument();
    expect(screen.getByText('Agende sua consulta')).toBeInTheDocument();
    
    fireEvent.click(ctaButton);
    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://wa.me/555591679300?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.',
      '_blank'
    );
  });

  test('floating card is rendered', () => {
    renderWithRouter(<Hero />);
    
    expect(screen.getByText('Atendimento 24h')).toBeInTheDocument();
    expect(screen.getByText('Emergências atendidas a qualquer hora')).toBeInTheDocument();
  });

  test('component renders without breaking when animations are disabled', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    renderWithRouter(<Hero />);
    
    expect(screen.getByText('Transformamos sorrisos há mais de 10 anos')).toBeInTheDocument();
    
    window.matchMedia = originalMatchMedia;
  });
});