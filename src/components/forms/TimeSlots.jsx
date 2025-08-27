import React from 'react';
import styled from 'styled-components';
import { getAvailableTimesForDate } from '../../utils/dateHelpers';

const TimeSlotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TimeSlotsLabel = styled.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
`;

const SlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const TimeSlot = styled.button`
  padding: 0.75rem 1rem;
  border: 2px solid ${props => props.$selected ? 'var(--primary-color)' : '#e1e5e9'};
  border-radius: 8px;
  background: ${props => props.$selected ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$selected ? 'white' : 'var(--text-dark)'};
  font-weight: ${props => props.$selected ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    border-color: #e1e5e9;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const NoSlotsMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: var(--text-gray);
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #dee2e6;
`;

const ErrorMessage = styled.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const PeriodSection = styled.div`
  margin-bottom: 1.5rem;
`;

const PeriodTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 2px;
  }
`;

const TimeSlots = ({ 
  selectedDate, 
  selectedTime, 
  onTimeSelect, 
  error,
  disabled = false,
  required = true 
}) => {
  if (!selectedDate) {
    return (
      <TimeSlotsContainer>
        <TimeSlotsLabel>
          Horário preferido
          {required && <span style={{ color: 'var(--error-color)' }}>*</span>}
        </TimeSlotsLabel>
        <NoSlotsMessage>
          Selecione uma data para ver os horários disponíveis
        </NoSlotsMessage>
      </TimeSlotsContainer>
    );
  }

  const availableSlots = getAvailableTimesForDate(selectedDate);
  
  if (availableSlots.length === 0) {
    return (
      <TimeSlotsContainer>
        <TimeSlotsLabel>
          Horário preferido
          {required && <span style={{ color: 'var(--error-color)' }}>*</span>}
        </TimeSlotsLabel>
        <NoSlotsMessage>
          Nenhum horário disponível para esta data
        </NoSlotsMessage>
      </TimeSlotsContainer>
    );
  }

  const morningSlots = availableSlots.filter(slot => {
    const hour = parseInt(slot.split(':')[0]);
    return hour < 12;
  });

  const afternoonSlots = availableSlots.filter(slot => {
    const hour = parseInt(slot.split(':')[0]);
    return hour >= 12;
  });

  const selectedDateObj = new Date(selectedDate);
  const dayOfWeek = selectedDateObj.getDay();
  const isSaturday = dayOfWeek === 6;

  return (
    <TimeSlotsContainer>
      <TimeSlotsLabel>
        Horário preferido
        {required && <span style={{ color: 'var(--error-color)' }}>*</span>}
      </TimeSlotsLabel>
      
      {morningSlots.length > 0 && (
        <PeriodSection>
          <PeriodTitle>🌅 Manhã</PeriodTitle>
          <SlotsGrid>
            {morningSlots.map((slot) => (
              <TimeSlot
                key={slot}
                type="button"
                $selected={selectedTime === slot}
                onClick={() => onTimeSelect(slot)}
                disabled={disabled}
              >
                {slot}
              </TimeSlot>
            ))}
          </SlotsGrid>
        </PeriodSection>
      )}

      {afternoonSlots.length > 0 && !isSaturday && (
        <PeriodSection>
          <PeriodTitle>🌇 Tarde</PeriodTitle>
          <SlotsGrid>
            {afternoonSlots.map((slot) => (
              <TimeSlot
                key={slot}
                type="button"
                $selected={selectedTime === slot}
                onClick={() => onTimeSelect(slot)}
                disabled={disabled}
              >
                {slot}
              </TimeSlot>
            ))}
          </SlotsGrid>
        </PeriodSection>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TimeSlotsContainer>
  );
};

export default TimeSlots;