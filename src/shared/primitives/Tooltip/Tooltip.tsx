import { type ReactNode, useEffect, useRef, useState } from 'react'

import { createPortal } from 'react-dom'

export interface TooltipProps {
  content: string

  children: ReactNode

  position?: 'top' | 'bottom' | 'left' | 'right'

  delay?: number

  className?: string

  offset?: number
}

const arrowClasses = {
  top: `
    border-l-[6px] border-r-[6px] border-t-[6px]
    border-l-transparent
    border-r-transparent
    border-t-bg-secondary
  `,

  bottom: `
    border-l-[6px] border-r-[6px] border-b-[6px]
    border-l-transparent
    border-r-transparent
    border-b-bg-secondary
  `,

  left: `
    border-t-[6px] border-b-[6px] border-l-[6px]
    border-t-transparent
    border-b-transparent
    border-l-bg-secondary
  `,

  right: `
    border-t-[6px] border-b-[6px] border-r-[6px]
    border-t-transparent
    border-b-transparent
    border-r-bg-secondary
  `,
}

const arrowPositionClasses = {
  top: `
    top-full
    left-1/2
    -translate-x-1/2
  `,

  bottom: `
    bottom-full
    left-1/2
    -translate-x-1/2
  `,

  left: `
    left-full
    top-1/2
    -translate-y-1/2
  `,

  right: `
    right-full
    top-1/2
    -translate-y-1/2
  `,
}

export function Tooltip({
  content,
  children,

  position = 'top',

  delay = 400,
  offset = 10,
  className = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false)

  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
  })

  const triggerRef = useRef<HTMLDivElement>(null)

  const timeoutRef = useRef<number | null>(null)

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => {
      if (!triggerRef.current) return

      const rect = triggerRef.current.getBoundingClientRect()

      const spacing = offset

      let top = 0
      let left = 0

      switch (position) {
        case 'top':
          top = rect.top - spacing
          left = rect.left + rect.width / 2
          break

        case 'bottom':
          top = rect.bottom + spacing
          left = rect.left + rect.width / 2
          break

        case 'left':
          top = rect.top + rect.height / 2
          left = rect.left - spacing
          break

        case 'right':
          top = rect.top + rect.height / 2
          left = rect.right + spacing
          break
      }

      setCoords({
        top,
        left,
      })

      setVisible(true)
    }, delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Trigger */}
      <div
        ref={triggerRef}
        className="inline-flex items-center"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>

      {/* Tooltip */}
      {visible &&
        createPortal(
          <div
            role="tooltip"
            aria-describedby="tooltip"
            className={`bg-bg-secondary text-text-primary pointer-events-none fixed z-50 rounded-md px-3 py-2 text-sm whitespace-nowrap shadow-lg ${className} `}
            style={{
              top: coords.top,
              left: coords.left,

              transform:
                position === 'top'
                  ? 'translate(-50%, -100%)'
                  : position === 'bottom'
                    ? 'translate(-50%, 0)'
                    : position === 'left'
                      ? 'translate(-100%, -45%)'
                      : 'translate(0, -45%)',
            }}
          >
            {content}

            {/* Arrow */}
            <div
              className={`absolute h-0 w-0 ${arrowClasses[position]} ${arrowPositionClasses[position]} `}
            />
          </div>,
          document.body
        )}
    </>
  )
}

export default Tooltip
