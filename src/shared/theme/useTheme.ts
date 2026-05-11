import { useThemeStore } from './themeStore';
import { themeRegistry } from './themeRegistry';

export const useTheme = () => {
  const themeName = useThemeStore((s) => s.themeName);
  const setTheme = useThemeStore((s) => s.setTheme);

  const resolvedTheme =
    themeRegistry[themeName as keyof typeof themeRegistry] ?? themeRegistry.light;

  const availableThemes = Object.values(themeRegistry)
    .filter((t) => t.isProductionReady)
    .map((t) => t.name);

  return {
    themeName: resolvedTheme.name,
    theme: resolvedTheme,
    tokens: resolvedTheme.tokens,
    setTheme,
    availableThemes,
    allThemes: Object.values(themeRegistry), // optional
    isDark:
      resolvedTheme.name === 'dark' || resolvedTheme.name === 'digital'
  };
};