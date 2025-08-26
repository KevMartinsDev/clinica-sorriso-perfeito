import PropTypes from 'prop-types';
import { useId } from 'react';

const Select = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  options, 
  error, 
  required = false,
  ...props 
}) => {
  const id = useId();

  return (
    <div className="select-group">
      {label && (
        <label htmlFor={id} className="select-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`select ${error ? 'select-error' : ''}`}
        required={required}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="error-message">{error}</span>
      )}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  required: PropTypes.bool
};

export default Select;