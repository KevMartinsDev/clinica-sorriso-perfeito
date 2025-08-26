import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Select from '../Select';

describe('Select Component', () => {
  const mockOnChange = vi.fn();
  const mockOptions = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' }
  ];

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders options correctly', () => {
    render(
      <Select
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );
    
    expect(screen.getByText('Opção 1')).toBeInTheDocument();
    expect(screen.getByText('Opção 2')).toBeInTheDocument();
    expect(screen.getByText('Opção 3')).toBeInTheDocument();
  });

  it('changes value when option is selected', () => {
    render(
      <Select
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'opcao2' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('opcao2');
  });

  it('shows placeholder when provided', () => {
    render(
      <Select
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        placeholder="Selecione uma opção"
      />
    );
    
    expect(screen.getByText('Selecione uma opção')).toBeInTheDocument();
  });

  it('shows label when provided', () => {
    render(
      <Select
        label="Assunto"
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );
    
    expect(screen.getByText('Assunto')).toBeInTheDocument();
  });

  it('shows error when provided', () => {
    render(
      <Select
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        error="Campo obrigatório"
      />
    );
    
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });

  it('shows required asterisk when required', () => {
    render(
      <Select
        label="Tipo"
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        required
      />
    );
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});