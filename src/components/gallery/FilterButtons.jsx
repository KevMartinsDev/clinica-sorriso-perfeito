import styled from 'styled-components';
import { motion } from 'framer-motion';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem 1rem 1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    /* Gradiente nas bordas para indicar scroll */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 1rem;
      width: 20px;
      background: linear-gradient(to right, rgba(248, 249, 250, 1), transparent);
      pointer-events: none;
      z-index: 1;
    }
    
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 1rem;
      width: 20px;
      background: linear-gradient(to left, rgba(248, 249, 250, 1), transparent);
      pointer-events: none;
      z-index: 1;
    }
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.25rem;
  border: 2px solid ${props => props.$active ? 'var(--primary-color)' : '#e5e7eb'};
  background: ${props => props.$active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$active ? 'white' : '#6b7280'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: var(--primary-color);
    color: ${props => props.$active ? 'white' : 'var(--primary-color)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 20px;
    min-width: fit-content;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: none;
      box-shadow: 0 4px 12px rgba(46, 139, 87, 0.15);
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
`;

const Badge = styled.span`
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.25)' : 'rgba(46, 139, 87, 0.1)'};
  color: ${props => props.$active ? 'white' : 'var(--primary-color)'};
  padding: 0.125rem 0.5rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.125rem 0.375rem;
    font-size: 0.7rem;
    border-radius: 8px;
  }
`;

const FilterWrapper = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    background: var(--light-gray);
    margin: 0 -1rem;
    padding: 1rem 0;
  }
`;

const FilterButtons = ({ categories, activeFilter, onFilterChange, imageCounts }) => {
  return (
    <FilterWrapper>
      <FilterContainer>
        {categories.map((category) => {
          const isActive = activeFilter === category.id;
          const count = imageCounts[category.id] || 0;

          return (
            <FilterButton
              key={category.id}
              $active={isActive}
              onClick={() => onFilterChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {category.name}
              <Badge $active={isActive}>
                {count}
              </Badge>
            </FilterButton>
          );
        })}
      </FilterContainer>
    </FilterWrapper>
  );
};

export default FilterButtons;