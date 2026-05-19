import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-md font-medium',
    'transition-all',
    'active:scale-[0.98]',
    'focus:outline-none',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-text-info text-bg-primary border border-border-info cursor-pointer hover:bg-text-info/70',

        secondary:
          'bg-bg-secondary text-text-primary border border-border-secondary cursor-pointer hover:bg-text-secondary/20',

        danger:
          'bg-bg-danger text-text-danger border border-border-danger cursor-pointer hover:bg-text-danger/20',

        warning:
          'bg-bg-warning text-text-warning border border-border-warning cursor-pointer hover:bg-text-warning/20',

        info: 'bg-bg-info text-text-info border border-border-info cursor-pointer',

        ghost:
          'bg-transparent rounded-md overflow-hidden text-text-secondary border border-transparent cursor-pointer',
      },

      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-3 text-base',
        sd: 'p-0 text-sm ',
      },

      fullWidth: {
        true: 'w-full',
      },

      textAlign: {
        left: 'justify-start text-left',
        center: 'justify-center text-center',
        right: 'justify-end text-right',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      textAlign: 'left',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  children: React.ReactNode

  isLoading?: boolean
  isDisabled?: boolean

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode

  testId?: string
}

export function Button({
  children,

  variant,
  size,
  fullWidth,

  className,

  isLoading = false,
  isDisabled = false,
  textAlign,
  leftIcon,
  rightIcon,

  testId,

  ...props
}: ButtonProps) {
  const disabled = isDisabled || isLoading

  return (
    <button
      className={button({
        variant,
        size,
        fullWidth,
        textAlign,
        className,
      })}
      disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {/* Left icon OR spinner */}
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}

      {/* Button content */}
      {children}

      {/* Right icon hidden during loading */}
      {!isLoading && rightIcon}
    </button>
  )
}
