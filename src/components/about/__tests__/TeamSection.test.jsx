import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TeamSection from '../TeamSection';

describe('TeamSection Component', () => {
  it('renders 2 professionals', () => {
    render(<TeamSection />);
    
    expect(screen.getByText('Dra. Maria')).toBeInTheDocument();
    expect(screen.getByText('Dr. João')).toBeInTheDocument();
  });

  it('shows CRO numbers for both professionals', () => {
    render(<TeamSection />);
    
    expect(screen.getByText('CRO-SP 12.345')).toBeInTheDocument();
    expect(screen.getByText('CRO-SP 67.890')).toBeInTheDocument();
  });

  it('displays specializations correctly', () => {
    render(<TeamSection />);
    
    expect(screen.getByText('Ortodontia e Implantodontia')).toBeInTheDocument();
    expect(screen.getByText('Endodontia e Estética')).toBeInTheDocument();
  });

  it('shows education information', () => {
    render(<TeamSection />);
    
    expect(screen.getByText('USP, Especialização em Harmonização Orofacial')).toBeInTheDocument();
    expect(screen.getByText('UNIFESP, Pós-graduação em Estética Dental')).toBeInTheDocument();
  });

  it('displays all differentials', () => {
    render(<TeamSection />);
    
    expect(screen.getByText(/Tecnologia de ponta/)).toBeInTheDocument();
    expect(screen.getByText(/Ambiente climatizado/)).toBeInTheDocument();
    expect(screen.getByText(/Equipe especializada/)).toBeInTheDocument();
    expect(screen.getByText(/Atendimento humanizado/)).toBeInTheDocument();
    expect(screen.getByText(/Protocolos de biossegurança/)).toBeInTheDocument();
  });

  it('has correct section titles', () => {
    render(<TeamSection />);
    
    expect(screen.getByText('Nossa Equipe')).toBeInTheDocument();
    expect(screen.getByText('Nossos Diferenciais')).toBeInTheDocument();
  });

  it('renders professional images with fallback', () => {
    render(<TeamSection />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });
});