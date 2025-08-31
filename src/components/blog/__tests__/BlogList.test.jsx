import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogList from '../BlogList';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

vi.mock('../../data/blog-posts', () => ({
  blogPosts: [
    {
      id: 1,
      slug: 'dicas-dentes-saudaveis',
      title: '5 dicas para manter os dentes saudáveis',
      excerpt: 'Descubra as melhores práticas para manter sua saúde bucal em dia',
      content: 'Conteúdo completo sobre saúde bucal e dentes saudáveis',
      image: 'test-image-1.jpg',
      publishDate: '2024-10-15',
      readTime: '3 min',
      tags: ['saúde bucal', 'prevenção'],
      author: 'Dra. Maria Santos'
    },
    {
      id: 2,
      slug: 'aparelho-ortodontico',
      title: 'Quando usar aparelho ortodôntico?',
      excerpt: 'Saiba identificar os sinais de que você precisa de tratamento',
      content: 'Conteúdo sobre ortodontia e tratamentos',
      image: 'test-image-2.jpg',
      publishDate: '2024-10-10',
      readTime: '4 min',
      tags: ['ortodontia', 'aparelho'],
      author: 'Dr. João Silva'
    },
    {
      id: 3,
      slug: 'clareamento-dental',
      title: 'Mitos sobre clareamento dental',
      excerpt: 'Esclareça suas dúvidas sobre clareamento',
      content: 'Conteúdo sobre clareamento e estética dental',
      image: 'test-image-3.jpg',
      publishDate: '2024-10-05',
      readTime: '4 min',
      tags: ['clareamento', 'estética'],
      author: 'Dra. Ana Costa'
    },
    {
      id: 4,
      slug: 'escova-de-dente',
      title: 'Como escolher a escova de dente ideal',
      excerpt: 'Guia completo para escolher a escova perfeita',
      content: 'Conteúdo sobre escolha de escova de dente',
      image: 'test-image-4.jpg',
      publishDate: '2024-09-28',
      readTime: '3 min',
      tags: ['higiene bucal', 'escova de dente'],
      author: 'Dr. Carlos Mendes'
    },
    {
      id: 5,
      slug: 'alimentacao-saude-bucal',
      title: 'Alimentação e saúde bucal',
      excerpt: 'Como a alimentação influencia seus dentes',
      content: 'Conteúdo sobre alimentação e saúde bucal',
      image: 'test-image-5.jpg',
      publishDate: '2024-09-20',
      readTime: '5 min',
      tags: ['alimentação', 'saúde bucal'],
      author: 'Dra. Patricia Lima'
    }
  ]
}));

describe('BlogList Component', () => {
  it('renders blog title and description', () => {
    renderWithRouter(<BlogList />);
    
    expect(screen.getByText('Blog Odontológico')).toBeInTheDocument();
    expect(screen.getByText(/Informações valiosas sobre saúde bucal/)).toBeInTheDocument();
  });

  it('renders all blog posts', () => {
    renderWithRouter(<BlogList />);
    
    expect(screen.getByText('5 dicas para manter os dentes saudáveis')).toBeInTheDocument();
    expect(screen.getByText('Quando usar aparelho ortodôntico?')).toBeInTheDocument();
    expect(screen.getByText('Mitos sobre clareamento dental')).toBeInTheDocument();
    expect(screen.getByText('Como escolher a escova de dente ideal')).toBeInTheDocument();
    expect(screen.getByText('Alimentação e saúde bucal')).toBeInTheDocument();
  });

  it('displays post metadata correctly', () => {
    renderWithRouter(<BlogList />);
    
    expect(screen.getByText('Dra. Maria Santos')).toBeInTheDocument();
    expect(screen.getByText('3 min')).toBeInTheDocument();
    expect(screen.getByText('15 de outubro de 2024')).toBeInTheDocument();
  });

  it('shows search bar', () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters posts by title when searching', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'ortodôntico' } });

    await waitFor(() => {
      expect(screen.getByText('Quando usar aparelho ortodôntico?')).toBeInTheDocument();
      expect(screen.queryByText('5 dicas para manter os dentes saudáveis')).not.toBeInTheDocument();
    });
  });

  it('filters posts by content when searching', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'estética dental' } });

    await waitFor(() => {
      expect(screen.getByText('Mitos sobre clareamento dental')).toBeInTheDocument();
      expect(screen.queryByText('5 dicas para manter os dentes saudáveis')).not.toBeInTheDocument();
    });
  });

  it('filters posts by tags when searching', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'prevenção' } });

    await waitFor(() => {
      expect(screen.getByText('5 dicas para manter os dentes saudáveis')).toBeInTheDocument();
      expect(screen.queryByText('Quando usar aparelho ortodôntico?')).not.toBeInTheDocument();
    });
  });

  it('shows results count when searching', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'dente' } });

    await waitFor(() => {
      expect(screen.getByText(/artigos encontrados/)).toBeInTheDocument();
    });
  });

  it('shows empty state when no results found', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'termo inexistente' } });

    await waitFor(() => {
      expect(screen.getByText('Nenhum artigo encontrado')).toBeInTheDocument();
      expect(screen.getByText(/Tente buscar com outros termos/)).toBeInTheDocument();
    });
  });

  it('clears search when clear button is clicked', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'ortodôntico' } });

    await waitFor(() => {
      expect(screen.queryByText('5 dicas para manter os dentes saudáveis')).not.toBeInTheDocument();
    });

    const clearButton = screen.getByLabelText('Limpar busca');
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(screen.getByText('5 dicas para manter os dentes saudáveis')).toBeInTheDocument();
      expect(searchInput.value).toBe('');
    });
  });

  it('shows all posts when search is empty', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'ortodôntico' } });
    fireEvent.change(searchInput, { target: { value: '' } });

    await waitFor(() => {
      expect(screen.getByText('5 dicas para manter os dentes saudáveis')).toBeInTheDocument();
      expect(screen.getByText('Quando usar aparelho ortodôntico?')).toBeInTheDocument();
      expect(screen.getByText('Mitos sobre clareamento dental')).toBeInTheDocument();
    });
  });

  it('has responsive grid layout', () => {
    renderWithRouter(<BlogList />);
    
    const grid = screen.getByText('5 dicas para manter os dentes saudáveis').closest('article').parentElement;
    expect(grid).toHaveStyle('display: grid');
  });
});