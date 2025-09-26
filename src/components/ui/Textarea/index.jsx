import { memo, useCallback, forwardRef } from 'react';
import FormField from '../../forms/FormField';
import { StyledTextarea } from './Textarea.styles';

const Textarea = memo(forwardRef(({
  label,
  error,
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
      <StyledTextarea
        ref={ref}
        {...props}
        $error={!!error}
        onChange={handleChange}
      />
    </FormField>
  );
}));

Textarea.displayName = 'Textarea';

export default Textarea;