import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '.';

const meta = {
    title: 'Shared/Primitives/Button',
    component: Button,
    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'danger',
                'warning',
                'ghost',
                'info',
            ],
        },

        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },

        isLoading: {
            control: 'boolean',
        },

        isDisabled: {
            control: 'boolean',
        },

        fullWidth: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger Button',
        variant: 'danger',
    },
};

export const Warning: Story = {
    args: {
        children: 'Warning Button',
        variant: 'warning',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost Button',
        variant: 'ghost',
    },
};

export const Info: Story = {
    args: {
        children: 'Info Button',
        variant: 'info',
    },
};

export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium Button',
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'lg',
    },
};

export const Loading: Story = {
    args: {
        children: 'Loading...',
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        isDisabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        fullWidth: true,
    },
};