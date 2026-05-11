import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '.';

const meta = {
  title: 'Shared/Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'pending',
        'escalated',
        'resolved',
        'dismissed',
        'info',
        'success',
        'warning',
        'danger',
      ],
    },

    size: {
      control: 'select',
      options: ['sm', 'md'],
    },

    dot: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Pending: Story = {
  args: {
    children: 'Pending',
    variant: 'pending',
  },
};

export const Escalated: Story = {
  args: {
    children: 'Escalated',
    variant: 'escalated',
  },
};

export const Resolved: Story = {
  args: {
    children: 'Resolved',
    variant: 'resolved',
  },
};

export const Dismissed: Story = {
  args: {
    children: 'Dismissed',
    variant: 'dismissed',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Badge',
    variant: 'pending',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Badge',
    variant: 'pending',
    size: 'md',
  },
};

export const Dot: Story = {
  args: {
    variant: 'success',
    dot: true,
    size: 'md',
  },
};