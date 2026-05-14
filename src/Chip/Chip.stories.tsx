import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip, ChipGroup } from '.'

import { useState } from 'react'
import { fn } from 'storybook/test'

const meta = {
  title: 'Shared/Primitives/Chip',

  component: Chip,

  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Escalated',
    onSelect: fn(),
  },
}

export const Selected: Story = {
  args: {
    label: 'Escalated',
    onSelect: fn(),

    isSelected: true,
  },
}

export const WithCount: Story = {
  args: {
    label: 'Spam',
    onSelect: fn(),

    count: 12,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    onSelect: fn(),

    isDisabled: true,
  },
}

export const Dismissible: Story = {
  args: {
    label: 'Active Filter',
    onSelect: fn(),

    onDismiss: () => {
      console.log('Dismiss clicked')
    },
  },
}

export const Group: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState('all')

    return (
      <div className="max-w-[500px]">
        <ChipGroup
          selected={selected}
          onChange={setSelected}
          options={[
            {
              label: 'All',
              value: 'all',
            },

            {
              label: 'Escalated',
              value: 'escalated',
              count: 1,
            },

            {
              label: 'Spam',
              value: 'spam',
            },

            {
              label: 'Hate speech',
              value: 'hate',
            },

            {
              label: 'Misinformation',
              value: 'misinformation',
            },
          ]}
        />
      </div>
    )
  },
}
