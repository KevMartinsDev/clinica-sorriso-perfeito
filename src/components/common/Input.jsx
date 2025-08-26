import PropTypes from 'prop-types';
import { useState, useId } from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  mask,
  ...props 
}) => {
  const id = useId();
  const [touched, setTouched] = useState(false);

  const applyMask = (value, maskType) => {
    if (!maskType) return value;
    
    if (maskType === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
      if (match) {
        return !match[2] ? match[1] : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
      }
    }
    
    return value;
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;
    
    if (mask) {
      inputValue = applyMask(inputValue, mask);
    }
    
    onChange(inputValue);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`input ${error && touched ? 'input-error' : ''}`}
        required={required}
        {...props}
      />
      {error && touched && (
        <span className="error-message">{error}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  mask: PropTypes.string
};

export default Input;