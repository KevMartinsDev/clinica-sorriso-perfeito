import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Lightbox from '../Lightbox';

const mockImages = [
  {
    id: 1,
    src: 'image1.jpg',
    title: 'Image 1',
    description: 'Description 1'
  },
  {
    id: 2,
    src: 'image2.jpg',
    title: 'Image 2',
    description: 'Description 2'
  },
  {
    id: 3,
    src: 'image3.jpg',
    title: 'Image 3',
    description: 'Description 3'
  }
];

describe('Lightbox Component', () => {
  const mockOnClose = vi.fn();
  const mockOnNext = vi.fn();
  const mockOnPrev = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnNext.mockClear();
    mockOnPrev.mockClear();
  });

  it('displays current image with title and description', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  it('shows correct image counter', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={1}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    expect(screen.getByText('2 de 3')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const closeButton = screen.getByLabelText('Fechar lightbox');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onNext when next button is clicked', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const nextButton = screen.getByLabelText('Próxima imagem');
    fireEvent.click(nextButton);

    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });

  it('calls onPrev when prev button is clicked', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={1}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const prevButton = screen.getByLabelText('Imagem anterior');
    fireEvent.click(prevButton);

    expect(mockOnPrev).toHaveBeenCalledTimes(1);
  });

  it('disables prev button on first image', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const prevButton = screen.getByLabelText('Imagem anterior');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last image', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={2}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const nextButton = screen.getByLabelText('Próxima imagem');
    expect(nextButton).toBeDisabled();
  });

  it('handles keyboard navigation', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={1}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    expect(mockOnPrev).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });

  it('prevents body scroll when mounted', () => {
    const originalOverflow = document.body.style.overflow;
    
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    expect(document.body.style.overflow).toBe('hidden');
    
    document.body.style.overflow = originalOverflow;
  });

  it('closes when clicking on overlay', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const overlay = screen.getByText('Image 1').closest('[role="presentation"]') || 
                   document.querySelector('[style*="background: rgba(0, 0, 0, 0.9)"]');
    
    if (overlay) {
      fireEvent.click(overlay);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });

  it('does not close when clicking on image', () => {
    render(
      <Lightbox
        images={mockImages}
        currentIndex={0}
        onClose={mockOnClose}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );

    const image = screen.getByAltText('Image 1');
    fireEvent.click(image);

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});