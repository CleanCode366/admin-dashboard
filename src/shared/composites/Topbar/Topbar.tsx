import React, { useState } from 'react'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Input } from '@/shared/primitives/Input'

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
  searchPlaceholder,
  className = '',
}: TopbarProps) {
  const [searchQuery, overwriteSearchQuery] = useState('')
  return (
    <header
      className={`border-border-secondary bg-bg-secondary sticky top-0 z-20 flex h-16 items-center justify-between border-b px-4 md:px-6 ${className} `}
    >
      {/* Left */}
      <div className="flex items-center gap-3 md:min-w-[200px]">
        {/* In case logo chahiye */}
        {/* <button
          type="button"
          onClick={onMenuToggle}
          className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-md p-2 transition-colors md:hidden"
        ></button> */}

        {/* Title */}
        <h1 className="text-text-primary text-lg font-semibold">{title}</h1>
      </div>

      {/* Desktop Search */}
      {(showSearch || searchSlot) && (
        <div className="hidden flex-1 items-center px-6 md:flex md:justify-center">
          <div className="w-full max-w-xl">
            {searchSlot || (
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  overwriteSearchQuery(e)
                }}
                placeholder={searchPlaceholder || 'Search...'}
                prefixIcon={<MagnifyingGlassIcon className="text-text-tertiary size-4" />}
                suffixIcon={
                  searchQuery ? (
                    <button
                      type="button"
                      aria-label="Clear search"
                      onClick={() => {
                        overwriteSearchQuery('')
                      }}
                      className="text-text-tertiary hover:text-text-primary cursor-pointer transition-colors"
                    >
                      <XMarkIcon className="size-4" />
                    </button>
                  ) : null
                }
              />
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
