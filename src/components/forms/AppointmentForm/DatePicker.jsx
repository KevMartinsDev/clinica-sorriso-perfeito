import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--text-dark);
`;

const DateInput = styled.input`
  padding: 1rem;
  border: 2px solid ${props => props.error ? 'var(--error-color)' : 'var(--border-color)'};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.error ? 'var(--error-color)' : 'var(--primary-color)'};
  }
`;

const ErrorMessage = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
`;

const HelpText = styled.span`
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const DatePicker = ({ value, onChange, onBlur, error, ...props }) => {
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const isWeekend = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const selectedDate = e.target.value;

    if (isWeekend(selectedDate)) {
      alert('Por favor, selecione um dia da semana (segunda a sexta-feira).');
      return;
    }

    onChange(selectedDate);
  };

  return (
    <Container>
      <Label>Data da consulta</Label>
      <DateInput
        type="date"
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        min={minDate}
        error={error}
        {...props}
      />
      <HelpText>Apenas dias úteis (segunda a sexta-feira)</HelpText>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default DatePicker;