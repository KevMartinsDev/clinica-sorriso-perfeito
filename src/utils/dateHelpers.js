export const isWeekend = (date) => {
  const day = new Date(date).getDay();
  return day === 0 || day === 6;
};

export const isSunday = (date) => {
  return new Date(date).getDay() === 0;
};

export const isPastDate = (date) => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate < today;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatDateShort = (date) => {
  return new Date(date).toLocaleDateString('pt-BR');
};

export const getWeekdaySlots = () => [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

export const getSaturdaySlots = () => [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'
];

export const getAvailableSlots = (date) => {
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay();
  
  if (dayOfWeek === 0) {
    return [];
  }
  
  if (dayOfWeek === 6) {
    return getSaturdaySlots();
  }
  
  return getWeekdaySlots();
};

export const getOccupiedSlots = (date) => {
  const dateStr = new Date(date).toISOString().split('T')[0];
  const occupied = {
    '2024-12-26': ['09:00', '10:30', '14:00', '15:30'],
    '2024-12-27': ['08:30', '11:00', '14:30', '16:00'],
    '2024-12-28': ['09:30', '10:00', '15:00', '17:00']
  };
  
  return occupied[dateStr] || [];
};

export const getAvailableTimesForDate = (date) => {
  const allSlots = getAvailableSlots(date);
  const occupiedSlots = getOccupiedSlots(date);
  
  return allSlots.filter(slot => !occupiedSlots.includes(slot));
};

export const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export const getMaxDate = () => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  return maxDate.toISOString().split('T')[0];
};