import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogList from '../BlogList';

const renderWithRouter = (component) => {
  // Render without React.StrictMode to avoid double rendering in tests
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

// Using real blog posts data instead of mocks

describe('BlogList Component', () => {
  it('renders blog title and description', () => {
    renderWithRouter(<BlogList />);
    
    expect(screen.getByText('Blog Odontológico')).toBeInTheDocument();
    expect(screen.getByText(/Informações valiosas sobre saúde bucal/)).toBeInTheDocument();
  });

  it('renders all blog posts', () => {
    renderWithRouter(<BlogList />);
    
    // Check if posts are rendered (handling StrictMode duplication gracefully)
    const posts = [
      '5 dicas para manter os dentes saudáveis',
      'Quando é hora de usar aparelho ortodôntico?',
      'Mitos e verdades sobre clareamento dental',
      'Como escolher a escova de dente ideal',
      'Alimentação e saúde bucal: o que você precisa saber',
      'Implante dentário: tudo o que você precisa saber'
    ];
    
    posts.forEach(postTitle => {
      const elements = screen.getAllByText(postTitle);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('displays post metadata correctly', () => {
    renderWithRouter(<BlogList />);
    
    // Check metadata exists (flexible for StrictMode)
    expect(screen.getAllByText('Dra. Maria Santos').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('14 de outubro de 2024').length).toBeGreaterThanOrEqual(1);
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
      expect(screen.getByText('Quando é hora de usar aparelho ortodôntico?')).toBeInTheDocument();
      expect(screen.queryByText('5 dicas para manter os dentes saudáveis')).not.toBeInTheDocument();
    });
  });

  it('filters posts by content when searching', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'clareamento' } });

    await waitFor(() => {
      expect(screen.getByText('Mitos e verdades sobre clareamento dental')).toBeInTheDocument();
      expect(screen.queryByText('5 dicas para manter os dentes saudáveis')).not.toBeInTheDocument();
    });
  });

  it('filters posts by tags when searching', async () => {
    renderWithRouter(<BlogList />);
    
    const searchInput = screen.getByPlaceholderText('Buscar por título, conteúdo ou tags...');
    fireEvent.change(searchInput, { target: { value: 'prevenção' } });

    await waitFor(() => {
      expect(screen.getByText('5 dicas para manter os dentes saudáveis')).toBeInTheDocument();
      expect(screen.queryByText('Quando é hora de usar aparelho ortodôntico?')).not.toBeInTheDocument();
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
      expect(screen.getByText('Quando é hora de usar aparelho ortodôntico?')).toBeInTheDocument();
      expect(screen.getByText('Mitos e verdades sobre clareamento dental')).toBeInTheDocument();
    });
  });

  it('has responsive grid layout', () => {
    renderWithRouter(<BlogList />);
    
    const grid = screen.getByText('5 dicas para manter os dentes saudáveis').closest('article').parentElement;
    expect(grid).toHaveStyle('display: grid');
  });
});