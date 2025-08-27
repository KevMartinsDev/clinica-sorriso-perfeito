import React from 'react';
import styled from 'styled-components';
import { getTomorrowDate, getMaxDate, isSunday, isPastDate } from '../../utils/dateHelpers';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DatePickerLabel = styled.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
`;

const DateInput = styled.input`
  padding: 0.75rem;
  border: 2px solid ${props => props.$hasError ? 'var(--error-color)' : '#e1e5e9'};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
  }
  
  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const DateInfo = styled.div`
  font-size: 0.875rem;
  color: var(--text-gray);
  margin-top: 0.25rem;
`;

const DatePicker = ({ 
  value, 
  onChange, 
  onBlur,
  error,
  label = 'Data preferida',
  disabled = false,
  required = true
}) => {
  const minDate = getTomorrowDate();
  const maxDate = getMaxDate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    
    if (selectedDate && isSunday(selectedDate)) {
      return;
    }
    
    if (selectedDate && isPastDate(selectedDate)) {
      return;
    }
    
    onChange(selectedDate);
  };

  const getDateInfo = () => {
    if (!value) return 'Selecione uma data disponível';
    
    const date = new Date(value);
    const dayName = date.toLocaleDateString('pt-BR', { weekday: 'long' });
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    return `${dayName.charAt(0).toUpperCase() + dayName.slice(1)}, ${formattedDate}`;
  };

  return (
    <DatePickerContainer>
      <DatePickerLabel htmlFor="date-picker">
        {label}
        {required && <span style={{ color: 'var(--error-color)' }}>*</span>}
      </DatePickerLabel>
      <DateInput
        id="date-picker"
        type="date"
        value={value || ''}
        onChange={handleDateChange}
        onBlur={onBlur}
        min={minDate}
        max={maxDate}
        disabled={disabled}
        $hasError={!!error}
        required={required}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!error && <DateInfo>{getDateInfo()}</DateInfo>}
    </DatePickerContainer>
  );
};

export default DatePicker;