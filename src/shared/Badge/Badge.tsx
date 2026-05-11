import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const badge = cva(
  'inline-flex items-center gap-1 font-medium rounded-full border transition-opacity',
  {
    variants: {
      variant: {
        default: 'bg-bg-secondary text-text-secondary border-border-secondary',

        warning: 'bg-bg-warning text-text-warning border-border-warning',

        danger: 'bg-bg-danger text-text-danger border-border-danger',

        success: 'bg-bg-success text-text-success border-border-success',

        pending: 'bg-bg-warning text-text-warning border-border-warning',

        escalated: 'bg-bg-danger text-text-danger border-border-danger',

        resolved: 'bg-bg-success text-text-success border-border-success',

        dismissed: 'bg-bg-secondary text-text-tertiary border-border-secondary',

        info: 'bg-bg-info text-text-info border-border-info',
      },

      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {
  children?: React.ReactNode
  dot?: boolean
}

export function Badge({ children, variant, size, dot = false, className, ...props }: BadgeProps) {
  const dotSize = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'

  return (
    <span
      className={badge({
        variant,
        size,
        className,
      })}
      {...props}
    >
      {dot ? <span className={`${dotSize} rounded-full bg-current`} /> : children}
    </span>
  )
}
