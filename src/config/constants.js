export const CONTACT = {
  PHONE: '555591679300',
  WHATSAPP: '555591679300',
  EMAIL: 'contato@clinicasorrisoperfeito.com',
  ADDRESS: {
    STREET: 'Av. Brigadeiro Faria Lima, 3477',
    DISTRICT: 'Itaim Bibi',
    CITY: 'São Paulo',
    STATE: 'SP',
    ZIP: '04538-133',
    FULL: 'Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo - SP, 04538-133'
  }
};

export const BUSINESS_HOURS = {
  WEEKDAYS: '8h às 18h',
  SATURDAY: '8h às 12h',
  SUNDAY: 'Fechado',
  EMERGENCY: '24h'
};

export const WHATSAPP_MESSAGES = {
  DEFAULT: 'Olá! Gostaria de agendar uma consulta.',
  EMERGENCY: 'EMERGÊNCIA - Preciso de atendimento urgente',
  CONTACT_FORM: 'Olá! Enviei uma mensagem pelo site.',
  APPOINTMENT: 'Olá! Gostaria de agendar uma consulta.'
};

export const SOCIAL_LINKS = {
  WHATSAPP: `https://wa.me/${CONTACT.WHATSAPP}`,
  GOOGLE_MAPS: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.ADDRESS.FULL)}`,
  PHONE: `tel:+55${CONTACT.PHONE}`
};

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' }
];

export const TIMEOUTS = {
  LOADING: 2000,
  NOTIFICATION: 4000,
  ANIMATION: 1000
};

export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE: '1200px'
};