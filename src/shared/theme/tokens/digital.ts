import { type Theme } from '../types';
import { primitives } from './primitives';

export const digitalTheme: Theme = {
    name: 'digital',
    tokens: {
        color: {
            "bg-primary": '#000000',
            "bg-secondary": '#050505',
            "text-primary": '#00ffea',
            "text-secondary": '#00ccaa',
            border: primitives.colors.neutral[300],
            danger: primitives.colors.red[500],
            success: primitives.colors.green[500]
        },
        radius: {
            sm: '2px',
            md: '4px',
            lg: '8px'
        },
        shadow: {
            sm: '0 0 4px #00ffea',
            md: '0 0 10px #00ffea'
        }
    },
    isProductionReady: false
};