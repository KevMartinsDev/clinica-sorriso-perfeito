import { forwardRef, useId, cloneElement, isValidElement } from 'react';
import {
  FieldContainer,
  Label,
  FieldWrapper,
  SimpleHelpText,
  CalendarIcon,
  HelpText,
  RequiredIndicator,
  OptionalIndicator
} from './FormField.styles';

const FormField = forwardRef(({
  label,
  helpText,
  simpleHelpText,
  required = false,
  optional = false,
  showOptional = true,
  children,
  className,
  fieldName,
  description,
  showCalendarIcon = false,
  ..._props
}, _ref) => {
  const fieldId = useId();
  const labelId = `${fieldId}-label`;
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;
  const descriptionId = `${fieldId}-description`;

  const ariaDescribedBy = [];
  if (description) ariaDescribedBy.push(descriptionId);
  if (helpText) ariaDescribedBy.push(helpId);

  const enhancedChildren = isValidElement(children)
    ? cloneElement(children, {
        id: fieldId,
        'aria-labelledby': label ? labelId : undefined,
        'aria-describedby': ariaDescribedBy.length > 0 ? ariaDescribedBy.join(' ') : undefined,
        'aria-invalid': 'false',
        'aria-required': required ? 'true' : 'false',
        name: fieldName || children.props.name
      })
    : children;

  return (
    <FieldContainer className={className} role="group" aria-labelledby={label ? labelId : undefined}>
      {label && (
        <Label id={labelId} htmlFor={fieldId} $required={required}>
          {label}
          {required && (
            <RequiredIndicator aria-label="Campo obrigatório">
              *
            </RequiredIndicator>
          )}
          {!required && showOptional && optional && (
            <OptionalIndicator aria-label="Campo opcional">
              (opcional)
            </OptionalIndicator>
          )}
        </Label>
      )}

      {description && (
        <HelpText id={descriptionId} role="note">
          {description}
        </HelpText>
      )}

      <FieldWrapper>
        {enhancedChildren}
        {showCalendarIcon && (
          <CalendarIcon aria-hidden="true" />
        )}
      </FieldWrapper>

      {simpleHelpText && (
        <SimpleHelpText>
          {simpleHelpText}
        </SimpleHelpText>
      )}

      {helpText && (
        <HelpText id={helpId} role="note">
          {helpText}
        </HelpText>
      )}
    </FieldContainer>
  );
});

FormField.displayName = 'FormField';

export default FormField;