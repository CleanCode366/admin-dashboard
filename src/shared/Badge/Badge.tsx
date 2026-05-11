import { cva, type VariantProps } from 'class-variance-authority'

const badge = cva(
  // base styles applied to every variant
  'inline-flex items-center font-medium rounded-full border',
  {
    variants: {
      variant: {
        pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        escalated: 'bg-red-50 text-red-700 border-red-200',
        resolved: 'bg-green-50 text-green-700 border-green-200',
        dismissed: 'bg-gray-50 text-gray-500 border-gray-200',
        info: 'bg-blue-50 text-blue-700 border-blue-200',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {
  label: string
}

export function Badge({ label, variant, size, className, ...props }: BadgeProps) {
  return (
    <span className={badge({ variant, size, className })} {...props}>
      {label}
    </span>
  )
}
