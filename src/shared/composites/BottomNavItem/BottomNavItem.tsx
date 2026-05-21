import React from 'react'

import { cva } from 'class-variance-authority'

import { Badge } from '@/shared/primitives/Badge'

const bottomNavItem = cva(
  `
    relative
    flex
    flex-1
    flex-col
    items-center
    justify-center
    gap-1
    rounded-lg
    px-2
    py-2
    transition-colors
    duration-150
    select-none
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-border-info
    active:scale-[0.98]
  `,
  {
    variants: {
      isActive: {
        true: `
          text-text-primary
          font-medium
        `,

        false: `
          text-text-tertiary
          hover:text-text-primary
        `,
      },
    },

    defaultVariants: {
      isActive: false,
    },
  }
)

export interface BottomNavItemProps {
  label: string

  icon: React.ReactNode

  isActive?: boolean

  badge?: number

  badgeVariant?: 'danger' | 'info'

  onClick?: () => void

  className?: string
}

export function BottomNavItem({
  label,
  icon,
  isActive = false,
  badge,
  badgeVariant = 'info',
  onClick,
  className,
}: BottomNavItemProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? 'page' : undefined}
      aria-label={label}
      onClick={onClick}
      className={bottomNavItem({
        isActive,
        className,
      })}
    >
      {/* Icon + Badge */}
      <div className="relative flex items-center justify-center">
        <span className="shrink-0">{icon}</span>

        {badge !== undefined && badge > 0 && (
          <Badge
            size="xs"
            notification
            variant={badgeVariant === 'danger' ? 'danger' : 'info'}
            className="absolute -top-2 -right-3"
          >
            {badge}
          </Badge>
        )}
      </div>

      {/* Label */}
      <span className="max-w-full truncate text-[11px] leading-none">{label}</span>
    </button>
  )
}

export default BottomNavItem
