import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  QueueListIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'

import { BottomNav } from './BottomNav'

const items = [
  {
    label: 'Queue',

    route: '/queue',

    icon: <QueueListIcon className="size-5" />,

    badge: 3,

    badgeVariant: 'danger' as const,
  },

  {
    label: 'Resolved',

    route: '/resolved',

    icon: <CheckIcon className="size-5" />,

    badge: 12,

    badgeVariant: 'info' as const,
  },

  {
    label: 'Escalated',

    route: '/escalated',

    icon: <ExclamationTriangleIcon className="size-5" />,

    badge: 1,

    badgeVariant: 'danger' as const,
  },

  {
    label: 'Users',

    route: '/users',

    icon: <UsersIcon className="size-5" />,
  },

  {
    label: 'Analytics',

    route: '/analytics',

    icon: <PresentationChartLineIcon className="size-5" />,
  },
]

const meta = {
  title: 'Shared/Composites/BottomNav',

  component: BottomNav,

  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',

    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  decorators: [
    (Story) => (
      <div className="bg-bg-primary min-h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BottomNav>

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <BottomNav
      items={items}
      activeRoute="/queue"
      onNavigate={(route) => {
        console.log(route)
      }}
    />
  ),
}

export const ThirdItemActive: Story = {
  render: () => (
    <BottomNav
      items={items}
      activeRoute="/escalated"
      onNavigate={(route) => {
        console.log(route)
      }}
    />
  ),
}

export const Interactive: Story = {
  render: () => {
    const [activeRoute, setActiveRoute] = useState('/queue')

    return (
      <BottomNav
        items={items}
        activeRoute={activeRoute}
        onNavigate={(route) => {
          setActiveRoute(route)
        }}
      />
    )
  },
}

export const AccessibilityPreview: Story = {
  render: () => (
    <BottomNav
      items={items}
      activeRoute="/queue"
      onNavigate={(route) => {
        console.log(route)
      }}
    />
  ),
}
