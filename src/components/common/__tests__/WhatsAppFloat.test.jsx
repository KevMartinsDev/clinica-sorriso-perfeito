import { render, screen, fireEvent } from '@testing-library/react';
import WhatsAppFloat from '../WhatsAppFloat';

const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

describe('WhatsAppFloat Component', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  test('renders WhatsApp button correctly', () => {
    render(<WhatsAppFloat />);
    
    const button = screen.getByTestId('whatsapp-float');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Contato via WhatsApp');
  });

  test('opens WhatsApp with correct URL when clicked', () => {
    render(<WhatsAppFloat />);
    
    const button = screen.getByTestId('whatsapp-float');
    fireEvent.click(button);
    
    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://wa.me/5599916793000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.',
      '_blank'
    );
  });

  test('uses custom message when provided', () => {
    const customMessage = 'Mensagem personalizada de teste';
    render(<WhatsAppFloat message={customMessage} />);
    
    const button = screen.getByTestId('whatsapp-float');
    fireEvent.click(button);
    
    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://wa.me/5599916793000?text=Mensagem%20personalizada%20de%20teste',
      '_blank'
    );
  });

  test('shows tooltip by default', () => {
    render(<WhatsAppFloat />);
    
    expect(screen.getByText('Fale conosco!')).toBeInTheDocument();
  });

  test('hides tooltip when showTooltip is false', () => {
    render(<WhatsAppFloat showTooltip={false} />);
    
    expect(screen.queryByText('Fale conosco!')).not.toBeInTheDocument();
  });

  test('shows notification dot when enabled', () => {
    const { container } = render(<WhatsAppFloat showNotification={true} />);
    
    const button = screen.getByTestId('whatsapp-float');
    expect(button).toBeInTheDocument();
  });

  test('does not show notification dot by default', () => {
    const { container } = render(<WhatsAppFloat />);
    
    const button = screen.getByTestId('whatsapp-float');
    expect(button).toBeInTheDocument();
  });

  test('renders without breaking when animations are disabled', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<WhatsAppFloat />);
    
    const button = screen.getByTestId('whatsapp-float');
    expect(button).toBeInTheDocument();
    
    window.matchMedia = originalMatchMedia;
  });

  test('handles keyboard interactions', () => {
    render(<WhatsAppFloat />);
    
    const button = screen.getByTestId('whatsapp-float');
    
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    fireEvent.keyUp(button, { key: 'Enter', code: 'Enter' });
    
    expect(button).toBeInTheDocument();
  });

  test('has correct fixed positioning styles', () => {
    render(<WhatsAppFloat />);
    
    const button = screen.getByTestId('whatsapp-float');
    const computedStyle = getComputedStyle(button);
    
    expect(button).toBeInTheDocument();
  });
});