import React from 'react'
import { cva } from 'class-variance-authority'
import { Badge } from '../../primitives/Badge'
// import { NavLink } from 'react-router-dom'

const sidebarNavItem = cva(
  [
    'w-full',
    'flex items-center',
    'gap-3',

    'rounded-lg',

    'px-3 py-2',

    'transition-colors duration-150',

    'cursor-pointer',
    'select-none',

    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-border-info',

    'active:scale-[0.99]',
  ],
  {
    variants: {
      isActive: {
        true: ['bg-bg-tertiary', 'text-text-primary', 'font-medium'],

        false: [
          'bg-bg-secondary',
          'text-text-tertiary',
          'hover:bg-bg-secondary',
          'hover:text-text-primary',
        ],
      },
    },

    defaultVariants: {
      isActive: false,
    },
  }
)

export interface SidebarNavItemProps {
  link?: string

  label: string

  icon: React.ReactNode

  isActive?: boolean

  badge?: number | string

  badgeVariant?: 'danger' | 'info'

  className?: string

  onClick?: () => void
}

export function SidebarNavItem({
  label,
  icon,
  isActive = false,
  badge,
  badgeVariant = 'info',
  onClick,
  className,
}: SidebarNavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={sidebarNavItem({
        isActive,

        className: ` ${label ? 'justify-between' : 'justify-center'} ${className ?? ''} `,
      })}
    >
      {/* Left side */}
      <div className="flex min-w-0 items-center gap-3">
        <span className="shrink-0">{icon}</span>

        <span className="truncate">{label}</span>
      </div>

      {/* Badge */}
      {badge !== undefined && (
        <Badge size="sm" variant={badgeVariant === 'danger' ? 'danger' : 'info'}>
          {badge}
        </Badge>
      )}
    </button>
  )
}

export default SidebarNavItem
