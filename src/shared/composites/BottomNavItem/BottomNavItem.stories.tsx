import type { Meta, StoryObj } from '@storybook/react-vite'

import { QueueListIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import { BottomNavItem } from './BottomNavItem'

const meta = {
  title: 'Shared/Composites/BottomNavItem',

  component: BottomNavItem,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',

    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  decorators: [
    (Story) => (
      <div className="bg-bg-primary flex items-end justify-center p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BottomNavItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Queue',

    icon: <QueueListIcon className="size-5" />,
  },
}

export const Active: Story = {
  args: {
    label: 'Queue',

    isActive: true,

    icon: <QueueListIcon className="size-5" />,
  },
}

export const DangerBadge: Story = {
  args: {
    label: 'Escalated',

    badge: 3,

    badgeVariant: 'danger',

    icon: <ExclamationTriangleIcon className="size-5" />,
  },
}

export const InfoBadge: Story = {
  args: {
    label: 'Resolved',

    badge: 12,

    badgeVariant: 'info',

    icon: <CheckIcon className="size-5" />,
  },
}

export const AccessibilityPreview: Story = {
  args: {
    label: 'Queue',

    badge: 3,

    badgeVariant: 'danger',

    isActive: true,

    icon: <QueueListIcon className="size-5" />,
  },
}
