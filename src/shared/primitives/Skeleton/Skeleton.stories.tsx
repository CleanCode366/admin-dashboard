import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Primitives/Skeleton',

  component: Skeleton,

  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
  },

  decorators: [
    (Story) => (
      <div className="max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    variant: 'text',
    lines: 3,
  },
}

export const Card: Story = {
  args: {
    variant: 'card',
  },
}

export const Avatar: Story = {
  args: {
    variant: 'avatar',

    width: 56,

    height: 56,
  },
}

export const Bar: Story = {
  args: {
    variant: 'bar',

    width: '100%',
  },
}

export const Custom: Story = {
  args: {
    variant: 'custom',

    width: 240,

    height: 80,

    className: 'rounded-xl',
  },
}

export const CardList: Story = {
  render: () => (
    <div className="space-y-4">
      {Array.from({
        length: 3,
      }).map((_, index) => (
        <Skeleton key={index} variant="card" />
      ))}
    </div>
  ),
}
export const LoadingRegion: Story = {
  render: () => (
    <div aria-busy="true" aria-label="Loading reports" className="space-y-4">
      <Skeleton variant="card" />
      <Skeleton variant="card" />
    </div>
  ),
}
