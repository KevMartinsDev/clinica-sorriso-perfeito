export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Por favor, digite seu nome completo';
  }

  const words = name.trim().split(/\s+/);
  if (words.length < 2) {
    return 'Digite seu nome e sobrenome (ex: João Silva)';
  }

  if (name.length < 2) {
    return 'Nome deve ter pelo menos 2 caracteres';
  }

  return '';
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Por favor, digite seu endereço de email';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Digite um email válido (ex: seunome@email.com)';
  }

  return '';
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return 'Por favor, digite seu telefone ou WhatsApp';
  }

  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    return 'Digite um telefone válido com DDD (ex: 11 99999-9999)';
  }
  if (cleanPhone.length !== 11 && cleanPhone.length !== 10) {
    return 'Telefone deve ter 10 ou 11 dígitos com DDD';
  }

  return '';
};

export const validateDate = (date) => {
  if (!date) {
    return 'Data é obrigatória';
  }
  
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    return 'Data não pode ser no passado';
  }
  
  if (selectedDate.getDay() === 0) {
    return 'Não atendemos aos domingos';
  }
  
  return '';
};

export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} é obrigatório`;
  }
  return '';
};

export const validateForm = (formData) => {
  const errors = {};
  
  const nameError = validateName(formData.name);
  if (nameError) {
    errors.name = nameError;
  }
  
  const emailError = validateEmail(formData.email);
  if (emailError) {
    errors.email = emailError;
  }
  
  const phoneError = validatePhone(formData.phone);
  if (phoneError) {
    errors.phone = phoneError;
  }
  
  const dateError = validateDate(formData.date);
  if (dateError) {
    errors.date = dateError;
  }
  
  const timeError = validateRequired(formData.time, 'Horário');
  if (timeError) {
    errors.time = timeError;
  }
  
  const serviceError = validateRequired(formData.service, 'Tipo de consulta');
  if (serviceError) {
    errors.service = serviceError;
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};