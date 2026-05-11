import { type Theme } from '../types';
import { primitives } from './primitives';

export const lightTheme: Theme = {
  name: 'light',
  tokens: {
    color: {
      // Background layers
      "bg-primary": primitives.colors.neutral[50],
      "bg-secondary": primitives.colors.neutral[100],
      "bg-tertiary": primitives.colors.neutral[200],

      // Text hierarchy
      "text-primary": primitives.colors.neutral[900],
      "text-secondary": primitives.colors.neutral[600],
      "text-tertiary": primitives.colors.neutral[400],

      // Border hierarchy
      "border-primary": "rgba(0,0,0,0.20)",
      "border-secondary": "rgba(0,0,0,0.12)",
      "border-tertiary": "rgba(0,0,0,0.08)",

      // --- STATUS COLORS (LIGHT THEME) ---

      // Danger
      "bg-danger": "#fde8e8",
      "text-danger": "#b91c1c",
      "border-danger": "#f5c2c2",

      // Warning
      "bg-warning": "#fef3c7",
      "text-warning": "#92400e",
      "border-warning": "#fde68a",

      // Success
      "bg-success": "#e6f4ea",
      "text-success": "#166534",
      "border-success": "#bbf7d0",

      // Info
      "bg-info": "#e8f1fb",
      "text-info": "#1e3a8a",
      "border-info": "#bfdbfe"
    },
    radius: {
      sm: '4px',
      md: '8px',
      lg: '12px'
    },
    shadow: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
  },
  isProductionReady: true
};

