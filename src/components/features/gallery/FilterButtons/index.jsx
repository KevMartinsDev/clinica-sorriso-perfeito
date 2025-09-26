import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    margin: 0 -1rem 1.5rem -1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    /* Gradient fade nas bordas */
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 20px;
      pointer-events: none;
      z-index: 1;
    }

    &::before {
      left: 0;
      background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    &::after {
      right: 0;
      background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    margin: 0 -0.75rem 1.25rem -0.75rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$isActive ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.$isActive ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$isActive ? 'white' : 'var(--text-dark)'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: fit-content;
  font-size: 0.875rem;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    border-color: var(--primary-color);
    background: ${props => props.$isActive ? 'var(--primary-color)' : 'var(--primary-color-light)'};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 20px;
    box-shadow: ${props => props.$isActive
      ? '0 2px 8px rgba(46, 139, 87, 0.3)'
      : '0 1px 3px rgba(0, 0, 0, 0.1)'};

    &:hover:not(:disabled) {
      transform: none;
      box-shadow: 0 3px 12px rgba(46, 139, 87, 0.4);
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    border-radius: 18px;

    span {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: none;
    }
  }
`;

const FilterButtons = ({ categories, activeFilter, onFilterChange, imageCounts }) => {
  const handleKeyDown = (event, filterId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onFilterChange(filterId);
    }
  };

  return (
    <FilterContainer
      role="tablist"
      aria-label="Filtros da galeria"
    >
      <FilterButton
        $isActive={activeFilter === 'todos'}
        onClick={() => onFilterChange('todos')}
        onKeyDown={(e) => handleKeyDown(e, 'todos')}
        role="tab"
        aria-selected={activeFilter === 'todos'}
        aria-controls="gallery-grid"
        id="filter-todos"
        type="button"
      >
        Todos {imageCounts && imageCounts.todos && (
          <span aria-label={`${imageCounts.todos} imagens`}>({imageCounts.todos})</span>
        )}
      </FilterButton>
      {categories.filter(cat => cat.id !== 'todos').map((category, index) => (
        <FilterButton
          key={category.id || index}
          $isActive={activeFilter === category.id}
          onClick={() => onFilterChange(category.id)}
          onKeyDown={(e) => handleKeyDown(e, category.id)}
          role="tab"
          aria-selected={activeFilter === category.id}
          aria-controls="gallery-grid"
          id={`filter-${category.id}`}
          type="button"
        >
          {category.name} {imageCounts && imageCounts[category.id] && (
            <span aria-label={`${imageCounts[category.id]} imagens`}>({imageCounts[category.id]})</span>
          )}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default FilterButtons;