import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from '../Input';

describe('Input Component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with label correctly', () => {
    render(
      <Input
        label="Nome"
        value=""
        onChange={mockOnChange}
      />
    );
    
    expect(screen.getByText('Nome')).toBeInTheDocument();
  });

  it('shows placeholder', () => {
    render(
      <Input
        placeholder="Digite seu nome"
        value=""
        onChange={mockOnChange}
      />
    );
    
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  });

  it('changes value when typing', () => {
    render(
      <Input
        value=""
        onChange={mockOnChange}
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'novo valor' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('novo valor');
  });

  it('shows error validation after blur', () => {
    render(
      <Input
        value=""
        onChange={mockOnChange}
        error="Campo obrigatório"
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.blur(input);
    
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });

  it('applies phone mask correctly', () => {
    render(
      <Input
        value=""
        onChange={mockOnChange}
        mask="phone"
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '5599916793000' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('5599916793000');
  });

  it('shows required asterisk when required', () => {
    render(
      <Input
        label="Email"
        value=""
        onChange={mockOnChange}
        required
      />
    );
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('validates required field', () => {
    const { container } = render(
      <Input
        value=""
        onChange={mockOnChange}
        required
      />
    );
    
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('required');
  });
});