import React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

const baseCardStyles = cva(
  `
    w-full
    rounded-xl
    border
    transition-colors
  `,
  {
    variants: {
      variant: {
        default: `
          border-border-secondary
          bg-bg-secondary
        `,

        danger: `
          border-border-danger
          bg-bg-danger
        `,

        warning: `
          border-border-warning
          bg-bg-warning
        `,

        success: `
          border-border-success
          bg-bg-success
        `,

        info: `
          border-border-info
          bg-bg-info
        `,
      },

      padding: {
        none: '',

        sm: 'p-3',

        md: 'p-4',

        lg: 'p-6',
      },
    },

    defaultVariants: {
      variant: 'default',

      padding: 'md',
    },
  }
)

export interface BaseCardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof baseCardStyles> {
  children: React.ReactNode

  testId?: string
}

export function BaseCard({
  children,

  variant,

  padding,

  className = '',

  testId,

  ...props
}: BaseCardProps) {
  return (
    <div
      data-testid={testId}
      className={baseCardStyles({
        variant,

        padding,

        className,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export default BaseCard
