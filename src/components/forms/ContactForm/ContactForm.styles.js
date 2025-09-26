import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const ContactFormContainer = styled.form`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const FormDescription = styled.p`
  color: #5a6c7d;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .char-counter {
    text-align: right;
    font-size: 0.8rem;
    color: #6c757d;
    margin-top: 0.25rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;

  svg {
    color: #2E8B57;
    font-size: 0.9rem;
  }
`;

export const FormInput = styled.input`
  padding: 1rem 1.25rem;
  border: 2px solid ${props => props.$hasError ? '#e74c3c' : '#e9ecef'};
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  outline: none !important;

  &::placeholder {
    color: #adb5bd;
  }

  &:hover:not(:focus) {
    border-color: ${props => props.$hasError ? '#e74c3c' : '#ced4da'};
  }

  &:focus {
    border-color: ${props => props.$hasError ? '#e74c3c' : '#2E8B57'};
    box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(46, 139, 87, 0.1)'};
    transform: translateY(-1px);
  }

  ${props => props.$hasError && `
    background-color: #fdf2f2;
  `}
`;

export const FormTextarea = styled.textarea`
  padding: 1rem 1.25rem;
  border: 2px solid ${props => props.$hasError ? '#e74c3c' : '#e9ecef'};
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  outline: none !important;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: #adb5bd;
  }

  &:hover:not(:focus) {
    border-color: ${props => props.$hasError ? '#e74c3c' : '#ced4da'};
  }

  &:focus {
    border-color: ${props => props.$hasError ? '#e74c3c' : '#2E8B57'};
    box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(46, 139, 87, 0.1)'};
    transform: translateY(-1px);
  }

  ${props => props.$hasError && `
    background-color: #fdf2f2;
  `}
`;

export const FormSelect = styled.select`
  padding: 1rem 1.25rem;
  border: 2px solid ${props => props.$hasError ? '#e74c3c' : '#e9ecef'};
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  outline: none !important;
  cursor: pointer;

  &:hover:not(:focus) {
    border-color: ${props => props.$hasError ? '#e74c3c' : '#ced4da'};
  }

  &:focus {
    border-color: ${props => props.$hasError ? '#e74c3c' : '#2E8B57'};
    box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(46, 139, 87, 0.1)'};
    transform: translateY(-1px);
  }

  ${props => props.$hasError && `
    background-color: #fdf2f2;
  `}

  option {
    padding: 0.5rem;
  }
`;

export const FormError = styled.span`
  color: #e74c3c;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: '⚠';
    font-size: 0.8rem;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  border: none;
  padding: 1.25rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 16px rgba(46, 139, 87, 0.3);
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #1e5f3b 0%, #1c6e1c 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 139, 87, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1rem;
  }
`;

export const LoadingSpinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s ease-in-out infinite;
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 20px;
  border: 2px solid #10b981;
  animation: ${fadeIn} 0.6s ease-out;

  .success-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    animation: ${pulse} 2s infinite;
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  }

  h3 {
    color: #065f46;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #047857;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 400px;
  }

  .new-message-btn {
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    border: none;
    padding: 0.875rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(46, 139, 87, 0.2);

    &:hover {
      background: linear-gradient(135deg, #1e5f3b 0%, #1c6e1c 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(46, 139, 87, 0.3);
    }
  }
`;