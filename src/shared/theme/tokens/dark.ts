import { type Theme } from '../types';

export const darkTheme: Theme = {
  name: 'dark',
  tokens: {
    color: {
      // Background layers
      'bg-primary': '#1c1c1a',
      'bg-secondary': '#2a2a27',
      'bg-tertiary': '#141412',

      // Background status
      'bg-danger': '#3d1a1a',
      'bg-warning': '#3d2a08',
      'bg-success': '#1a2e08',
      'bg-info': '#0d2540',

      // Text hierarchy
      'text-primary': '#f0ede6',
      'text-secondary': '#b4b2a9',
      'text-tertiary': '#888780',

      // Text status
      'text-danger': '#f09595',
      'text-warning': '#fac775',
      'text-success': '#c0dd97',
      'text-info': '#85b7eb',

      // Border hierarchy
      'border-primary': 'rgba(255,255,255,0.32)',
      'border-secondary': 'rgba(255,255,255,0.20)',
      'border-tertiary': 'rgba(255,255,255,0.10)',

      // Border status
      'border-danger': '#791f1f',
      'border-warning': '#633806',
      'border-success': '#27500a',
      'border-info': '#0c447c'
    },

    radius: {
      sm: '4px',
      md: '8px',
      lg: '12px'
    },

    shadow: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
      md: '0 4px 10px rgba(0, 0, 0, 0.5)'
    }
  },

  isProductionReady: true
};