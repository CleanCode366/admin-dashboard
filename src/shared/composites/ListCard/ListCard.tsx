import React from 'react'

import { BaseCard } from '@/shared/primitives/BaseCard'
// import { Button } from '@/stories/Button'

export interface ListCardProps {
  children: React.ReactNode

  header: React.ReactNode

  footer?: React.ReactNode

  isClickable?: boolean

  isExpanded?: boolean

  onToggle?: () => void

  className?: string

  testId?: string
}

export function ListCard({
  children,

  header,

  footer,

  isClickable = false,

  isExpanded = false,

  onToggle,

  className = 'cursor-pointer',
}: ListCardProps) {
  const handleToggle = () => {
    if (!isClickable || !onToggle) {
      return
    }

    onToggle()
  }

  return (
    <BaseCard className={className}>
      <div
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onClick={isClickable ? handleToggle : undefined}
        onKeyDown={(e) => {
          if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()

            handleToggle()
          }
        }}
        className="outline-none"
      >
        <div className="p-4">{header}</div>

        {isExpanded && (
          <>
            <div className="border-border-tertiary border-t p-4">{children}</div>
            <div className="flex gap-3">{footer}</div>
          </>
        )}
      </div>
    </BaseCard>
  )
}

export default ListCard
