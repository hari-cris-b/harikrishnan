export const colors = {
  light: {
    background: {
      primary: '#e0e2db',
      secondary: '#beb7a4',
      card: 'rgba(255, 255, 255, 0.5)'
    },
    text: {
      primary: '#191716',
      secondary: '#3d348b',
      accent: '#e6af2e'
    },
    border: {
      primary: '#e6e7eb',
      secondary: '#beb7a4'
    }
  },
  dark: {
    background: {
      primary: '#191716',
      secondary: '#191716',
      card: 'rgba(25, 23, 22, 0.5)'
    },
    text: {
      primary: '#e0e2db',
      secondary: '#e6af2e',
      accent: '#3d348b'
    },
    border: {
      primary: '#3d348b',
      secondary: '#3d348b'
    }
  }
} as const;

export const animations = {
  transition: {
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1]
  },
  hover: {
    scale: 1.05,
    duration: 0.2
  },
  tap: {
    scale: 0.95,
    duration: 0.1
  }
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const spacing = {
  navHeight: {
    mobile: '72px',
    desktop: '64px'
  },
  container: {
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '4rem'
    }
  }
} as const; 