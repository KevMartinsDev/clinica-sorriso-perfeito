export const theme = {
  colors: {
    primary: '#2E8B57',
    secondary: '#87CEEB',
    accent: '#FFD700',
    textDark: '#333',
    textLight: '#666',
    textMuted: '#a0a8b0',
    white: '#fff',
    lightGray: '#f8f9fa',
    mediumGray: '#e9ecef',
    borderGray: '#e1e8ed',
    success: '#25D366',
    error: '#e74c3c',
    emergency: '#dc3545',
    warning: '#ff6b35',
    info: '#4169E1',
    purple: '#8A2BE2',
    gradients: {
      primary: 'linear-gradient(135deg, #2E8B57 0%, #3a9d66 100%)',
      secondary: 'linear-gradient(135deg, #87CEEB 0%, #6BB6E8 100%)',
      hero: 'linear-gradient(135deg, #2E8B57 0%, #3a9d66 100%)',
      emergency: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
      cta: 'linear-gradient(135deg, #4169E1, #2E5DCA)',
      light: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      card: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3rem',
    '5xl': '4rem',
    '6xl': '5rem',
    '8xl': '6rem',
    '10xl': '8rem'
  },

  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '50%'
  },

  shadows: {
    sm: '0 4px 12px rgba(0,0,0,0.06)',
    md: '0 8px 32px rgba(0,0,0,0.08)',
    lg: '0 12px 48px rgba(0,0,0,0.1)',
    xl: '0 20px 60px rgba(0,0,0,0.12)',
    primary: '0 8px 32px rgba(46, 139, 87, 0.2)',
    secondary: '0 20px 60px rgba(135, 206, 235, 0.3)',
    emergency: '0 20px 60px rgba(220, 53, 69, 0.2)'
  },

  typography: {
    fontFamily: {
      primary: "'Open Sans', sans-serif",
      heading: "'Roboto', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.5rem',
      '4xl': '1.75rem',
      '5xl': '2rem',
      '6xl': '2.25rem',
      '7xl': '2.5rem',
      '8xl': '3rem',
      '9xl': '3.5rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      base: 1.6,
      relaxed: 1.7,
      loose: 1.8
    }
  },

  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  },

  animations: {
    transition: {
      fast: '0.2s ease',
      base: '0.3s ease',
      slow: '0.4s ease'
    },
    hover: {
      lift: 'translateY(-2px)',
      liftLarge: 'translateY(-8px)',
      liftXLarge: 'translateY(-12px)',
      scale: 'scale(1.05)',
      scaleLarge: 'scale(1.1)'
    }
  },

  zIndex: {
    base: 1,
    overlay: 10,
    modal: 100,
    notification: 1000
  }
};

export const mediaQueries = {
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (max-width: ${theme.breakpoints.xl})`
};