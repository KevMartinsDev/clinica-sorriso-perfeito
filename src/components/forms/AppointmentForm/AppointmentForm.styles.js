import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    background: linear-gradient(135deg, #f8fcff 0%, #ffffff 100%);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f1f3f4;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    width: 6px;
    height: 24px;
    background: var(--primary-color);
    border-radius: 3px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: ${props => props.$columns || '1fr 1fr'};
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

export const SummaryCard = styled(motion.div)`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1.25rem;
    border-radius: 8px;
  }
`;

export const SummaryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.875rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(46, 139, 87, 0.1);

  &:last-child {
    border-bottom: none;
    font-weight: 600;
    font-size: 1.1rem;

    span:first-child {
      color: #000000;
    }

    span:last-child {
      color: #000000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 0;
    gap: 0.25rem;

    span:first-child {
      font-weight: 600;
      font-size: 0.875rem;
      color: #374151;
    }

    span:last-child {
      font-size: 0.875rem;
      color: #111827;
      padding-left: 0.5rem;
    }

    &:last-child {
      padding: 0.875rem 0;
      border-top: 2px solid rgba(46, 139, 87, 0.2);
      margin-top: 0.5rem;

      span:first-child {
        font-size: 0.95rem;
        color: #000000;
      }

      span:last-child {
        font-size: 1rem;
        font-weight: 700;
        color: #000000;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0;

    span:first-child {
      font-size: 0.8rem;
    }

    span:last-child {
      font-size: 0.8rem;
      padding-left: 0.25rem;
    }

    &:last-child {
      span:first-child {
        font-size: 0.875rem;
      }

      span:last-child {
        font-size: 0.95rem;
      }
    }
  }
`;

export const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;

  svg {
    font-size: 4rem;
    color: var(--success-color);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-gray);
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto 2rem;
  }
`;

export const PatientTypeContainer = styled.div`
  margin-top: 0.5rem;
`;

export const PatientTypeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(46, 139, 87, 0.05);
  }

  &:focus-within {
    outline: 2px solid var(--focus-color, #005fcc);
    outline-offset: 2px;
  }

  input[type="radio"] {
    margin: 0;
    width: 18px;
    height: 18px;
    accent-color: var(--primary-color);

    &:focus {
      outline: 2px solid var(--focus-color, #005fcc);
      outline-offset: 2px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const PatientTypeLabelMain = styled.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const InsuranceContainer = styled.div`
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const FieldErrorMessage = styled.div`
  color: var(--error-color, #dc3545);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⚠';
    font-size: 1rem;
  }
`;

export const RequiredIndicator = styled.span`
  color: var(--error-color, #dc3545);
  margin-left: 0.25rem;
  font-weight: 600;

  &::after {
    content: '*';
  }
`;

export const AutoSaveIndicator = styled(motion.div)`
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #1976d2;

  svg {
    color: #2196f3;
  }
`;

export const StepNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
`;

export const StepButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.variant === 'primary' ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.variant === 'primary' ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : 'var(--text-dark)'};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: ${props => props.variant === 'primary' ? 'var(--primary-dark)' : 'var(--background-light)'};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;

export const LoadingSpinner = styled.div`
  padding: 2rem;
  text-align: center;
  color: var(--text-light);
  font-size: 0.875rem;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-top: 2px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 0.5rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const FormProgress = styled.div`
  margin-bottom: 2rem;

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: #e9ecef;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  .progress-text {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-gray);
  }
`;

export const PersonalDataSection = styled.div`
  margin-bottom: 2.5rem;
`;

export const PersonalDataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const CustomLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`;

export const RequiredAsterisk = styled.span`
  color: #F44336;
  margin-left: 0.25rem;
`;

export const CustomInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.$hasError ? '#F44336' : '#d1d5db'};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#F44336' : 'var(--primary-color)'};
  }

  &:hover:not(:focus) {
    border-color: ${props => props.$hasError ? '#F44336' : '#9ca3af'};
  }

  &:disabled {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const HelpText = styled.span`
  display: ${props => props.$show ? 'block' : 'none'};
  margin-top: 0.5rem;
  font-size: 12px;
  color: #F44336;
  font-weight: 400;
`;

export const CalendarIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  font-size: 1.125rem;

  &::after {
    content: '📅';
  }
`;

export const ServiceCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ServiceCard = styled.div`
  background: #ffffff;
  border: 2px solid ${props => props.$selected ? '#2E8B57' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #2E8B57;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(46, 139, 87, 0.15);
  }

  ${props => props.$selected && `
    background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.2);
  `}
`;

export const ServiceIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$selected ? '#2E8B57' : '#f8f9fa'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
  position: relative;

  ${ServiceCard}:hover & {
    background: #2E8B57;
    transform: scale(1.1);
  }

  svg {
    font-size: 24px;
    color: ${props => props.$selected ? '#ffffff' : '#6c757d'};
    transition: color 0.3s ease;
  }

  ${ServiceCard}:hover & svg {
    color: #ffffff;
  }
`;

export const ServiceName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const ServicePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2E8B57;
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  text-align: center;
  margin: 0;
`;

export const SelectedIndicator = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2E8B57;
  display: ${props => props.$show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;

  &::after {
    content: '✓';
  }
`;

export const PreferencesSection = styled.div`
  margin-bottom: 2.5rem;
`;

export const PreferencesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
`;

export const CustomSelectWrapper = styled.div`
  position: relative;
`;

export const CustomSelectLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`;

export const CustomSelect = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &:hover:not(:focus) {
    border-color: #9ca3af;
  }

  option {
    padding: 8px;
    font-size: 1rem;
  }
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RadioGroupLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`;

export const RadioOptionsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: normal;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  flex: 1;
  min-height: 50px;

  &:hover {
    border-color: var(--primary-color);
    background-color: rgba(46, 139, 87, 0.05);
  }

  &:has(input:checked) {
    border-color: var(--primary-color);
    background-color: rgba(46, 139, 87, 0.1);
  }

  input[type="radio"] {
    width: 20px;
    height: 20px;
    accent-color: var(--primary-color);
    margin: 0;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
    }
  }

  span {
    font-size: 1rem;
    color: #374151;
    font-weight: 500;
  }
`;

export const ObservationsSection = styled.div`
  margin-bottom: 2.5rem;
`;

export const ObservationsWrapper = styled.div`
  position: relative;
`;

export const ObservationsLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
`;

export const CustomTextarea = styled.textarea`
  width: 100%;
  padding: 1.25rem;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 140px;
  font-family: inherit;

  &::placeholder {
    color: #6b7280;
    font-weight: 400;
    opacity: 1;
  }

  @media (max-width: 768px) {
    &::placeholder {
      color: #4b5563;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #9ca3af;
  }

  &:disabled {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const CharacterCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;

  .count {
    color: ${props => props.$isNearLimit ? '#f59e0b' : props.$isOverLimit ? '#ef4444' : '#6b7280'};
    font-weight: ${props => props.$isNearLimit || props.$isOverLimit ? '600' : '400'};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    .count {
      align-self: flex-end;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.5rem;

    .count {
      font-size: 0.75rem;
    }
  }
`;

export const ObservationsHelpText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;

  ul {
    margin: 0.5rem 0 0 1.25rem;
    padding: 0;

    li {
      margin-bottom: 0.25rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.3;

    strong {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
    }

    ul {
      margin: 0.75rem 0 0 1rem;

      li {
        margin-bottom: 0.4rem;
        font-size: 0.8rem;
        line-height: 1.2;
        padding-left: 0.25rem;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;

    strong {
      font-size: 0.8rem;
      color: #374151;
    }

    ul {
      margin: 0.5rem 0 0 0.75rem;
      list-style: none;

      li {
        margin-bottom: 0.35rem;
        font-size: 0.75rem;
        padding-left: 0.5rem;
        position: relative;

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #9ca3af;
        }
      }
    }
  }
`;

