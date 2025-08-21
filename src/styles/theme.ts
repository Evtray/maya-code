export const theme = {
  colors: {
    primary: '#6B4423',
    secondary: '#D4A574',
    accent: '#8B7355',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#f44336',
    background: '#FDFBF7',
    surface: '#FFFFFF',
    text: {
      primary: '#2C1810',
      secondary: '#5D4E37',
      light: '#8B7355',
      white: '#FFFFFF'
    },
    coffee: {
      dark: '#3E2723',
      medium: '#6D4C41',
      light: '#A1887F',
      cream: '#F5E6D3'
    }
  },
  fonts: {
    main: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Playfair Display', Georgia, serif"
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '50%'
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.15)',
    lg: '0 8px 16px rgba(0,0,0,0.2)'
  }
}

export type Theme = typeof theme