import type { Meta, StoryObj } from '@storybook/react-vite'

import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'

import { Topbar } from './Topbar'

import { AvatarMenu } from '@/shared/composites/AvatarMenu/AvatarMenu'

import { Button } from '@/shared/primitives/Button'

const meta = {
  title: 'Shared/Composites/Topbar',

  component: Topbar,

  tags: ['autodocs'],
} satisfies Meta<typeof Topbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Moderation Queue',

    actionsSlot: (
      <>
        <Button variant="ghost" size="sd">
          <BellIcon className="size-5" />
        </Button>

        <AvatarMenu name="Admin Mod" />
      </>
    ),
  },
}

export const WithSearch: Story = {
  args: {
    title: 'Moderation Queue',

    searchSlot: (
      <div className="border-border-secondary bg-bg-secondary flex items-center gap-2 rounded-md border px-3 py-2">
        <MagnifyingGlassIcon className="text-text-tertiary size-4" />

        <input
          placeholder="Search reports..."
          className="border-border-secondary w-full border-2 bg-transparent text-sm outline-none"
        />
      </div>
    ),

    actionsSlot: <AvatarMenu name="Admin Mod" />,
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  args: {
    title: 'Moderation Queue',

    actionsSlot: <AvatarMenu name="Admin Mod" />,
  },
}
