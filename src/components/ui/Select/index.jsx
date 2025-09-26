import { memo, useCallback, forwardRef } from 'react';
import FormField from '../../forms/FormField';
import { StyledSelect } from './Select.styles';

const Select = memo(forwardRef(({
  label,
  error,
  options = [],
  onChange,
  required,
  helpText,
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
      error={error}
      required={required}
      helpText={helpText}
    >
      <StyledSelect
        ref={ref}
        {...props}
        $error={!!error}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </StyledSelect>
    </FormField>
  );
}));

Select.displayName = 'Select';

export default Select;