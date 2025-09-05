import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ErrorBoundary from '../ErrorBoundary';

const ThrowingComponent = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Normal content</div>;
};

const renderWithRouter = (children) => {
  return render(
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders children when there is no error', () => {
    renderWithRouter(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    renderWithRouter(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Oops! Algo deu errado')).toBeInTheDocument();
    expect(screen.getByText(/Ocorreu um erro inesperado/)).toBeInTheDocument();
    expect(screen.getByText('Recarregar Página')).toBeInTheDocument();
    expect(screen.getByText('Ir para Início')).toBeInTheDocument();
  });

  it('logs error to console when error occurs', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    renderWithRouter(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('ErrorBoundary capturou um erro:'),
      expect.any(Error),
      expect.any(Object)
    );

    consoleSpy.mockRestore();
  });

  // Skip this test due to JSDOM limitations with window.location.reload
  // it('has reload button that calls window.location.reload', () => {
  //   const originalReload = window.location.reload;
  //   Object.defineProperty(window.location, 'reload', {
  //     value: vi.fn(),
  //     writable: true
  //   });

  //   renderWithRouter(
  //     <ErrorBoundary>
  //       <ThrowingComponent shouldThrow={true} />
  //     </ErrorBoundary>
  //   );

  //   const reloadButton = screen.getByText('Recarregar Página');
  //   reloadButton.click();

  //   expect(window.location.reload).toHaveBeenCalled();

  //   Object.defineProperty(window.location, 'reload', {
  //     value: originalReload,
  //     writable: true
  //   });
  // });

  it('has home button that navigates to home', () => {
    const originalHref = window.location.href;
    delete window.location;
    window.location = { href: '' };

    renderWithRouter(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    const homeButton = screen.getByText('Ir para Início');
    homeButton.click();

    expect(window.location.href).toBe('/');

    window.location.href = originalHref;
  });

  it('maintains error state after error is thrown', () => {
    const { rerender } = renderWithRouter(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops! Algo deu errado')).toBeInTheDocument();

    rerender(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowingComponent shouldThrow={false} />
        </ErrorBoundary>
      </BrowserRouter>
    );

    expect(screen.getByText('Oops! Algo deu errado')).toBeInTheDocument();
  });
});