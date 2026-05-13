import { cva } from 'class-variance-authority'

export interface SwitchProps {
  checked: boolean

  onChange?: (checked: boolean) => void

  disabled?: boolean

  className?: string

  onClick?: () => void
}

const switchTrack = cva(
  `
    relative
    inline-flex
    h-6
    w-11
    shrink-0
    cursor-pointer
    rounded-full
    border
    transition-colors
    duration-200
    focus:outline-none
  `,
  {
    variants: {
      checked: {
        true: `
          bg-bg-secondary
          border-border-secondary
        `,

        false: `
          bg-bg-tertiary
          border-border-secondary
        `,
      },

      disabled: {
        true: `
          opacity-50
          cursor-not-allowed
        `,

        false: '',
      },
    },
  }
)

const switchThumb = cva(
  `
    pointer-events-none
    inline-block
    h-5
    w-5
    transform
    rounded-full
    bg-white
    shadow-sm
    ring-0
    transition-transform
    duration-200
  `,
  {
    variants: {
      checked: {
        true: 'translate-x-5 translate-y-0.25',
        false: 'translate-x-0.5 translate-y-0.25',
      },
    },
  }
)

export function Switch({ checked, onChange, disabled = false, className = '' }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => {
        if (disabled) return

        onChange?.(!checked)
      }}
      className={switchTrack({
        checked,
        disabled,
        className,
      })}
    >
      <span
        className={switchThumb({
          checked,
        })}
      />
    </button>
  )
}

export default Switch
