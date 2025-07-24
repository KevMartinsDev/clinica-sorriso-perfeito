import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Layout from '../Layout';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Layout', () => {
  it('renderiza Header e Footer', () => {
    renderWithRouter(
      <Layout>
        <div>Conteúdo de teste</div>
      </Layout>
    );
    
    expect(screen.getAllByText('Sorriso Perfeito').length).toBeGreaterThanOrEqual(1);
    
    expect(screen.getByText(/© \d{4} Clínica Sorriso Perfeito/)).toBeInTheDocument();
  });

  it('renderiza children corretamente', () => {
    const testContent = 'Este é o conteúdo de teste';
    
    renderWithRouter(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );
    
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renderiza children dentro do elemento main', () => {
    const testContent = 'Conteúdo principal';
    
    renderWithRouter(
      <Layout>
        <div data-testid="main-content">{testContent}</div>
      </Layout>
    );
    
    const mainContent = screen.getByTestId('main-content');
    const mainElement = mainContent.closest('main');
    
    expect(mainElement).toBeInTheDocument();
    expect(mainContent).toBeInTheDocument();
  });

  it('mantém estrutura flex column do layout', () => {
    renderWithRouter(
      <Layout>
        <div>Teste</div>
      </Layout>
    );
    
    const layoutContainer = screen.getByText('Teste').closest('div').parentElement.parentElement;
    expect(layoutContainer).toHaveStyle('display: flex');
    expect(layoutContainer).toHaveStyle('flex-direction: column');
    expect(layoutContainer).toHaveStyle('min-height: 100vh');
  });

  it('renderiza múltiplos children', () => {
    renderWithRouter(
      <Layout>
        <div>Primeiro conteúdo</div>
        <div>Segundo conteúdo</div>
        <div>Terceiro conteúdo</div>
      </Layout>
    );
    
    expect(screen.getByText('Primeiro conteúdo')).toBeInTheDocument();
    expect(screen.getByText('Segundo conteúdo')).toBeInTheDocument();
    expect(screen.getByText('Terceiro conteúdo')).toBeInTheDocument();
  });

  it('Header contém elementos de navegação', () => {
    renderWithRouter(
      <Layout>
        <div>Teste</div>
      </Layout>
    );
    
    expect(screen.getAllByText('Início').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Sobre').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Serviços').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Contato').length).toBeGreaterThanOrEqual(1);
  });

  it('Footer contém informações da clínica', () => {
    renderWithRouter(
      <Layout>
        <div>Teste</div>
      </Layout>
    );
    
    expect(screen.getByText(/Rua das Flores, 123/)).toBeInTheDocument();
    expect(screen.getAllByText('(00) 0000-0000').length).toBeGreaterThanOrEqual(1);
  });
});