import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchContainer = styled.div`
  max-width: 500px;
  margin: 0 auto 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 25px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-gray);
  pointer-events: none;

  svg {
    font-size: 1rem;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-gray);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: ${props => props.$visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }

  svg {
    font-size: 0.875rem;
  }
`;

const SearchBar = ({ value, onChange, placeholder = "Buscar artigos..." }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <SearchContainer>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
      
      <SearchInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        aria-label="Buscar artigos"
      />
      
      <ClearButton
        $visible={value.length > 0}
        onClick={handleClear}
        aria-label="Limpar busca"
      >
        <FaTimes />
      </ClearButton>
    </SearchContainer>
  );
};

export default SearchBar;