import { memo, useCallback, forwardRef } from 'react';
import FormField from '../../forms/FormField';
import { StyledInput } from './Input.styles';

const Input = memo(forwardRef(({
  label,
  onChange,
  required,
  helpText,
  simpleHelpText,
  showCalendarIcon,
  ...props
}, ref) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  return (
    <FormField
      label={label}
      required={required}
      helpText={helpText}
      simpleHelpText={simpleHelpText}
      showCalendarIcon={showCalendarIcon}
    >
      <StyledInput
        ref={ref}
        {...props}
        onChange={handleChange}
      />
    </FormField>
  );
}));

Input.displayName = 'Input';

export default Input;