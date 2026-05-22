import React from 'react'

import { Button } from '@/shared/primitives/Button'

export interface EmptyStateProps {
  icon?: React.ReactNode

  title: string

  description?: string

  action?: {
    label: string

    onClick: () => void
  }

  className?: string
}

export function EmptyState({
  icon,

  title,

  description,

  action,

  className = '',
}: EmptyStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex min-h-[400px] w-full flex-col items-center justify-center px-6 py-12 text-center ${className} `}
    >
      {/* Icon */}
      {icon && (
        <div className="text-text-tertiary mb-4 flex items-center justify-center">{icon}</div>
      )}

      {/* Title */}
      <h2 className="text-text-primary text-lg font-semibold">{title}</h2>

      {/* Description */}
      {description && (
        <p className="text-text-secondary mt-2 max-w-md text-sm leading-relaxed">{description}</p>
      )}

      {/* Action */}
      {action && (
        <div className="mt-6">
          <Button
            type="button"
            variant="primary"
            onClick={action.onClick}
            aria-label={action.label}
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}

export default EmptyState
