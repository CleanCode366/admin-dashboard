import { type Theme } from '../types';
import { primitives } from './primitives';

export const monochromeTheme: Theme = {
    name: 'monochrome',
    tokens: {
        color: {
            "bg-primary": '#000000',
            "bg-secondary": '#555555',
            "text-primary": '#ffffff',
            "text-secondary": '#cccccc',
            border: primitives.colors.neutral[300],
            danger: primitives.colors.red[500],
            success: primitives.colors.green[500]
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
    isProductionReady: false,
};
