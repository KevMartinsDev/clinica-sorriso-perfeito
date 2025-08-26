import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

describe('Testimonials Component', () => {
  test('renders section title and subtitle', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('O que nossos pacientes dizem')).toBeInTheDocument();
    expect(screen.getByText('Depoimentos reais de pessoas que transformaram seus sorrisos conosco')).toBeInTheDocument();
  });

  test('renders all 3 testimonials', () => {
    render(<Testimonials />);
    
    expect(screen.getByTestId('testimonial-1')).toBeInTheDocument();
    expect(screen.getByTestId('testimonial-2')).toBeInTheDocument();
    expect(screen.getByTestId('testimonial-3')).toBeInTheDocument();
  });

  test('displays correct patient names', () => {
    render(<Testimonials />);
    
    expect(screen.getByTestId('patient-name-1')).toHaveTextContent('Maria Santos');
    expect(screen.getByTestId('patient-name-2')).toHaveTextContent('Roberto Silva');
    expect(screen.getByTestId('patient-name-3')).toHaveTextContent('Ana Costa');
  });

  test('renders testimonial texts correctly', () => {
    render(<Testimonials />);
    
    expect(screen.getByTestId('testimonial-text-1')).toHaveTextContent(
      'Depois de anos com medo de dentista, a Dra. Maria me devolveu a confiança. Tratamento sem dor e resultado incrível!'
    );
    expect(screen.getByTestId('testimonial-text-2')).toHaveTextContent(
      'Meu filho adorou a consulta. Ambiente super acolhedor e profissionais que sabem lidar com crianças.'
    );
    expect(screen.getByTestId('testimonial-text-3')).toHaveTextContent(
      'Fiz meu implante aqui e o resultado superou expectativas. Equipe técnica excepcional!'
    );
  });

  test('displays 5 stars for each testimonial', () => {
    render(<Testimonials />);
    
    const rating1 = screen.getByTestId('rating-1');
    const rating2 = screen.getByTestId('rating-2');
    const rating3 = screen.getByTestId('rating-3');
    
    expect(rating1.querySelectorAll('[data-testid^="star-"]')).toHaveLength(5);
    expect(rating2.querySelectorAll('[data-testid^="star-"]')).toHaveLength(5);
    expect(rating3.querySelectorAll('[data-testid^="star-"]')).toHaveLength(5);
  });

  test('renders stats section', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
    expect(screen.getByText('5.000+')).toBeInTheDocument();
    expect(screen.getByText('Pacientes Atendidos')).toBeInTheDocument();
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('Satisfação dos Clientes')).toBeInTheDocument();
    expect(screen.getByText('24h')).toBeInTheDocument();
    expect(screen.getByText('Atendimento Emergencial')).toBeInTheDocument();
  });

  test('renders quote icons', () => {
    const { container } = render(<Testimonials />);
    
    const quoteIcons = container.querySelectorAll('svg[viewBox="0 0 512 512"]');
    expect(quoteIcons.length).toBeGreaterThanOrEqual(3);
  });

  test('patient initials are generated correctly', () => {
    render(<Testimonials />);
    
    expect(screen.getByText('MS')).toBeInTheDocument();
    expect(screen.getByText('RS')).toBeInTheDocument();
    expect(screen.getByText('AC')).toBeInTheDocument();
  });
});