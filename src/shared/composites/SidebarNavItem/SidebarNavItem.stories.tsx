import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  QueueListIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  // UsersIcon,
  // PresentationChartLineIcon
} from '@heroicons/react/24/outline'

import { SidebarNavItem } from './SidebarNavItem'

const meta = {
  title: 'Shared/Composites/SidebarNavItem',

  component: SidebarNavItem,

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof SidebarNavItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    link: '/reports',
    label: 'Reports',
    icon: <QueueListIcon className="h-5 w-5" />,
  },
}

export const Active: Story = {
  args: {
    link: '/reports',
    label: 'Reports',
    icon: <QueueListIcon className="h-5 w-5" />,
    isActive: true,
  },
}

export const WithDangerBadge: Story = {
  args: {
    link: '/escalated',
    label: 'Escalated',
    icon: <ExclamationTriangleIcon className="h-5 w-5" />,

    badge: 12,

    badgeVariant: 'danger',
  },
}

export const WithInfoBadge: Story = {
  args: {
    link: '/resolved',
    label: 'Resolved',
    icon: <CheckCircleIcon className="h-5 w-5" />,

    badge: 4,

    badgeVariant: 'info',
  },
}
