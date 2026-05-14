import React from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'

import { Tooltip } from '@/shared/primitives/Tooltip'

import { SidebarNavItem } from '@/shared/composites/SidebarNavItem'

import { cva } from 'class-variance-authority'
import { Badge } from '@/shared/primitives/Badge'

export interface SidebarNavLink {
  label: string

  icon: React.ReactNode

  isActive?: boolean

  badge?: number | string

  badgeVariant?: 'danger' | 'info'

  onClick?: () => void
}

export interface SidebarNavProps {
  items: SidebarNavLink[]

  collapsed?: boolean

  onToggle?: () => void

  className?: string

  onClick?: () => void
}

const sidebarStyles = cva(
  `
    flex
    h-screen
    flex-col
    border-r
    border-border-secondary
    bg-bg-secondary
    transition-all
    duration-300
  `,
  {
    variants: {
      collapsed: {
        true: 'w-[72px]',
        false: 'w-64',
      },
    },

    defaultVariants: {
      collapsed: false,
    },
  }
)

export function SidebarNav({
  items,

  collapsed = false,

  onToggle,

  // className,
}: SidebarNavProps) {
  const classes = ' fixed left-0 top-0 h-screen z-30'
  return (
    <aside
      className={sidebarStyles({
        collapsed,

        className: classes,
      })}
    >
      {/* Header */}
      <div className="border-border-secondary flex items-center justify-between border-b px-4 py-4">
        {!collapsed && (
          <div className="flex flex-col">
            <h2 className="text-text-primary text-lg font-semibold">ModerationOS</h2>
            <span className="text-xs">Admin Panel</span>
          </div>
        )}

        <button
          type="button"
          onClick={onToggle}
          className="text-text-secondary hover:bg-bg-tertiary hover:text-text-primary cursor-pointer rounded-md p-2 transition-colors"
        >
          <Bars3Icon className="size-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-3">
        {items.map((item) => {
          const navItem = (
            <SidebarNavItem
              key={item.label}
              label={collapsed ? '' : item.label}
              icon={
                <div className="relative">
                  {item.icon}

                  {collapsed && item.badge && (
                    <div className="absolute -top-3 -right-4">
                      <Badge variant={item.badgeVariant} size="xs" notification>
                        {item.badge}
                      </Badge>
                    </div>
                  )}
                </div>
              }
              isActive={item.isActive}
              badge={collapsed ? undefined : item.badge}
              badgeVariant={item.badgeVariant}
              onClick={item.onClick}
              className={
                collapsed ? 'hover:bg-bg-tertiary justify-center px-0' : 'hover:bg-bg-tertiary'
              }
            />
          )

          if (collapsed) {
            return (
              <Tooltip key={item.label} content={item.label} position="right" offset={20}>
                {navItem}
              </Tooltip>
            )
          }

          return navItem
        })}
      </nav>
    </aside>
  )
}

export default SidebarNav
