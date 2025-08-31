import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders search input with placeholder', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
        placeholder="Buscar artigos..."
      />
    );

    const input = screen.getByPlaceholderText('Buscar artigos...');
    expect(input).toBeInTheDocument();
  });

  it('displays search icon', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    const searchIcon = document.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
  });

  it('shows current value in input', () => {
    render(
      <SearchBar
        value="test search"
        onChange={mockOnChange}
      />
    );

    const input = screen.getByDisplayValue('test search');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange when typing in input', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new search' } });

    expect(mockOnChange).toHaveBeenCalledWith('new search');
  });

  it('shows clear button when value is not empty', () => {
    render(
      <SearchBar
        value="search term"
        onChange={mockOnChange}
      />
    );

    const clearButton = screen.getByLabelText('Limpar busca');
    expect(clearButton).toBeInTheDocument();
  });

  it('hides clear button when value is empty', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    const clearButton = screen.queryByLabelText('Limpar busca');
    expect(clearButton).not.toBeVisible();
  });

  it('clears input when clear button is clicked', () => {
    render(
      <SearchBar
        value="search term"
        onChange={mockOnChange}
      />
    );

    const clearButton = screen.getByLabelText('Limpar busca');
    fireEvent.click(clearButton);

    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  it('uses default placeholder when none provided', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.getByPlaceholderText('Buscar artigos...')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByLabelText('Buscar artigos');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('handles focus and blur events', () => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole('textbox');
    
    fireEvent.focus(input);
    expect(input).toHaveFocus();

    fireEvent.blur(input);
    expect(input).not.toHaveFocus();
  });

  it('maintains input value during focus changes', () => {
    render(
      <SearchBar
        value="persistent value"
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole('textbox');
    
    fireEvent.focus(input);
    expect(input.value).toBe('persistent value');
    
    fireEvent.blur(input);
    expect(input.value).toBe('persistent value');
  });

  it('shows clear button only when there is text', () => {
    const { rerender } = render(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.queryByLabelText('Limpar busca')).not.toBeVisible();

    rerender(
      <SearchBar
        value="a"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByLabelText('Limpar busca')).toBeVisible();

    rerender(
      <SearchBar
        value=""
        onChange={mockOnChange}
      />
    );

    expect(screen.queryByLabelText('Limpar busca')).not.toBeVisible();
  });
});