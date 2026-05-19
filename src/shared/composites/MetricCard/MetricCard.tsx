import { BaseCard } from '@/shared/primitives/BaseCard'

import { cva } from 'class-variance-authority'

const valueStyles = cva(
  `
    text-[22px]
    leading-none
    font-medium
  `,
  {
    variants: {
      valueColor: {
        default: 'text-text-primary',

        danger: 'text-text-danger',

        warning: 'text-text-warning',

        success: 'text-text-success',
      },
    },

    defaultVariants: {
      valueColor: 'default',
    },
  }
)

export interface MetricCardProps {
  label: string

  value: string | number

  subLabel?: string

  valueColor?: 'default' | 'danger' | 'warning' | 'success'

  className?: string
}

export function MetricCard({
  label,

  value,

  subLabel,

  valueColor = 'default',
}: MetricCardProps) {
  return (
    <BaseCard padding="md">
      <div className="flex min-h-[72px] flex-col justify-between">
        <div className="text-text-secondary text-[10px] tracking-wider uppercase">{label}</div>

        <div className="">
          <div
            className={valueStyles({
              valueColor,
            })}
          >
            {value}
          </div>

          {subLabel && <div className="text-text-secondary mt-1 text-[10px]">{subLabel}</div>}
        </div>
      </div>
    </BaseCard>
  )
}

export default MetricCard
