import { useMemo, useState } from 'react'

import { cva } from 'class-variance-authority'

export interface AvatarProps {
  name: string

  src?: string

  size?: 'xs' | 'sm' | 'md' | 'lg'

  showOnline?: boolean

  className?: string
}

const avatar = cva(
  `
    relative
    inline-flex
    items-center
    justify-center
    rounded-md
    select-none
    shrink-0
    font-medium
  `,
  {
    variants: {
      size: {
        xs: 'w-5 h-5 text-[9px]',
        sm: 'w-7 h-7 text-xs',
        md: 'w-9 h-9 text-sm ',
        lg: 'w-12 h-12 text-base',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
)

const onlineDot = cva(
  `
    absolute
    rounded-full
    border-2
    border-bg-primary
    bg-text-success
    
  `,
  {
    variants: {
      size: {
        xs: 'w-1.5 h-1.5 bottom-0 right-0',
        sm: 'w-2 h-2 bottom-0 right-0',
        md: 'w-2.5 h-2.5 bottom-0 right-0',
        lg: 'w-3 h-3 bottom-0.5 right-0.5',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
)

const fallbackPalette = [
  'bg-bg-info text-text-info border border-border-info',
  'bg-bg-warning text-text-warning border border-border-warning',
  'bg-bg-success text-text-success border border-border-success',
]

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)

  if (parts.length === 1) {
    return parts[0]?.[0]?.toUpperCase() ?? '?'
  }

  return ((parts[0]?.[0] ?? '') + (parts[parts.length - 1]?.[0] ?? '')).toUpperCase()
}

export function Avatar({
  name,
  src,
  size = 'md',
  showOnline = false,
  className = '',
}: AvatarProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  const initials = useMemo(() => getInitials(name), [name])

  const fallbackColor = useMemo(() => {
    const index = name.charCodeAt(0) % fallbackPalette.length

    return fallbackPalette[index]
  }, [name])

  const showImage = Boolean(src) && failedSrc !== src

  return (
    <div
      className={avatar({
        size,
        className,
      })}
      aria-label={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full rounded-md object-cover"
          onError={() => {
            if (src) {
              setFailedSrc(src)
            }
          }}
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center rounded-md ${fallbackColor} `}
        >
          {initials}
        </div>
      )}

      {showOnline && <span className={onlineDot({ size })} />}
    </div>
  )
}

export default Avatar
