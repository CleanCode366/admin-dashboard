import React from 'react'

import { BaseCard } from '@/shared/primitives/BaseCard'

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
}: ListCardProps) {
  const handleToggle = () => {
    if (!isClickable || !onToggle) {
      return
    }

    onToggle()
  }

  return (
    <BaseCard
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()

          handleToggle()
        }
      }}
      onClick={handleToggle}
    >
      <div className="p-4">{header}</div>

      {isExpanded && (
        <>
          <div className="border-border-tertiary border-t p-4">{children}</div>

          {footer && (
            <div
              onClickCapture={(e) => e.stopPropagation()}
              className="border-border-tertiary flex flex-wrap gap-2 border-t p-4"
            >
              {footer}
            </div>
          )}
        </>
      )}
    </BaseCard>
  )
}

export default ListCard
