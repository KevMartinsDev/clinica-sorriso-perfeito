import styled from 'styled-components';
import { BaseField } from '../../forms/FormField/FormField.styles';

export const StyledInput = styled.input`
  ${BaseField}

  &::placeholder {
    color: var(--text-light);
  }
`;