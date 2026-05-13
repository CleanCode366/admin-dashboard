import { toast as reactToast } from 'react-toastify'

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid'

export interface ToastAction {
  label: string

  onClick: () => void
}

export interface ToastOptions {
  duration?: number

  action?: ToastAction
}

type ToastVariant = 'success' | 'error' | 'warning' | 'info'

const icons = {
  success: <CheckCircleIcon className="text-text-success size-5" />,

  error: <XCircleIcon className="text-text-danger size-5" />,

  warning: <ExclamationTriangleIcon className="text-text-warning size-5" />,

  info: <InformationCircleIcon className="text-text-info size-5" />,
}

const buildContent = (message: string, action?: ToastAction) => (
  <div className="flex w-full items-center justify-between gap-4">
    <span>{message}</span>

    {action && (
      <button onClick={action.onClick} className="cursor-pointer text-sm underline">
        {action.label}
      </button>
    )}
  </div>
)

const createToast = (variant: ToastVariant, message: string, options?: ToastOptions) => {
  return reactToast[variant](buildContent(message, options?.action), {
    autoClose: options?.duration ?? 2500,

    icon: icons[variant],
  })
}

export const toast = {
  success: (message: string, options?: ToastOptions) => createToast('success', message, options),

  error: (message: string, options?: ToastOptions) => createToast('error', message, options),

  warning: (message: string, options?: ToastOptions) => createToast('warning', message, options),

  info: (message: string, options?: ToastOptions) => createToast('info', message, options),
}
