import { create } from 'zustand';
import type { ThemeName } from './types';
import { themeRegistry } from './themeRegistry';

interface ThemeStore {
  themeName: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const getInitialTheme = (): ThemeName => {
  const stored = localStorage.getItem('app-theme') as ThemeName | null;

  if (stored && stored in themeRegistry) {
    return stored;
  }

  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  return prefersDark ? 'dark' : 'light';
};

export const useThemeStore = create<ThemeStore>((set: (partial: Partial<ThemeStore>) => void) => ({
  themeName: getInitialTheme(),

  setTheme: (themeName: ThemeName) => {
    localStorage.setItem('app-theme', themeName);

    set({ themeName });
  },
}));