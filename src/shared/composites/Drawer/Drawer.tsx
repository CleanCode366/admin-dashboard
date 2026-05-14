import { useEffect, useMemo, useRef } from 'react'

import { createPortal } from 'react-dom'

import { XMarkIcon } from '@heroicons/react/24/outline'

import { cva } from 'class-variance-authority'

export interface DrawerProps {
  isOpen: boolean

  onClose: () => void

  title?: string

  children: React.ReactNode

  footer?: React.ReactNode

  side?: 'left' | 'right' | 'bottom'

  size?: 'sm' | 'md' | 'lg'

  isDismissable?: boolean

  className?: string
}

const drawerStyles = cva(
  `
    fixed
    z-50
    bg-bg-primary
    border-border-secondary
    shadow-md
    transition-transform
    duration-300
    flex
    flex-col
  `,
  {
    variants: {
      side: {
        left: `
          left-0
          top-0
          h-screen
          border-r
        `,

        right: `
          right-0
          top-0
          h-screen
          border-l
        `,

        bottom: `
          bottom-0
          left-0
          w-full
          border-t
          rounded-t-xl
        `,
      },

      size: {
        sm: '',

        md: '',

        lg: '',
      },

      open: {
        true: '',

        false: '',
      },
    },

    compoundVariants: [
      // LEFT
      {
        side: 'left',
        size: 'sm',
        className: 'w-[320px]',
      },

      {
        side: 'left',
        size: 'md',
        className: 'w-[480px]',
      },

      {
        side: 'left',
        size: 'lg',
        className: 'w-[640px]',
      },

      // RIGHT
      {
        side: 'right',
        size: 'sm',
        className: 'w-[320px]',
      },

      {
        side: 'right',
        size: 'md',
        className: 'w-[480px]',
      },

      {
        side: 'right',
        size: 'lg',
        className: 'w-[640px]',
      },

      // BOTTOM
      {
        side: 'bottom',
        size: 'sm',
        className: 'h-[40vh]',
      },

      {
        side: 'bottom',
        size: 'md',
        className: 'h-[60vh]',
      },

      {
        side: 'bottom',
        size: 'lg',
        className: 'h-[90vh]',
      },

      // CLOSED STATES
      {
        side: 'left',
        open: false,
        className: '-translate-x-full',
      },

      {
        side: 'right',
        open: false,
        className: 'translate-x-full',
      },

      {
        side: 'bottom',
        open: false,
        className: 'translate-y-full',
      },

      // OPEN
      {
        open: true,
        className: 'translate-x-0 translate-y-0',
      },
    ],

    defaultVariants: {
      side: 'right',

      size: 'md',

      open: false,
    },
  }
)

export function Drawer({
  isOpen,

  onClose,

  title,

  children,

  footer,

  side = 'right',

  size = 'md',

  isDismissable = true,

  className = '',
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)

  const isMobile = window.innerWidth < 768

  const resolvedSide = useMemo(() => {
    if (isMobile && side === 'right') {
      return 'bottom'
    }

    return side
  }, [isMobile, side])

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isDismissable) {
      return
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, isDismissable, onClose])

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close drawer overlay"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => {
          if (isDismissable) {
            onClose()
          }
        }}
      />{' '}
      {/* Drawer */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        className={drawerStyles({
          side: resolvedSide,

          size,

          open: isOpen,

          className,
        })}
      >
        {/* Header */}
        <div className="border-border-secondary flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-text-primary text-lg font-medium">{title}</h2>

          {isDismissable && (
            <button
              type="button"
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors"
            >
              <XMarkIcon className="size-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="border-border-secondary bg-bg-primary sticky bottom-0 border-t px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </>,
    document.body
  )
}

export default Drawer
