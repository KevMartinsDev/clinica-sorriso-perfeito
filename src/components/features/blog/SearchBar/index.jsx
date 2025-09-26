import { useState, useRef, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebounceCallback } from '../../../../hooks/useDebounce';

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 50px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #2E8B57;
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.15);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 1);
  }

  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
    border-radius: 40px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      transform: none;
    }
  }
`;



const ResultsInfo = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  font-size: 0.875rem;
  color: #4a5568;
  border: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 0.625rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.875rem;
  }
`;

const ResultsCount = styled.span`
  font-weight: 600;
  color: #2E8B57;
`;

const SearchHint = styled.span`
  color: #718096;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Buscar artigos, autores ou temas...',
  resultsCount = 0,
  showResults = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  
  const debouncedOnChange = useDebounceCallback(onChange, 300, [onChange]);

  const handleInputChange = useCallback((e) => {
    const newValue = e.target.value;
    debouncedOnChange(newValue);
  }, [debouncedOnChange]);


  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      inputRef.current?.blur();
    }
  }, []);

  const showResultsInfo = showResults && (value?.length > 0 || isFocused);

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchInput
          ref={inputRef}
          type="text"
          value={value || ''}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="Campo de busca"
          aria-describedby="search-results-info"
        />
      </SearchWrapper>

      <AnimatePresence>
        {showResultsInfo && (
          <ResultsInfo
            id="search-results-info"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <ResultsCount>
                {resultsCount} {resultsCount === 1 ? 'artigo encontrado' : 'artigos encontrados'}
              </ResultsCount>
              {value && value.length > 0 && (
                <span> para "{value}"</span>
              )}
            </div>
            <SearchHint>
              {!value || value.length === 0
                ? 'Digite para buscar'
                : 'Pressione Esc para limpar'
              }
            </SearchHint>
          </ResultsInfo>
        )}
      </AnimatePresence>
    </SearchContainer>
  );
};

export default memo(SearchBar);