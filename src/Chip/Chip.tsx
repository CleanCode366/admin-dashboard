import React from 'react'

import { cva } from 'class-variance-authority'

import { XMarkIcon } from '@heroicons/react/24/solid'

const chipStyles = cva(
  `
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    px-4
    py-2
    text-sm
    transition-colors
    whitespace-nowrap
    select-none
    focus:outline-none
  `,
  {
    variants: {
      isSelected: {
        true: `
          bg-text-tertiary/20
          text-text-primary
          border-border-secondary
          font-medium
        `,

        false: `
          bg-transparent
          text-text-secondary
          border-border-tertiary
          font-normal
          hover:bg-bg-secondary
          hover:text-text-primary
        `,
      },

      isDisabled: {
        true: `
          opacity-50
          pointer-events-none
        `,

        false: `
          cursor-pointer
        `,
      },
    },

    defaultVariants: {
      isSelected: false,
      isDisabled: false,
    },
  }
)

export interface ChipProps {
  label: string

  isSelected?: boolean

  isDisabled?: boolean

  onSelect?: () => void

  onDismiss?: () => void

  count?: number

  className?: string
}

export function Chip({
  label,

  isSelected = false,

  isDisabled = false,

  onSelect,

  onDismiss,

  count,

  className = '',
}: ChipProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()

      onSelect?.()
    }
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      className={chipStyles({
        isSelected,
        isDisabled,
        className,
      })}
    >
      <span>{label}</span>

      {typeof count === 'number' && (
        <span className="bg-bg-tertiary text-text-secondary rounded-full px-2 py-0.5 text-xs">
          {count}
        </span>
      )}

      {onDismiss && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation()

            onDismiss()
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()

              e.stopPropagation()

              onDismiss()
            }
          }}
          className="text-text-secondary hover:text-text-primary flex items-center justify-center"
        >
          <XMarkIcon className="size-4" />
        </span>
      )}
    </button>
  )
}

export default Chip
