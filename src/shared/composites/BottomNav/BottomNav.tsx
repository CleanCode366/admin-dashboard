import React from 'react'

import BottomNavItem from '../BottomNavItem'

export interface BottomNavItemConfig {
  label: string

  route: string

  icon: React.ReactNode

  badge?: number

  badgeVariant?: 'danger' | 'info' | 'success' | 'warning'
}

export interface BottomNavProps {
  items: BottomNavItemConfig[]

  activeRoute: string

  onNavigate: (route: string) => void

  className?: string
}

export function BottomNav({ items, activeRoute, onNavigate, className = '' }: BottomNavProps) {
  return (
    <nav
      aria-label="Mobile navigation"
      className={`bg-bg-primary border-border-tertiary fixed right-0 bottom-0 left-0 z-40 border-t px-2 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] md:hidden ${className} `}
    >
      <div className="flex items-center justify-between gap-1">
        {items.map((item) => (
          <BottomNavItem
            key={item.route}
            label={item.label}
            icon={item.icon}
            badge={item.badge}
            badgeVariant={item.badgeVariant}
            isActive={activeRoute === item.route}
            onClick={() => {
              onNavigate(item.route)
            }}
          />
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
