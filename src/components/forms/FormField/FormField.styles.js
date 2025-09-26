import styled from 'styled-components';

export const FieldContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-dark);
  gap: 0.375rem;
  letter-spacing: 0.015em;
  text-transform: none;
`;

export const FieldWrapper = styled.div`
  position: relative;
`;


export const BaseField = styled.div`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
  transition: border-color 0.3s ease;
  position: relative;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  &:focus::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &:disabled {
    background: #f9fafb;
    border-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const SimpleHelpText = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 12px;
  color: #F44336;
  font-weight: 400;
`;

export const CalendarIcon = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #9ca3af;
  pointer-events: none;
  font-size: 1.125rem;

  &::after {
    content: '📅';
  }
`;

export const HelpText = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.4;
  font-style: italic;
`;

export const RequiredIndicator = styled.span`
  color: #F44336;
  font-weight: 700;
  margin-left: 0.375rem;
  font-size: 1rem;
`;

export const OptionalIndicator = styled.span`
  color: #9ca3af;
  font-weight: 400;
  font-size: 0.75rem;
  margin-left: 0.375rem;
  background: #f3f4f6;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  text-transform: lowercase;
`;