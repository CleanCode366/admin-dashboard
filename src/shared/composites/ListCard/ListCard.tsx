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

  className = '',

  testId,
}: ListCardProps) {
  return (
    <BaseCard className={className} testId={testId}>
      {/* Header Trigger */}
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={isClickable ? onToggle : undefined}
        disabled={!isClickable}
        className="focus-visible:ring-border-primary w-full cursor-pointer text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-default"
      >
        <div className="p-4">{header}</div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <>
          <div className="border-border-tertiary border-t p-4">{children}</div>

          {footer && (
            <div className="border-border-tertiary flex flex-wrap gap-2 border-t p-4">{footer}</div>
          )}
        </>
      )}
    </BaseCard>
  )
}

export default ListCard
