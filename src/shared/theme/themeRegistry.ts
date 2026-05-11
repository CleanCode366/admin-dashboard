import { lightTheme } from './tokens/light';
import { darkTheme } from './tokens/dark';
import { digitalTheme } from './tokens/digital';
import { monochromeTheme } from './tokens/monochrome';
import type { Theme, ThemeName } from './types';

export const themeRegistry: Record<ThemeName, Theme> = {
    light: lightTheme,
    dark: darkTheme,
    digital: digitalTheme,
    monochrome: monochromeTheme,
};


export const availableThemes = Object.keys(themeRegistry);