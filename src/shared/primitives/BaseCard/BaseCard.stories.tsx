import type { Meta, StoryObj } from '@storybook/react-vite'

import { BaseCard } from './BaseCard'

const meta = {
  title: 'Shared/Primitives/BaseCard',

  component: BaseCard,

  tags: ['autodocs'],
} satisfies Meta<typeof BaseCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default card content',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',

    children: 'Danger card content',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',

    children: 'Warning card content',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',

    children: 'Success card content',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',

    children: 'Info card content',
  },
}

export const PaddingSmall: Story = {
  args: {
    padding: 'sm',

    children: 'Small padding',
  },
}

export const PaddingMedium: Story = {
  args: {
    padding: 'md',

    children: 'Medium padding',
  },
}

export const PaddingLarge: Story = {
  args: {
    padding: 'lg',

    children: 'Large padding',
  },
}

export const NoPadding: Story = {
  args: {
    padding: 'none',

    children: <div className="bg-bg-secondary p-6">Parent controls spacing</div>,
  },
}

export const NestedBaseCards: Story = {
  args: {
    children: '',
  },
  render: () => (
    <BaseCard padding="lg">
      <div className="space-y-4">
        <p>Parent card</p>

        <BaseCard variant="info" padding="sm">
          Nested card
        </BaseCard>
      </div>
    </BaseCard>
  ),
}
