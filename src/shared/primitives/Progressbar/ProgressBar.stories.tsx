import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressBar } from '.'

const meta = {
  title: 'Shared/Primitives/ProgressBar',

  component: ProgressBar,

  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const AutoDanger: Story = {
  args: {
    value: 0.9,
    variant: 'auto',
    showValue: true,
  },
}

export const AutoWarning: Story = {
  args: {
    value: 0.7,
    variant: 'auto',
    showValue: true,
  },
}

export const AutoSuccess: Story = {
  args: {
    value: 0.4,
    variant: 'auto',
    showValue: true,
  },
}

export const Danger: Story = {
  args: {
    value: 0.8,
    variant: 'danger',
  },
}

export const Warning: Story = {
  args: {
    value: 0.8,
    variant: 'warning',
  },
}

export const Success: Story = {
  args: {
    value: 0.8,
    variant: 'success',
  },
}

export const Info: Story = {
  args: {
    value: 0.8,
    variant: 'info',
  },
}

export const Animated: Story = {
  args: {
    value: 0,
    animated: true,
    variant: 'info',
  },
}

export const ExtraSmall: Story = {
  args: {
    value: 0.82,
    size: 'xs',
  },
}
