import { cva, type VariantProps } from 'class-variance-authority'

const progressTrack = cva(
  `
    relative
    overflow-hidden
    rounded-full
    bg-bg-secondary
    border
    border-border-secondary
  `,
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-2',
        md: 'h-3',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
)

const progressFill = cva(
  `
    h-full
    rounded-full
    transition-[width]
    duration-300
    ease-in-out
    relative
    overflow-hidden
  `,
  {
    variants: {
      variant: {
        success: 'bg-text-success',

        warning: 'bg-text-warning',

        danger: 'bg-text-danger',

        info: 'bg-text-info',
      },

      animated: {
        true: `
                        before:absolute
                        before:inset-0
                        before:bg-[length:200%_100%]
                        before:bg-gradient-to-r
                        before:from-transparent
                        before:via-white/40
                        before:to-transparent
                        before:animate-[shimmer_1.6s_linear_infinite]
                        `,

        false: '',
      },
    },
  }
)

export interface ProgressBarProps extends VariantProps<typeof progressTrack> {
  value: number

  variant?: 'auto' | 'danger' | 'warning' | 'success' | 'info'

  label?: string

  showValue?: boolean

  animated?: boolean

  className?: string

  scoreLabel?: string
}

const resolveAutoVariant = (value: number): 'danger' | 'warning' | 'success' => {
  if (value >= 0.85) {
    return 'danger'
  }

  if (value >= 0.6) {
    return 'warning'
  }

  return 'success'
}

export function ProgressBar({
  value,

  variant = 'auto',

  size,

  label,

  scoreLabel,

  showValue = false,

  animated = false,

  className = '',
}: ProgressBarProps) {
  const safeValue = Math.min(Math.max(value, 0), 1)

  const resolvedVariant = variant === 'auto' ? resolveAutoVariant(safeValue) : variant

  const percentage = safeValue * 100

  if (scoreLabel) {
    return (
      <div className={`flex w-full items-center gap-3 ${className} `}>
        <span className="text-text-secondary text-xs whitespace-nowrap">{scoreLabel}</span>

        <div className="flex-1">
          <div
            className={progressTrack({
              size,
            })}
          >
            <div
              className={progressFill({
                variant: resolvedVariant,

                animated,
              })}
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </div>

        <span className="text-text-primary min-w-[40px] text-right text-xs font-medium">
          {safeValue.toFixed(2)}
        </span>
      </div>
    )
  }

  return (
    <div className={`w-full space-y-1 ${className} `}>
      {(label || showValue) && (
        <div className="text-text-secondary flex items-center justify-between text-xs">
          <span>{label}</span>

          {showValue && <span>{percentage.toFixed(0)}%</span>}
        </div>
      )}

      <div
        className={progressTrack({
          size,
        })}
      >
        <div
          className={progressFill({
            variant: resolvedVariant,

            animated,
          })}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
