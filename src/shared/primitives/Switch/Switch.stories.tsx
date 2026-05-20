import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
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

export const Interactive: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)

    return <Switch {...args} checked={checked} onChange={setChecked} />
  },
}
