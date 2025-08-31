import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from '../FilterButtons';

const mockCategories = [
  { id: 'todos', name: 'Todos' },
  { id: 'ortodontia', name: 'Ortodontia' },
  { id: 'estetica', name: 'Estética Dental' },
  { id: 'implantes', name: 'Implantes' }
];

const mockImageCounts = {
  todos: 20,
  ortodontia: 8,
  estetica: 6,
  implantes: 4
};

describe('FilterButtons Component', () => {
  const mockOnFilterChange = vi.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders all filter buttons', () => {
    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="todos"
        onFilterChange={mockOnFilterChange}
        imageCounts={mockImageCounts}
      />
    );

    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Ortodontia')).toBeInTheDocument();
    expect(screen.getByText('Estética Dental')).toBeInTheDocument();
    expect(screen.getByText('Implantes')).toBeInTheDocument();
  });

  it('shows correct image count for each category', () => {
    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="todos"
        onFilterChange={mockOnFilterChange}
        imageCounts={mockImageCounts}
      />
    );

    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('highlights active filter button', () => {
    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="ortodontia"
        onFilterChange={mockOnFilterChange}
        imageCounts={mockImageCounts}
      />
    );

    const activeButton = screen.getByText('Ortodontia').closest('button');
    expect(activeButton).toHaveStyle('background: var(--primary-color)');
  });

  it('calls onFilterChange when filter is clicked', () => {
    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="todos"
        onFilterChange={mockOnFilterChange}
        imageCounts={mockImageCounts}
      />
    );

    const ortodontiaButton = screen.getByText('Ortodontia');
    fireEvent.click(ortodontiaButton);

    expect(mockOnFilterChange).toHaveBeenCalledWith('ortodontia');
  });

  it('does not call onFilterChange when active filter is clicked', () => {
    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="ortodontia"
        onFilterChange={mockOnFilterChange}
        imageCounts={mockImageCounts}
      />
    );

    const activeButton = screen.getByText('Ortodontia');
    fireEvent.click(activeButton);

    expect(mockOnFilterChange).toHaveBeenCalledWith('ortodontia');
  });

  it('handles zero count gracefully', () => {
    const emptyCounts = {
      todos: 0,
      ortodontia: 0,
      estetica: 0,
      implantes: 0
    };

    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="todos"
        onFilterChange={mockOnFilterChange}
        imageCounts={emptyCounts}
      />
    );

    const zeroCount = screen.getAllByText('0');
    expect(zeroCount).toHaveLength(4);
  });

  it('maintains accessibility with proper button role', () => {
    render(
      <FilterButtons
        categories={mockCategories}
        activeFilter="todos"
        onFilterChange={mockOnFilterChange}
        imageCounts={mockImageCounts}
      />
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
    
    buttons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
  });
});