import { create } from 'zustand';
import type { ThemeName } from './types';
import { themeRegistry } from './themeRegistry';

const getInitialTheme = (): ThemeName => {
  const stored = localStorage.getItem('app-theme') as ThemeName | null;

  if (stored && themeRegistry[stored]) return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return prefersDark ? 'dark' : 'light';
};

interface ThemeStore {
  themeName: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  themeName: getInitialTheme(),

  setTheme: (themeName) => {
    localStorage.setItem('app-theme', themeName);
    set({ themeName });
  }
}));