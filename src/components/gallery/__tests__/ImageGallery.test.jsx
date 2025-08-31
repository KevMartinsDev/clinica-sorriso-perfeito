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

vi.mock('../../data/gallery', () => ({
  galleryImages: [
    {
      id: 1,
      src: 'test-image-1.jpg',
      thumbnail: 'test-thumb-1.jpg',
      category: 'ortodontia',
      title: 'Test Ortodontia',
      description: 'Test description'
    },
    {
      id: 2,
      src: 'test-image-2.jpg',
      thumbnail: 'test-thumb-2.jpg',
      category: 'estetica',
      title: 'Test Estética',
      description: 'Test description'
    },
    {
      id: 3,
      src: 'test-image-3.jpg',
      thumbnail: 'test-thumb-3.jpg',
      category: 'ortodontia',
      title: 'Another Ortodontia',
      description: 'Another test description'
    }
  ],
  galleryCategories: [
    { id: 'todos', name: 'Todos', count: 3 },
    { id: 'ortodontia', name: 'Ortodontia', count: 2 },
    { id: 'estetica', name: 'Estética Dental', count: 1 }
  ]
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
    
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays all images initially', () => {
    renderWithRouter(<ImageGallery />);
    
    expect(screen.getByText('Test Ortodontia')).toBeInTheDocument();
    expect(screen.getByText('Test Estética')).toBeInTheDocument();
    expect(screen.getByText('Another Ortodontia')).toBeInTheDocument();
  });

  it('filters images by category when filter is clicked', async () => {
    renderWithRouter(<ImageGallery />);
    
    const ortodontiaFilter = screen.getByText('Ortodontia');
    fireEvent.click(ortodontiaFilter);

    await waitFor(() => {
      expect(screen.getByText('Test Ortodontia')).toBeInTheDocument();
      expect(screen.getByText('Another Ortodontia')).toBeInTheDocument();
      expect(screen.queryByText('Test Estética')).not.toBeInTheDocument();
    });
  });

  it('shows empty state when no images match filter', async () => {
    vi.doMock('../../data/gallery', () => ({
      galleryImages: [],
      galleryCategories: [
        { id: 'todos', name: 'Todos', count: 0 },
        { id: 'ortodontia', name: 'Ortodontia', count: 0 }
      ]
    }));

    renderWithRouter(<ImageGallery />);
    
    await waitFor(() => {
      expect(screen.getByText('Nenhuma imagem encontrada')).toBeInTheDocument();
    });
  });

  it('opens lightbox when image is clicked', async () => {
    renderWithRouter(<ImageGallery />);
    
    const firstImage = screen.getByText('Test Ortodontia').closest('div');
    fireEvent.click(firstImage);

    await waitFor(() => {
      expect(document.body.style.overflow).toBe('hidden');
    });
  });

  it('has responsive grid layout', () => {
    renderWithRouter(<ImageGallery />);
    
    const grid = screen.getByText('Test Ortodontia').closest('div').parentElement;
    expect(grid).toHaveStyle('display: grid');
  });
});