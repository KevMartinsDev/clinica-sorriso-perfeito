import PropTypes from 'prop-types';
import { useState, useId } from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  onBlur,
  error, 
  required = false,
  mask,
  name,
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

  const handleBlur = (e) => {
    setTouched(true);
    if (onBlur) onBlur(e);
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
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`input ${error ? 'input-error' : ''}`}
        required={required}
        {...props}
      />
      {error && (
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
  onBlur: PropTypes.func,
  error: PropTypes.string,
  required: PropTypes.bool,
  mask: PropTypes.string,
  name: PropTypes.string
};

export default Input;