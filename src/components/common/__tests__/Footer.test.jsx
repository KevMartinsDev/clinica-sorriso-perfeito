import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer', () => {
  it('renderiza logo da clínica', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Sorriso Perfeito')).toBeInTheDocument();
  });

  it('exibe informações de contato', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText(/Rua das Flores, 123/)).toBeInTheDocument();
    expect(screen.getByText(/Vila Madalena, São Paulo/)).toBeInTheDocument();
    expect(screen.getByText('(55) 5 9167-9300')).toBeInTheDocument();
    expect(screen.getByText('contato@sorrisoperfeito.com.br')).toBeInTheDocument();
  });

  it('exibe horários de funcionamento', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText(/Segunda à Sexta:/)).toBeInTheDocument();
    expect(screen.getByText(/08:00 - 18:00/)).toBeInTheDocument();
    expect(screen.getByText(/Sábado:/)).toBeInTheDocument();
    expect(screen.getByText(/08:00 - 12:00/)).toBeInTheDocument();
    expect(screen.getByText(/Domingo:/)).toBeInTheDocument();
    expect(screen.getByText(/Fechado/)).toBeInTheDocument();
  });

  it('exibe links rápidos funcionais', () => {
    renderWithRouter(<Footer />);
    
    const quickLinks = [
      { text: 'Início', href: '/' },
      { text: 'Sobre Nós', href: '/sobre' },
      { text: 'Serviços', href: '/servicos' },
      { text: 'Agendamento', href: '/agendamento' },
      { text: 'Galeria', href: '/galeria' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contato', href: '/contato' }
    ];

    quickLinks.forEach(link => {
      const linkElement = screen.getByRole('link', { name: link.text });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });

  it('exibe links de redes sociais', () => {
    renderWithRouter(<Footer />);
    
    const socialLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.includes('instagram.com') || 
      link.getAttribute('href')?.includes('facebook.com')
    );
    
    expect(socialLinks).toHaveLength(2);
    expect(socialLinks.find(link => link.getAttribute('href')?.includes('instagram.com'))).toHaveAttribute('href', 'https://instagram.com/sorrisoperfeito');
    expect(socialLinks.find(link => link.getAttribute('href')?.includes('facebook.com'))).toHaveAttribute('href', 'https://facebook.com/sorrisoperfeito');
  });

  it('exibe copyright com ano atual', () => {
    renderWithRouter(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Clínica Sorriso Perfeito`))).toBeInTheDocument();
  });

  it('links de contato têm atributos corretos', () => {
    renderWithRouter(<Footer />);
    
    const phoneLink = screen.getByRole('link', { name: '(55) 5 9167-9300' });
    expect(phoneLink).toHaveAttribute('href', 'tel:+555591679300');
    
    const emailLink = screen.getByRole('link', { name: 'contato@sorrisoperfeito.com.br' });
    expect(emailLink).toHaveAttribute('href', 'mailto:contato@sorrisoperfeito.com.br');
  });
});