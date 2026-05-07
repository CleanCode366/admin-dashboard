import { useEffect } from 'react';
import { themeRegistry } from './themeRegistry';
import { useThemeStore } from './themeStore';

const applyTokens = (tokens: Record<string, any>, prefix = '') => {
    const root = document.documentElement;

    Object.entries(tokens).forEach(([key, value]) => {
        const newPrefix = prefix ? `${prefix}-${key}` : key;

        if (typeof value === 'object') {
            applyTokens(value, newPrefix);
        } else {
            root.style.setProperty(`--${newPrefix}`, value);
        }
    });
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const themeName = useThemeStore((s) => s.themeName);

    useEffect(() => {
        const resolvedTheme =
            themeRegistry[themeName as keyof typeof themeRegistry] ?? themeRegistry.light;

        document.documentElement.setAttribute('data-theme', resolvedTheme.name);

        applyTokens(resolvedTheme.tokens);

        document.documentElement.setAttribute('data-theme-loaded', 'true');
    }, [themeName]);

    return children;
};