import styled from 'styled-components';
import { BaseField } from '../../forms/FormField/FormField.styles';

export const StyledTextarea = styled.textarea`
  ${BaseField}
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: var(--text-light);
  }
`;