import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Textarea from '../Textarea';

describe('Textarea Component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with label correctly', () => {
    render(
      <Textarea
        label="Mensagem"
        value=""
        onChange={mockOnChange}
      />
    );
    
    expect(screen.getByText('Mensagem')).toBeInTheDocument();
  });

  it('shows placeholder', () => {
    render(
      <Textarea
        placeholder="Digite sua mensagem"
        value=""
        onChange={mockOnChange}
      />
    );
    
    expect(screen.getByPlaceholderText('Digite sua mensagem')).toBeInTheDocument();
  });

  it('changes value when typing', () => {
    render(
      <Textarea
        value=""
        onChange={mockOnChange}
      />
    );
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'nova mensagem' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('nova mensagem');
  });

  it('shows error validation after blur', () => {
    render(
      <Textarea
        value=""
        onChange={mockOnChange}
        error="Mensagem muito curta"
      />
    );
    
    const textarea = screen.getByRole('textbox');
    fireEvent.blur(textarea);
    
    expect(screen.getByText('Mensagem muito curta')).toBeInTheDocument();
  });

  it('shows required asterisk when required', () => {
    render(
      <Textarea
        label="Descrição"
        value=""
        onChange={mockOnChange}
        required
      />
    );
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('sets correct number of rows', () => {
    const { container } = render(
      <Textarea
        value=""
        onChange={mockOnChange}
        rows={6}
      />
    );
    
    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveAttribute('rows', '6');
  });

  it('uses default rows when not specified', () => {
    const { container } = render(
      <Textarea
        value=""
        onChange={mockOnChange}
      />
    );
    
    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveAttribute('rows', '4');
  });
});