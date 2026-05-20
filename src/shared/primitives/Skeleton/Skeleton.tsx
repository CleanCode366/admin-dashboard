import React from 'react'

import { cva } from 'class-variance-authority'

export interface SkeletonProps {
  variant?: 'text' | 'card' | 'avatar' | 'bar' | 'custom'

  width?: string | number

  height?: string | number

  lines?: number

  className?: string
}

const skeletonStyles = cva(
  `
    relative
    overflow-hidden
    rounded-md
    bg-bg-tertiary
    before:absolute
    before:inset-0
    before:-translate-x-full
    before:animate-[skeletonShimmer_1.8s_infinite]
    before:bg-gradient-to-r
    before:from-transparent
    before:via-bg-secondary
    before:to-transparent
  `,
  {
    variants: {
      variant: {
        text: 'h-4 w-full',

        card: `
          h-[160px]
          w-full
          rounded-xl
        `,

        avatar: 'rounded-full',

        bar: `
          h-2
          rounded-full
        `,

        custom: '',
      },
    },

    defaultVariants: {
      variant: 'text',
    },
  }
)

export function Skeleton({
  variant = 'text',

  width,

  height,

  lines = 1,

  className = '',
}: SkeletonProps) {
  if (variant === 'text') {
    return (
      <div className="space-y-2">
        {Array.from({
          length: lines,
        }).map((_, index) => (
          <div
            key={index}
            className={skeletonStyles({
              variant,
              className,
            })}
            style={{
              width: index === lines - 1 && lines > 1 ? '80%' : width,
              height,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={skeletonStyles({
        variant,
        className,
      })}
      style={{
        width: variant === 'avatar' ? width || 40 : width,

        height: variant === 'avatar' ? height || 40 : height,
      }}
    />
  )
}

export default Skeleton
