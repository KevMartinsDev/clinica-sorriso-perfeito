import { useState, useCallback, useEffect } from 'react';
import { validateForm } from '../utils/validation';

export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name] && errors[name]) {
      const fieldValidation = validationRules[name];
      if (fieldValidation) {
        const error = fieldValidation(value);
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
    }
  }, [touched, errors, validationRules]);

  const setFieldTouched = useCallback((name, isTouched = true) => {
    setTouched(prev => ({
      ...prev,
      [name]: isTouched
    }));
  }, []);

  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  const validateField = useCallback((name, value) => {
    const fieldValidation = validationRules[name];
    if (fieldValidation) {
      const error = fieldValidation(value);
      setFieldError(name, error);
      return error;
    }
    return '';
  }, [validationRules, setFieldError]);

  const validateAllFields = useCallback(() => {
    const validation = validateForm(values);
    setErrors(validation.errors);
    return validation;
  }, [values]);

  const handleChange = useCallback((name) => (value) => {
    setValue(name, value);
  }, [setValue]);

  const handleBlur = useCallback((name) => () => {
    setFieldTouched(name, true);
    validateField(name, values[name]);
  }, [setFieldTouched, validateField, values]);

  const scrollToFirstError = useCallback((errors) => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      const errorElement = document.querySelector(`[name="${firstErrorField}"], [data-field="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        errorElement.focus();
      }
    }
  }, []);

  const showErrorMessage = useCallback((message) => {
    const existingAlert = document.querySelector('.form-error-alert');
    if (existingAlert) {
      existingAlert.remove();
    }
    
    const alertDiv = document.createElement('div');
    alertDiv.className = 'form-error-alert';
    alertDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(231, 76, 60, 0.3);
      z-index: 10000;
      font-weight: 600;
      max-width: 400px;
      animation: slideInAlert 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      font-family: inherit;
    `;
    
    alertDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="font-size: 1.25rem;">⚠️</div>
        <div>${message}</div>
      </div>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.style.animation = 'slideInAlert 0.3s reverse';
        setTimeout(() => alertDiv.remove(), 300);
      }
    }, 4000);
  }, []);

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    if (e) {
      e.preventDefault();
    }
    
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const validation = validateAllFields();
    
    if (validation.isValid) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      scrollToFirstError(validation.errors);
      const firstError = Object.values(validation.errors)[0];
      showErrorMessage(`Erro no formulário: ${firstError}`);
    }
  }, [values, validateAllFields, scrollToFirstError, showErrorMessage]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

  useEffect(() => {
    const stored = localStorage.getItem('appointmentForm');
    if (stored) {
      try {
        const parsedData = JSON.parse(stored);
        setValues(prev => ({ ...prev, ...parsedData }));
      } catch (error) {
        console.error('Error parsing stored form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(values).length > 0 && Object.values(values).some(v => v)) {
      localStorage.setItem('appointmentForm', JSON.stringify(values));
    }
  }, [values]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    setValue,
    setFieldTouched,
    setFieldError,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    validateField,
    validateAllFields
  };
};