import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckCircleIcon } from '@heroicons/react/24/outline'

import { EmptyState } from './EmptyState'
import FilterEmptyIcon from '@/shared/illustrations/FilterEmptyIcon'
import NoUsersIcon from '@/shared/illustrations/NoUsersIcon'
import NoAnalyticsIcon from '@/shared/illustrations/NoAnalyticsIcon'
import { SearchWindowIcon } from '@/shared/illustrations/NoResutsFoundIcon'
import { BellSlashIcon } from '@/shared/illustrations/NoNotifications'

const meta = {
  title: 'Shared/Composites/EmptyState',

  component: EmptyState,

  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
  },

  decorators: [
    (Story) => (
      <div className="bg-bg-primary min-h-screen p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmptyState>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <SearchWindowIcon size={100} />,

    title: 'No search results found.',

    description: 'Try again using more general search terms',
  },
}
export const QueueEmpty: Story = {
  args: {
    icon: <CheckCircleIcon className="size-24" />,

    title: 'Queue is clear',

    description: 'No reports are awaiting moderation right now.',
  },
}

export const FilterEmpty: Story = {
  args: {
    icon: <FilterEmptyIcon />,

    title: 'No reports match this filter',

    description: 'Try adjusting or clearing your filters.',

    action: {
      label: 'Clear filters',

      onClick: () => {
        console.log('Clear filters clicked')
      },
    },
  },
}

export const NoUsers: Story = {
  args: {
    icon: <NoUsersIcon />,

    title: 'No users found',
    description: 'No such user found.',
  },
}

export const AnalyticsNoData: Story = {
  args: {
    icon: <NoAnalyticsIcon />,

    title: 'Not enough data yet',

    description: 'Analytics will appear once enough moderation activity has been collected.',
  },
}

export const WithoutDescription: Story = {
  args: {
    icon: <BellSlashIcon size={100} />,

    title: 'No notifications available',
  },
}

export const AccessibilityPreview: Story = {
  args: {
    icon: <CheckCircleIcon className="size-24" />,

    title: 'Queue is clear',

    description: 'No reports are awaiting moderation right now.',

    action: {
      label: 'Refresh queue',

      onClick: () => {
        console.log('Refresh queue clicked')
      },
    },
  },
}
