import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ServicesPreview from '../ServicesPreview';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('ServicesPreview Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders section title and subtitle', () => {
    renderWithRouter(<ServicesPreview />);
    
    expect(screen.getByText('Nossos Serviços')).toBeInTheDocument();
    expect(screen.getByText('Oferecemos tratamentos completos para toda sua família com tecnologia avançada e cuidado personalizado')).toBeInTheDocument();
  });

  test('renders all 4 services', () => {
    renderWithRouter(<ServicesPreview />);
    
    expect(screen.getByText('Clínica Geral')).toBeInTheDocument();
    expect(screen.getByText('Ortodontia')).toBeInTheDocument();
    expect(screen.getByText('Estética Dental')).toBeInTheDocument();
    expect(screen.getByText('Implantes')).toBeInTheDocument();
  });

  test('displays correct prices for all services', () => {
    renderWithRouter(<ServicesPreview />);
    
    expect(screen.getByTestId('service-price-1')).toHaveTextContent('A partir de R$ 120');
    expect(screen.getByTestId('service-price-2')).toHaveTextContent('A partir de R$ 100');
    expect(screen.getByTestId('service-price-3')).toHaveTextContent('A partir de R$ 450');
    expect(screen.getByTestId('service-price-4')).toHaveTextContent('A partir de R$ 1.800');
  });

  test('service cards are clickable and navigate correctly', () => {
    renderWithRouter(<ServicesPreview />);
    
    const serviceCard1 = screen.getByTestId('service-card-1');
    fireEvent.click(serviceCard1);
    expect(mockNavigate).toHaveBeenCalledWith('/servicos#1');
    
    const serviceCard2 = screen.getByTestId('service-card-2');
    fireEvent.click(serviceCard2);
    expect(mockNavigate).toHaveBeenCalledWith('/servicos#2');
  });

  test('view all button navigates to services page', () => {
    renderWithRouter(<ServicesPreview />);
    
    const viewAllButton = screen.getByText('Ver todos os serviços');
    expect(viewAllButton).toBeInTheDocument();
    
    fireEvent.click(viewAllButton);
    expect(mockNavigate).toHaveBeenCalledWith('/servicos');
  });

  test('renders service descriptions correctly', () => {
    renderWithRouter(<ServicesPreview />);
    
    expect(screen.getByText('Cuidados essenciais para sua saúde bucal')).toBeInTheDocument();
    expect(screen.getByText('Alinhamento perfeito do seu sorriso')).toBeInTheDocument();
    expect(screen.getByText('Transforme seu sorriso com naturalidade')).toBeInTheDocument();
    expect(screen.getByText('Recupere a função e estética dos dentes')).toBeInTheDocument();
  });

  test('renders service features', () => {
    renderWithRouter(<ServicesPreview />);
    
    expect(screen.getByText('Limpeza')).toBeInTheDocument();
    expect(screen.getByText('Aparelhos fixos')).toBeInTheDocument();
    expect(screen.getByText('Clareamento')).toBeInTheDocument();
    expect(screen.getByText('Implante unitário')).toBeInTheDocument();
  });
});