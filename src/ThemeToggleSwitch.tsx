import { useState, useRef, useEffect } from 'react'
import { useTheme } from '@/shared/theme/useTheme'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import type { ThemeName } from './shared/theme'

function ThemeToggleSwitch() {
  const { themeName, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (theme: string) => {
    if (theme === 'digital' || theme === 'monochrome') return // placeholder
    setTheme(theme as ThemeName)
    setOpen(false)
  }

  return (
    <div className="absolute relative top-4 left-4 inline-block" ref={ref}>
      {/* Toggle Button */}
      <button
        // onClick={() => setOpen((prev) => !prev)}
        className="bg-bg-secondary border-border-secondary text-text-secondary hover:bg-bg-tertiary flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition"
      >
        {themeName === 'dark' ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="bg-bg-secondary border-border-primary absolute right-0 z-50 mt-2 w-44 space-y-1 rounded-lg border p-1 shadow-md">
          {/* Light */}
          <button
            onClick={() => handleSelect('light')}
            className="text-text-primary hover:bg-bg-tertiary w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm transition"
          >
            Light
          </button>

          {/* Dark */}
          <button
            onClick={() => handleSelect('dark')}
            className="text-text-primary hover:bg-bg-tertiary w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm transition"
          >
            Dark
          </button>

          {/* Divider */}
          <div className="bg-border-tertiary my-1 h-px" />

          {/* Digital (disabled) */}
          <button
            disabled
            className="text-text-tertiary w-full cursor-not-allowed cursor-pointer rounded-md px-3 py-2 text-left text-sm"
          >
            Digital (coming soon)
          </button>

          {/* Monochrome (disabled) */}
          <button
            disabled
            className="text-text-tertiary w-full cursor-not-allowed cursor-pointer rounded-md px-3 py-2 text-left text-sm"
          >
            Monochrome (coming soon)
          </button>
        </div>
      )}
    </div>
  )
}

export default ThemeToggleSwitch
