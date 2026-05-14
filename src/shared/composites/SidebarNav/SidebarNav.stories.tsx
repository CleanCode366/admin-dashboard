import type { Meta, StoryObj } from '@storybook/react-vite'

import { useState } from 'react'

import {
  HomeIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

import { SidebarNav } from '.'

const meta = {
  title: 'Shared/Composites/SidebarNav',

  component: SidebarNav,

  tags: ['autodocs'],
} satisfies Meta<typeof SidebarNav>

export default meta

type Story = StoryObj

function SidebarDemo() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <SidebarNav
      collapsed={collapsed}
      onToggle={() => {
        setCollapsed(!collapsed)
      }}
      items={[
        {
          label: 'Overview',

          icon: <HomeIcon className="size-5" />,

          isActive: true,
        },

        {
          label: 'Reports',

          icon: <FlagIcon className="size-5" />,

          badge: 3,

          badgeVariant: 'danger',
        },

        {
          label: 'Escalated',

          icon: <ExclamationTriangleIcon className="size-5" />,

          badge: 1,

          badgeVariant: 'danger',
        },

        {
          label: 'Users',

          icon: <UsersIcon className="size-5" />,
        },

        {
          label: 'Security',

          icon: <ShieldCheckIcon className="size-5" />,

          badge: 'new',

          badgeVariant: 'info',
        },
      ]}
    />
  )
}

export const Default: Story = {
  render: () => <SidebarDemo />,
}
