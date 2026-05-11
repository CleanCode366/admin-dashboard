import { themeRegistry } from "./themeRegistry";
import { useTheme } from "./useTheme";
import type { ThemeName } from './types';

export const ThemePicker = () => {
  const { themeName, setTheme } = useTheme();

  return (
    <select value={themeName} onChange={(e) => setTheme(e.target.value as ThemeName)}>
      {Object.entries(themeRegistry).map(([name, theme]) => (
        <option
          key={name}
          value={name}
          disabled={theme.isProductionReady === false}
        >
          {name} {theme.isProductionReady === false ? '(Coming Soon)' : ''}
        </option>
      ))}
    </select>
  );
};