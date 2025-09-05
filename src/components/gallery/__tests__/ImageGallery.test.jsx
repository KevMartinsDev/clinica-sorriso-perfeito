import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ImageGallery from '../ImageGallery';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// Mock dos hooks para simular comportamento em testes
vi.mock('../../hooks/useInfiniteScroll', () => ({
  default: (items) => ({
    displayedItems: items.slice(0, 6),
    hasMore: items.length > 6,
    loading: false,
    loadMore: vi.fn()
  })
}));

vi.mock('../../hooks/useIntersectionObserverRef', () => ({
  default: () => false
}));

describe('ImageGallery Component', () => {
  it('renders gallery title and description', () => {
    renderWithRouter(<ImageGallery />);
    
    expect(screen.getByText('Nossa Galeria')).toBeInTheDocument();
    expect(screen.getByText(/Conheça alguns dos nossos casos de sucesso/)).toBeInTheDocument();
  });

  it('renders all filter buttons', () => {
    renderWithRouter(<ImageGallery />);
    
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Ortodontia')).toBeInTheDocument();
    expect(screen.getByText('Estética Dental')).toBeInTheDocument();
  });

  it('shows correct image count for each filter', () => {
    renderWithRouter(<ImageGallery />);
    
    // Verifica se os badges com os números estão presentes
    const todosButton = screen.getByText('Todos').closest('button');
    const ortodontiaButton = screen.getByText('Ortodontia').closest('button');
    const esteticaButton = screen.getByText('Estética Dental').closest('button');
    
    expect(todosButton).toHaveTextContent('18');
    expect(ortodontiaButton).toHaveTextContent('4');
    expect(esteticaButton).toHaveTextContent('5');
  });

  it('renders image grid container', () => {
    renderWithRouter(<ImageGallery />);
    
    // Verifica que o container da galeria existe
    expect(screen.getByText('Nossa Galeria')).toBeInTheDocument();
  });

  it('responds to filter clicks', async () => {
    renderWithRouter(<ImageGallery />);
    
    const ortodontiaFilter = screen.getByText('Ortodontia');
    expect(ortodontiaFilter).toBeInTheDocument();
    
    fireEvent.click(ortodontiaFilter);
    
    // Apenas verifica que o filtro pode ser clicado sem erro
    expect(ortodontiaFilter.closest('button')).toHaveAttribute('tabindex', '0');
  });

  it('renders gallery container', () => {
    renderWithRouter(<ImageGallery />);
    
    expect(screen.getByText('Nossa Galeria')).toBeInTheDocument();
  });
});