import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSun, FaRegSun } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--text-dark);
`;

const PeriodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PeriodSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PeriodHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-dark);

  svg {
    color: ${props => props.$period === 'morning' ? '#f59e0b' : '#f97316'};
    font-size: 1.2rem;
  }
`;

const TimeSlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
`;

const TimeSlot = styled.button`
  padding: 0.75rem;
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.selected ? 'var(--primary-color)' : 'white'};
  color: ${props => props.selected ? 'white' : 'var(--text-dark)'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    border-color: var(--primary-color);
    background: ${props => props.selected ? 'var(--primary-color)' : 'var(--primary-light)'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--border-color);
    border-color: var(--border-color);
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

const TimeSlots = ({ selectedDate, selectedTime, onTimeSelect, error }) => {
  const [morningSlots, setMorningSlots] = useState([]);
  const [afternoonSlots, setAfternoonSlots] = useState([]);

  const generateTimeSlots = () => {
    const morning = [];
    const afternoon = [];

    for (let hour = 8; hour < 12; hour++) {
      morning.push(`${hour.toString().padStart(2, '0')}:00`);
      morning.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    for (let hour = 14; hour < 18; hour++) {
      afternoon.push(`${hour.toString().padStart(2, '0')}:00`);
      afternoon.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    return { morning, afternoon };
  };

  useEffect(() => {
    if (selectedDate) {
      const { morning, afternoon } = generateTimeSlots();
      setMorningSlots(morning);
      setAfternoonSlots(afternoon);
    } else {
      setMorningSlots([]);
      setAfternoonSlots([]);
    }
  }, [selectedDate]);

  const handleTimeSelect = (time) => {
    onTimeSelect(time);
  };

  return (
    <Container>
      <Label>Horário preferido</Label>
      {!selectedDate ? (
        <HelpText>Selecione uma data primeiro</HelpText>
      ) : (
        <PeriodsContainer>
          <PeriodSection>
            <PeriodHeader $period="morning">
              <FaSun />
              Manhã (8h às 12h)
            </PeriodHeader>
            <TimeSlotsGrid>
              {morningSlots.map(time => (
                <TimeSlot
                  key={time}
                  type="button"
                  selected={selectedTime === time}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </TimeSlot>
              ))}
            </TimeSlotsGrid>
          </PeriodSection>

          <PeriodSection>
            <PeriodHeader $period="afternoon">
              <FaRegSun />
              Tarde (14h às 18h)
            </PeriodHeader>
            <TimeSlotsGrid>
              {afternoonSlots.map(time => (
                <TimeSlot
                  key={time}
                  type="button"
                  selected={selectedTime === time}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </TimeSlot>
              ))}
            </TimeSlotsGrid>
          </PeriodSection>
        </PeriodsContainer>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default TimeSlots;