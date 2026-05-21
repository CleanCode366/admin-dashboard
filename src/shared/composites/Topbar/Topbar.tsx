import React, { useState } from 'react'
import { Modal } from '@/shared/primitives/Modal'
import SearchBar from '../SearchBar/SearchBar'

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
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  return (
    <>
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
            <div className="w-full max-w-xl" role="search">
              {searchSlot || (
                <SearchBar
                  placeholder={searchPlaceholder}
                  onSearch={(query) => {
                    console.log(query)
                  }}
                />
              )}
            </div>
          </div>
        )}
        {/* Right Actions */}
        <div className="flex items-center gap-2 md:min-w-[200px] md:justify-end">
          {(showSearch || searchSlot) && (
            <button
              type="button"
              aria-label="Open search"
              onClick={() => {
                setMobileSearchOpen(true)
              }}
              className="text-text-secondary hover:bg-bg-tertiary hover:text-text-primary rounded-md p-2 transition-colors md:hidden"
            >
              <SearchBar.Icon />
            </button>
          )}

          {actionsSlot}
        </div>
      </header>
      <Modal
        isOpen={mobileSearchOpen}
        onClose={() => {
          setMobileSearchOpen(false)
        }}
        title="Search"
        size="sm"
      >
        <div role="search" aria-label="Mobile report search">
          <SearchBar
            // autoFocus
            placeholder={searchPlaceholder}
            onSearch={(query) => {
              console.log(query)
            }}
          />
        </div>
      </Modal>
    </>
  )
}

export default Topbar
