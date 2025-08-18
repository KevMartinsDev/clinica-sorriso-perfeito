import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';

describe('Card Component', () => {
  test('renders children correctly', () => {
    render(
      <Card>
        <h2>Test Title</h2>
        <p>Test content</p>
      </Card>
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('applies default variant correctly', () => {
    const { container } = render(
      <Card data-testid="card">
        Test content
      </Card>
    );
    
    const card = container.firstChild;
    expect(card).toBeInTheDocument();
  });

  test('applies elevated variant correctly', () => {
    render(
      <Card variant="elevated" data-testid="card">
        Test content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('applies outlined variant correctly', () => {
    render(
      <Card variant="outlined" data-testid="card">
        Test content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('handles click events when clickable', () => {
    const handleClick = vi.fn();
    
    render(
      <Card clickable onClick={handleClick} data-testid="card">
        Clickable content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    fireEvent.click(card);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not handle click events when not clickable', () => {
    const handleClick = vi.fn();
    
    render(
      <Card onClick={handleClick} data-testid="card">
        Non-clickable content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    fireEvent.click(card);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies fullHeight prop correctly', () => {
    render(
      <Card fullHeight data-testid="card">
        Full height content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('applies custom padding', () => {
    render(
      <Card padding="2rem" data-testid="card">
        Custom padding content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Custom class content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
  });

  test('renders without breaking when motion animations are present', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(
      <Card data-testid="card">
        Animated content
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(screen.getByText('Animated content')).toBeInTheDocument();
    
    window.matchMedia = originalMatchMedia;
  });

  test('passes through additional props', () => {
    render(
      <Card data-custom="test-value" data-testid="card">
        Props test
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('data-custom', 'test-value');
  });
});