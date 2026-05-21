import type { Meta, StoryObj } from '@storybook/react-vite'

import { BellIcon } from '@heroicons/react/24/outline'

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

    showSearch: true,

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
