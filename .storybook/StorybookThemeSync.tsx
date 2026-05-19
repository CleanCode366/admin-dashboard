import { useThemeStore } from '../src/shared/theme/themeStore'
import { useEffect } from 'react'

const THEMES = {
  light: '#f5f5f5',
  dark: '#111827',
}

export function StorybookThemeSync({
  theme,
  children,
}: {
  theme: 'light' | 'dark'
  children: React.ReactNode
}) {
  const setTheme = useThemeStore((s) => s.setTheme)

  useEffect(() => {
    setTheme(theme)

    document.body.style.background = THEMES[theme]
  }, [theme, setTheme])

  return <>{children}</>
}
