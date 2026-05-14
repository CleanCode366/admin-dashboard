import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const badge = cva(
  'inline-flex items-center justify-center gap-1 font-medium rounded-full border transition-opacity',
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
        xs: `
  min-w-4
  h-4
  px-1
  text-[10px]
`,

        sm: `
  min-w-6
  h-6
  px-2
  text-xs
`,

        md: `
  min-w-7
  h-7
  px-3
  text-sm
`,
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
  notification?: boolean
}

export function Badge({
  children,
  variant,
  size,
  notification = false,
  className,
  ...props
}: BadgeProps) {
  const formattedChildren = typeof children === 'number' && children > 99 ? '99+' : children
  return (
    <span
      className={badge({
        variant,
        size,
        className: ` ${
          notification
            ? `inline-flex aspect-square items-center justify-center rounded-full p-0 leading-none font-semibold`
            : ''
        } ${className ?? ''} `,
      })}
      {...props}
    >
      {formattedChildren}
    </span>
  )
}
