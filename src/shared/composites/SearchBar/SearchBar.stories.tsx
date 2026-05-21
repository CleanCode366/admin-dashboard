import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import SearchBar from './SearchBar'

const meta = {
  title: 'Shared/Composites/SearchBar',

  component: SearchBar,

  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
  },

  decorators: [
    (Story) => (
      <div className="bg-bg-primary min-h-screen p-6">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <SearchBar {...args} />
  },

  args: {
    label: 'Search reports',
    placeholder: 'Search reports...',
  },
}

export const WithInitialValue: Story = {
  render: (args) => {
    return <SearchBar {...args} />
  },

  args: {
    label: 'Search reports',
    value: 'Misinformation',

    placeholder: 'Search reports...',
  },
}

export const Debounced: Story = {
  render: (args) => {
    const [query, setQuery] = useState('')

    return (
      <div className="space-y-4">
        <SearchBar
          {...args}
          onSearch={(value) => {
            setQuery(value)
          }}
        />

        <div className="text-text-secondary text-sm" aria-live="polite">
          Debounced query: <span className="text-text-primary font-medium">{query || '—'}</span>
        </div>
      </div>
    )
  },

  args: {
    label: 'Search reports',

    debounceMs: 600,

    placeholder: 'Type slowly...',
  },
}

export const AutoFocus: Story = {
  render: (args) => {
    return <SearchBar {...args} />
  },

  args: {
    label: 'Search reports',

    autoFocus: true,

    placeholder: 'Focus starts here',
  },
}

export const AccessibilityPreview: Story = {
  render: (args) => {
    const [query, setQuery] = useState('')

    return (
      <div className="space-y-4">
        <label htmlFor="storybook-search" className="text-text-primary text-sm font-medium">
          Report Search
        </label>

        <SearchBar
          {...args}
          value={query}
          onSearch={setQuery}
          placeholder="Search by report ID, author, or reason"
        />

        <div className="text-text-secondary text-xs" aria-live="polite">
          Current query: {query || 'empty'}
        </div>
      </div>
    )
  },
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },

  render: (args) => {
    return <SearchBar {...args} />
  },

  args: {
    label: 'Search reports',
    placeholder: 'Search reports...',
  },
}
