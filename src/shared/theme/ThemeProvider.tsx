import { useLayoutEffect } from 'react'
import { themeRegistry } from './themeRegistry'
import { useThemeStore } from './themeStore'

const applyTokens = (tokens: object, prefix = '') => {
  const root = document.documentElement

  Object.entries(tokens).forEach(([key, value]) => {
    const newPrefix = prefix ? `${prefix}-${key}` : key

    if (typeof value === 'object' && value !== null) {
      applyTokens(value, newPrefix)
    } else if (typeof value === 'string') {
      root.style.setProperty(`--${newPrefix}`, value)
    }
  })
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeName = useThemeStore((s) => s.themeName)

  useLayoutEffect(() => {
    const resolvedTheme = themeRegistry[themeName] ?? themeRegistry.light

    document.documentElement.setAttribute('data-theme', resolvedTheme.name)

    applyTokens(resolvedTheme.tokens)

    document.documentElement.setAttribute('data-theme-loaded', 'true')
  }, [themeName])

  return children
}
