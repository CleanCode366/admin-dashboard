import React from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'

export interface TopbarProps {
  title: string

  searchSlot?: React.ReactNode

  actionsSlot?: React.ReactNode

  onMenuToggle?: () => void

  className?: string
}

export function Topbar({
  title,

  searchSlot,

  actionsSlot,

  onMenuToggle,

  className = '',
}: TopbarProps) {
  return (
    <header
      className={`border-border-tertiary bg-bg-secondary sticky top-0 z-20 flex h-16 items-center justify-between border-b px-4 md:px-6 ${className} `}
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
      {searchSlot && (
        <div className="hidden flex-1 px-6 md:flex md:justify-center">
          <div className="w-full max-w-xl">{searchSlot}</div>
        </div>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:min-w-[200px] md:justify-end">{actionsSlot}</div>
    </header>
  )
}

export default Topbar
