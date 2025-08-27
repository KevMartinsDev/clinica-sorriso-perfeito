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

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    if (e) e.preventDefault();
    
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
    }
  }, [values, validateAllFields]);

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