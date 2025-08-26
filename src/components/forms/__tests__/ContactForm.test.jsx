import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactForm from '../ContactForm';

// Mock window.open for WhatsApp integration
Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn()
});

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all required fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/Nome Completo/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Assunto/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/)).toBeInTheDocument();
  });

  it('validates name with minimum 2 characters', async () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByLabelText(/Nome Completo/);
    
    fireEvent.change(nameInput, { target: { value: 'A' } });
    fireEvent.blur(nameInput);
    
    await waitFor(() => {
      expect(screen.getByText('Nome deve ter pelo menos 2 caracteres')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<ContactForm />);
    
    const emailInput = screen.getByLabelText(/Email/);
    
    fireEvent.change(emailInput, { target: { value: 'email_invalido' } });
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
    });
  });

  it('validates phone format for Brazilian numbers', async () => {
    render(<ContactForm />);
    
    const phoneInput = screen.getByLabelText(/Telefone/);
    
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.blur(phoneInput);
    
    await waitFor(() => {
      expect(screen.getByText('Telefone deve ter pelo menos 10 dígitos')).toBeInTheDocument();
    });
  });

  it('validates message with minimum 10 characters', async () => {
    render(<ContactForm />);
    
    const messageInput = screen.getByLabelText(/Mensagem/);
    
    fireEvent.change(messageInput, { target: { value: 'Curta' } });
    fireEvent.blur(messageInput);
    
    await waitFor(() => {
      expect(screen.getByText('Mensagem deve ter pelo menos 10 caracteres')).toBeInTheDocument();
    });
  });

  it('prevents submit with invalid data', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByText('Enviar Mensagem');
    
    // Try to submit without filling required fields
    fireEvent.click(submitButton);
    
    // The form should prevent submission and stay on the same page
    expect(submitButton).toBeInTheDocument();
    expect(screen.getByText('Enviar Mensagem')).toBeInTheDocument();
  });

  it('shows loading state during submission', async () => {
    render(<ContactForm />);
    
    // Fill form with valid data
    fireEvent.change(screen.getByLabelText(/Nome Completo/), { 
      target: { value: 'João Silva' } 
    });
    fireEvent.change(screen.getByLabelText(/Email/), { 
      target: { value: 'joao@email.com' } 
    });
    fireEvent.change(screen.getByLabelText(/Telefone/), { 
      target: { value: '5599916793000' } 
    });
    fireEvent.change(screen.getByLabelText(/Assunto/), { 
      target: { value: 'informacoes' } 
    });
    fireEvent.change(screen.getByLabelText(/Mensagem/), { 
      target: { value: 'Mensagem de teste com mais de 10 caracteres' } 
    });
    
    const submitButton = screen.getByText('Enviar Mensagem');
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Enviando...')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('shows success message after submission', async () => {
    render(<ContactForm />);
    
    // Fill form with valid data
    fireEvent.change(screen.getByLabelText(/Nome Completo/), { 
      target: { value: 'João Silva' } 
    });
    fireEvent.change(screen.getByLabelText(/Email/), { 
      target: { value: 'joao@email.com' } 
    });
    fireEvent.change(screen.getByLabelText(/Telefone/), { 
      target: { value: '5599916793000' } 
    });
    fireEvent.change(screen.getByLabelText(/Assunto/), { 
      target: { value: 'informacoes' } 
    });
    fireEvent.change(screen.getByLabelText(/Mensagem/), { 
      target: { value: 'Mensagem de teste com mais de 10 caracteres' } 
    });
    
    const submitButton = screen.getByText('Enviar Mensagem');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Mensagem enviada com sucesso!')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('calls WhatsApp integration after successful submission', async () => {
    render(<ContactForm />);
    
    // Fill form with valid data
    fireEvent.change(screen.getByLabelText(/Nome Completo/), { 
      target: { value: 'João Silva' } 
    });
    fireEvent.change(screen.getByLabelText(/Email/), { 
      target: { value: 'joao@email.com' } 
    });
    fireEvent.change(screen.getByLabelText(/Telefone/), { 
      target: { value: '5599916793000' } 
    });
    fireEvent.change(screen.getByLabelText(/Assunto/), { 
      target: { value: 'informacoes' } 
    });
    fireEvent.change(screen.getByLabelText(/Mensagem/), { 
      target: { value: 'Mensagem de teste com mais de 10 caracteres' } 
    });
    
    const submitButton = screen.getByText('Enviar Mensagem');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('wa.me/5599916793000'),
        '_blank'
      );
    }, { timeout: 4000 });
  });

  it('has all subject options available', () => {
    render(<ContactForm />);
    
    const subjectSelect = screen.getByLabelText(/Assunto/);
    fireEvent.click(subjectSelect);
    
    expect(screen.getByText('Informações')).toBeInTheDocument();
    expect(screen.getByText('Orçamento')).toBeInTheDocument();
    expect(screen.getByText('Reclamação')).toBeInTheDocument();
    expect(screen.getByText('Elogio')).toBeInTheDocument();
  });
});