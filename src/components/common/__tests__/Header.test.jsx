import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from '../Header';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renderiza logo corretamente', () => {
    renderWithRouter(<Header />);
    
    expect(screen.getByText('Sorriso Perfeito')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sorriso perfeito/i })).toHaveAttribute('href', '/');
  });

  it('renderiza menu de navegação', () => {
    renderWithRouter(<Header />);
    
    const navigationItems = ['Início', 'Sobre', 'Serviços', 'Agendamento', 'Galeria', 'Blog', 'Contato'];
    
    navigationItems.forEach(item => {
      expect(screen.getAllByText(item).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('verifica existência dos elementos principais', () => {
    renderWithRouter(<Header />);
    
    // Verifica se o componente renderiza sem erro
    expect(screen.getByText('Sorriso Perfeito')).toBeInTheDocument();
    
    // Verifica se o botão WhatsApp está presente
    expect(screen.getAllByText('WhatsApp').length).toBeGreaterThanOrEqual(1);
  });

  it('botão WhatsApp presente', () => {
    renderWithRouter(<Header />);
    
    const whatsappLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.includes('wa.me')
    );
    expect(whatsappLinks.length).toBeGreaterThanOrEqual(1);
    expect(whatsappLinks[0]).toHaveAttribute('href', 'https://wa.me/555591679300');
  });

  it('apenas botão WhatsApp presente no header', () => {
    renderWithRouter(<Header />);
    
    // Verifica que o WhatsApp está presente
    const whatsappLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.includes('wa.me')
    );
    expect(whatsappLinks.length).toBeGreaterThanOrEqual(1);
    
    // Verifica que não há links de telefone no header
    const phoneLinks = screen.getAllByRole('link').filter(link => 
      link.getAttribute('href')?.includes('tel:')
    );
    expect(phoneLinks.length).toBe(0);
  });

  it('links de navegação têm hrefs corretos', () => {
    renderWithRouter(<Header />);
    
    const linkMappings = [
      { name: 'Início', href: '/' },
      { name: 'Sobre', href: '/sobre' },
      { name: 'Serviços', href: '/servicos' },
      { name: 'Agendamento', href: '/agendamento' },
      { name: 'Galeria', href: '/galeria' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contato', href: '/contato' }
    ];
    
    linkMappings.forEach(({ name, href }) => {
      const links = screen.getAllByRole('link', { name });
      expect(links.length).toBeGreaterThanOrEqual(1);
      // Check that at least one link has the correct href
      expect(links.some(link => link.getAttribute('href') === href)).toBe(true);
    });
  });
});