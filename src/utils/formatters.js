export const formatPhone = (value) => {
  if (!value) {
    return '';
  }
  
  const numbers = value.replace(/\D/g, '');
  
  if (numbers.length <= 2) {
    return `(${numbers}`;
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

export const formatCPF = (value) => {
  if (!value) {
    return '';
  }
  
  const numbers = value.replace(/\D/g, '');
  
  if (numbers.length <= 3) {
    return numbers;
  }
  if (numbers.length <= 6) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
  }
  if (numbers.length <= 9) {
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
  }
  
  return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
};

export const formatMoney = (value) => {
  if (!value && value !== 0) {
    return 'R$ 0,00';
  }
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDate = (date) => {
  if (!date) {
    return '';
  }
  
  return new Date(date).toLocaleDateString('pt-BR');
};

export const formatDateTime = (date, time) => {
  if (!date || !time) {
    return '';
  }
  
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return `${formattedDate} às ${time}`;
};

export const cleanPhone = (phone) => {
  if (!phone) {
    return '';
  }
  return phone.replace(/\D/g, '');
};

export const cleanCPF = (cpf) => {
  if (!cpf) {
    return '';
  }
  return cpf.replace(/\D/g, '');
};

export const capitalizeWords = (str) => {
  if (!str) {
    return '';
  }
  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};