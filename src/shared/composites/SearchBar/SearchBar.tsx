import { useEffect, useState } from 'react'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Input } from '@/shared/primitives/Input'

SearchBar.Icon = function SearchIcon() {
  return <MagnifyingGlassIcon className="size-5" />
}
export interface SearchBarProps {
  value?: string

  onSearch?: (query: string) => void

  placeholder?: string

  debounceMs?: number

  autoFocus?: boolean

  className?: string

  label?: string
}

export function SearchBar({
  value = '',

  onSearch,

  placeholder = 'Search...',

  debounceMs = 300,

  // autoFocus = false,

  className = '',

  label,
  // onSearch={fetchReports} in case API call se search karte hai

  // useSearchParams()  in case search param use karte hai

  // filtersSlot?: ReactNode filters ke liye
}: SearchBarProps) {
  const [query, setQuery] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(query)
    }, debounceMs)

    return () => {
      clearTimeout(timer)
    }
  }, [query, debounceMs, onSearch])

  return (
    <Input
      type="search"
      label={label}
      value={query}
      onChange={setQuery}
      placeholder={placeholder}
      autoComplete="off"
      // autoFocus={autoFocus}
      className={className}
      prefixIcon={<MagnifyingGlassIcon className="text-text-tertiary size-4" />}
      suffixIcon={
        query ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery('')
            }}
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            <XMarkIcon className="size-4" />
          </button>
        ) : null
      }
    />
  )
}

export default SearchBar
