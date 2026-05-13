import type { Meta, StoryObj } from '@storybook/react-vite'

import { fn } from 'storybook/test'

import { Switch } from './Switch'

const meta = {
  title: 'Shared/Primitives/Switch',

  component: Switch,

  tags: ['autodocs'],

  argTypes: {
    checked: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },
  },

  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Off: Story = {
  args: {
    checked: false,
  },
}

export const On: Story = {
  args: {
    checked: true,
  },
}

export const DisabledOff: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
