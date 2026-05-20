import type { Meta, StoryObj } from '@storybook/react-vite'

import { useState } from 'react'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Input, type InputProps } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Shared/Primitives/Input',

  component: Input,

  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div className="px-3 py-2">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

function StatefulInput(args: InputProps) {
  const [value, setValue] = useState('')

  return (
    <div className="w-full max-w-md p-6">
      <Input {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
}

export const Error: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    label: 'Email',

    placeholder: 'Enter email',

    error: 'Invalid email address',
  },
}

export const Disabled: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    label: 'Disabled',

    value: 'Readonly',

    isDisabled: true,
  },
}

export const WithIcons: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    label: 'Password',

    type: 'password',

    placeholder: 'Enter password',

    prefixIcon: <MagnifyingGlassIcon className="size-4" />,

    suffixIcon: <XMarkIcon className="size-4" />,
  },
}

export const Search: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    type: 'search',

    placeholder: 'Search reports...',

    prefixIcon: <MagnifyingGlassIcon className="size-4" />,
  },
}

export const Focus: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    label: 'Focused Input',

    placeholder: 'Click to focus',
  },

  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    input?.focus()
  },
}

export const ReadOnly: Story = {
  render: (args) => <StatefulInput {...args} />,

  args: {
    label: 'Read only',

    value: 'Readonly value',

    isReadOnly: true,
  },
}
