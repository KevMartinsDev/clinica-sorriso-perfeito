import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../Button';

describe('Button', () => {
  it('renderiza com texto correto', () => {
    render(<Button>Clique aqui</Button>);
    
    expect(screen.getByText('Clique aqui')).toBeInTheDocument();
  });

  it('aplica variante primary por padrão', () => {
    render(<Button>Botão Primary</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: var(--primary-color)');
  });

  it('aplica variante secondary', () => {
    render(<Button variant="secondary">Botão Secondary</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: var(--secondary-color)');
  });

  it('aplica variante outline', () => {
    render(<Button variant="outline">Botão Outline</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: transparent');
    expect(button).toHaveStyle('border: 2px solid var(--primary-color)');
  });

  it('aplica variante whatsapp com ícone', () => {
    render(<Button variant="whatsapp">WhatsApp</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: #25D366');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('aplica tamanho small', () => {
    render(<Button size="small">Pequeno</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('padding: 0.5rem 1rem');
    expect(button).toHaveStyle('font-size: 0.875rem');
  });

  it('aplica tamanho medium por padrão', () => {
    render(<Button>Médio</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('padding: 0.75rem 1.5rem');
    expect(button).toHaveStyle('font-size: 1rem');
  });

  it('aplica tamanho large', () => {
    render(<Button size="large">Grande</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('padding: 1rem 2rem');
    expect(button).toHaveStyle('font-size: 1.125rem');
  });

  it('exibe estado loading com spinner', () => {
    render(<Button loading>Carregando</Button>);
    
    const button = screen.getByRole('button');
    const spinner = button.querySelector('.spinner');
    
    expect(spinner).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('aplica estado disabled', () => {
    render(<Button disabled>Desabilitado</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.6');
  });

  it('chama onClick quando clicado', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clique</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('não chama onClick quando disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Clique</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('não chama onClick quando loading', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} loading>Clique</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renderiza como link quando prop "as" é "a"', () => {
    render(
      <Button as="a" href="https://example.com">
        Link Button
      </Button>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveTextContent('Link Button');
  });

  it('aplica atributo target quando fornecido', () => {
    render(
      <Button as="a" href="https://example.com" target="_blank">
        Link Externo
      </Button>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });
});