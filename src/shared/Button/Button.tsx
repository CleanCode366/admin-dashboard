import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
    [
        'inline-flex items-center justify-center gap-2',
        'rounded-md font-medium',
        'transition-all',
        'active:scale-[0.98]',
        'focus:outline-none',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed disabled:pointer-events-none',
    ],
    {
        variants: {
            variant: {
                primary:
                    'bg-text-info text-bg-primary border border-border-info',

                secondary:
                    'bg-bg-secondary text-text-primary border border-border-secondary',

                danger:
                    'bg-bg-danger text-text-danger border border-border-danger',

                warning:
                    'bg-bg-warning text-text-warning border border-border-warning',

                info:
                    'bg-bg-info text-text-info border border-border-info',

                ghost:
                    'bg-transparent text-text-secondary border border-transparent',
            },

            size: {
                sm: 'px-3 py-1.5 text-sm',
                md: 'px-4 py-2 text-sm',
                lg: 'px-5 py-3 text-base',
            },

            fullWidth: {
                true: 'w-full',
            },
        },

        defaultVariants: {
            variant: 'primary',
            size: 'md',
            fullWidth: false,
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    children: React.ReactNode;

    isLoading?: boolean;
    isDisabled?: boolean;

    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    testId?: string;
}

export function Button({
    children,

    variant,
    size,
    fullWidth,

    className,

    isLoading = false,
    isDisabled = false,

    leftIcon,
    rightIcon,

    testId,

    ...props
}: ButtonProps) {
    const disabled = isDisabled || isLoading;

    return (
        <button
            className={button({
                variant,
                size,
                fullWidth,
                className,
            })}
            disabled={disabled}
            data-testid={testId}
            {...props}
        >
            {/* Left icon OR spinner */}
            {isLoading ? (
                <span
                    className="
            h-4 w-4
            animate-spin
            rounded-full
            border-2
            border-current
            border-t-transparent
          "
                />
            ) : (
                leftIcon
            )}

            {/* Button content */}
            <span>{children}</span>

            {/* Right icon hidden during loading */}
            {!isLoading && rightIcon}
        </button>
    );
}