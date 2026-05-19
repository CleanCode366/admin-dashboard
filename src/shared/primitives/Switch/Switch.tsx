import React from 'react'

import { cva } from 'class-variance-authority'

export interface SwitchProps {
  checked: boolean

  onChange?: (checked: boolean) => void

  disabled?: boolean

  className?: string

  size?: 'sm' | 'md'

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const switchTrack = cva(
  `
    relative
    inline-flex
    shrink-0
    cursor-pointer
    rounded-full
    border
    transition-colors
    duration-200
    focus:outline-none
  `,
  {
    variants: {
      size: {
        sm: 'h-5 w-9',

        md: 'h-6 w-11',
      },

      checked: {
        true: `
          bg-bg-secondary
          border-border-secondary
        `,

        false: `
          bg-bg-tertiary
          border-border-secondary
        `,
      },

      disabled: {
        true: `
          cursor-not-allowed
          opacity-50
        `,

        false: '',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
)

const switchThumb = cva(
  `
    pointer-events-none
    inline-block
    transform
    rounded-full
    bg-white
    shadow-sm
    ring-0
    transition-transform
    duration-200
  `,
  {
    variants: {
      size: {
        sm: `
          h-4
          w-4
        `,

        md: `
          h-5
          w-5
        `,
      },

      checked: {
        true: '',

        false: '',
      },
    },

    compoundVariants: [
      {
        checked: true,
        size: 'sm',
        className: 'translate-x-[17px] translate-y-[1px]',
      },

      {
        checked: false,
        size: 'sm',
        className: 'translate-x-[1px] translate-y-[1px]',
      },

      {
        checked: true,
        size: 'md',
        className: 'translate-x-5 translate-y-0.25',
      },

      {
        checked: false,
        size: 'md',
        className: 'translate-x-0.5 translate-y-0.25',
      },
    ],

    defaultVariants: {
      size: 'md',
    },
  }
)

export function Switch({
  checked,
  onChange,
  disabled = false,
  className = 'ml-auto',
  size = 'md',
  onClick,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return

        onClick?.(e)

        onChange?.(!checked)
      }}
      className={switchTrack({
        checked,
        disabled,
        size,
        className,
      })}
    >
      <span
        className={switchThumb({
          checked,
          size,
        })}
      />
    </button>
  )
}

export default Switch
