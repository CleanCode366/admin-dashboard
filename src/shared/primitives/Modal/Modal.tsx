import { useEffect, useRef } from 'react'

import { createPortal } from 'react-dom'

import { XMarkIcon } from '@heroicons/react/24/outline'

import { cva } from 'class-variance-authority'

export interface ModalProps {
  isOpen: boolean

  onClose: () => void

  title?: string

  children: React.ReactNode

  footer?: React.ReactNode

  size?: 'sm' | 'md' | 'lg'

  closeOnBackdrop?: boolean

  className?: string

  testId?: string
}

const modalStyles = cva(
  `
    bg-bg-secondary
    border-border-secondary
    text-text-primary
    relative
    w-full
    rounded-xl
    border
    shadow-xl
    transition-all
    duration-200
    animate-in
    fade-in
    zoom-in-95
  `,
  {
    variants: {
      size: {
        sm: 'max-w-sm',

        md: 'max-w-lg',

        lg: 'max-w-2xl',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
)

export function Modal({
  isOpen,

  onClose,

  title,

  children,

  footer,

  size = 'md',

  closeOnBackdrop = true,

  className = '',

  testId,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    document.body.style.overflow = 'hidden'

    dialogRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleEscape)

      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      aria-hidden={false}
    >
      <button
        type="button"
        aria-label="Close modal backdrop"
        className="absolute inset-0 cursor-default"
        onClick={() => {
          if (closeOnBackdrop) {
            onClose()
          }
        }}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        data-testid={testId}
        className={modalStyles({
          size,
          className,
        })}
      >
        {/* Header */}
        <div className="border-border-secondary flex items-center justify-between border-b px-5 py-4">
          {title && (
            <h2 id="modal-title" className="text-lg font-semibold">
              {title}
            </h2>
          )}

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors"
          >
            <XMarkIcon className="size-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="border-border-secondary flex flex-wrap justify-end gap-2 border-t px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

export default Modal
