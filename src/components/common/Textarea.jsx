import PropTypes from 'prop-types';
import { useState, useId } from 'react';

const Textarea = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  rows = 4,
  ...props 
}) => {
  const id = useId();
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="textarea-group">
      {label && (
        <label htmlFor={id} className="textarea-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        className={`textarea ${error && touched ? 'textarea-error' : ''}`}
        required={required}
        rows={rows}
        {...props}
      />
      {error && touched && (
        <span className="error-message">{error}</span>
      )}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number
};

export default Textarea;