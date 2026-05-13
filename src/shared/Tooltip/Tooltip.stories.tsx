import type { Meta, StoryObj } from '@storybook/react-vite'

import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { Tooltip } from './Tooltip'

const meta = {
  title: 'Shared/Composites/Tooltip',

  component: Tooltip,

  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

const IconButton = () => (
  <button className="bg-bg-secondary border-border-secondary text-text-primary rounded-md border p-2">
    <InformationCircleIcon className="h-5 w-5" />
  </button>
)

export const Top: Story = {
  args: {
    content: 'Top tooltip',
    position: 'top',

    children: <IconButton />,
  },
}

export const Bottom: Story = {
  args: {
    content: 'Bottom tooltip',
    position: 'bottom',

    children: <IconButton />,
  },
}

export const Left: Story = {
  args: {
    content: 'Left tooltip',
    position: 'left',

    children: <IconButton />,
  },
}

export const Right: Story = {
  args: {
    content: 'Right tooltip',
    position: 'right',

    children: <IconButton />,
  },
}

export const LongContent: Story = {
  args: {
    content: 'AI confidence score is below the escalation threshold.',

    position: 'top',

    children: <IconButton />,
  },
}
