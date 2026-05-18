import React from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export interface TopbarProps {
  title: string

  showSearch?: boolean

  searchPlaceholder?: string

  searchSlot?: React.ReactNode

  actionsSlot?: React.ReactNode

  onMenuToggle?: () => void

  className?: string
}

export function Topbar({
  title,

  searchSlot,
  showSearch,
  actionsSlot,

  onMenuToggle,
  searchPlaceholder,
  className = '',
}: TopbarProps) {
  return (
    <header
      className={`border-border-secondary bg-bg-secondary sticky top-0 z-20 flex h-16 items-center justify-between border-b px-4 md:px-6 ${className} `}
    >
      {/* Left */}
      <div className="flex items-center gap-3 md:min-w-[200px]">
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-md p-2 transition-colors md:hidden"
        >
          <Bars3Icon className="size-5" />
        </button>

        {/* Title */}
        <h1 className="text-text-primary text-lg font-semibold">{title}</h1>
      </div>

      {/* Desktop Search */}
      {(showSearch || searchSlot) && (
        <div className="hidden flex-1 items-center px-6 md:flex md:justify-center">
          <div className="w-full max-w-xl">
            {searchSlot || (
              <div className="border-border-secondary bg-bg-secondary flex items-center gap-2 rounded-md border px-3 py-2">
                <MagnifyingGlassIcon className="text-text-tertiary size-4 shrink-0" />

                <input
                  placeholder={searchPlaceholder || 'Search...'}
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:min-w-[200px] md:justify-end">{actionsSlot}</div>
    </header>
  )
}

export default Topbar
