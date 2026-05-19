import React, { useId } from 'react'

import { cva } from 'class-variance-authority'

export interface InputProps {
  label?: string

  placeholder?: string

  value: string

  onChange: (value: string) => void

  type?: 'text' | 'email' | 'password' | 'search' | 'number'

  error?: string | null

  helperText?: string

  prefixIcon?: React.ReactNode

  suffixIcon?: React.ReactNode

  isDisabled?: boolean

  isReadOnly?: boolean

  autoComplete?: string

  testId?: string

  className?: string
}

const inputStyles = cva(
  `
    w-full
    rounded-md
    border
    bg-bg-secondary
    py-2
    text-sm
    text-text-primary
    transition-colors
    outline-none
    placeholder:text-text-tertiary
  `,
  {
    variants: {
      hasError: {
        true: `
          border-border-danger
          focus:border-border-danger
        `,

        false: `
          border-border-secondary
          focus:border-border-primary
          focus:ring-0
          focus:outline-none
        `,
      },

      disabled: {
        true: `
          cursor-not-allowed
          opacity-50
          disabled:pointer-events-none
        `,

        false: '',
      },

      hasPrefix: {
        true: 'pl-10',

        false: 'pl-3',
      },

      hasSuffix: {
        true: 'pr-10',

        false: 'pr-3',
      },
    },

    defaultVariants: {
      hasError: false,
      disabled: false,
      hasPrefix: false,
      hasSuffix: false,
    },
  }
)

export function Input({
  label,

  placeholder,

  value,

  onChange,

  type = 'text',

  error = null,

  helperText,

  prefixIcon,

  suffixIcon,

  isDisabled = false,

  isReadOnly = false,

  autoComplete,

  testId,

  className = '',
}: InputProps) {
  const id = useId()

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-text-primary text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative w-full">
        {prefixIcon && (
          <div
            className={`text-text-tertiary pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 transition-opacity ${
              isDisabled ? 'opacity-50' : ''
            } `}
          >
            {prefixIcon}
          </div>
        )}

        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          autoComplete={autoComplete}
          data-testid={testId}
          aria-invalid={Boolean(error)}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          className={inputStyles({
            hasError: Boolean(error),
            disabled: isDisabled,
            hasPrefix: Boolean(prefixIcon),
            hasSuffix: Boolean(suffixIcon),
            className,
          })}
        />

        {suffixIcon && (
          <div
            className={`text-text-tertiary absolute top-1/2 right-3 -translate-y-1/2 transition-opacity ${
              isDisabled ? 'opacity-50' : ''
            } `}
          >
            {suffixIcon}
          </div>
        )}
      </div>

      {error ? (
        <p className="text-text-danger text-xs">{error}</p>
      ) : helperText ? (
        <p className="text-text-secondary text-xs">{helperText}</p>
      ) : null}
    </div>
  )
}

export default Input
