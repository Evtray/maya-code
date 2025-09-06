export const theme = {
  colors: {
    primary: '#2563EB',      // Blue
    secondary: '#7C3AED',    // Purple
    accent: '#10B981',       // Green
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    text: {
      primary: '#111827',
      secondary: '#6B7280',
      light: '#9CA3AF',
      white: '#FFFFFF',
      disabled: '#D1D5DB'
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
      dark: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)'
    },
    tech: {
      dark: '#1F2937',
      medium: '#374151',
      light: '#E5E7EB',
      accent: '#F3F4F6'
    },
    border: '#E5E7EB',
    disabled: '#D1D5DB'
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
    lg: '0 8px 16px rgba(0,0,0,0.2)',
    xl: '0 12px 24px rgba(0,0,0,0.25)'
  }
}

export type Theme = typeof theme