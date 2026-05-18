import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ListCard } from './ListCard'

const meta = {
  title: 'Shared/Composites/ListCard',

  component: ListCard,

  tags: ['autodocs'],
} satisfies Meta<typeof ListCard>

export default meta

type Story = StoryObj<typeof meta>

const header = (
  <div className="space-y-1">
    <div className="text-text-primary text-sm font-medium">Report title</div>

    <div className="text-text-secondary text-xs">Additional metadata</div>
  </div>
)

const body = <div className="text-text-primary text-sm">Expanded body content</div>

const footer = (
  <>
    <button type="button" className="border-border-secondary rounded-md border px-3 py-2 text-sm">
      Action 1
    </button>

    <button type="button" className="border-border-secondary rounded-md border px-3 py-2 text-sm">
      Action 2
    </button>
  </>
)

export const Collapsed: Story = {
  args: {
    header,

    children: body,

    isExpanded: false,
  },
}

export const Expanded: Story = {
  args: {
    header,

    children: body,

    isExpanded: true,
  },
}

export const ExpandedWithFooter: Story = {
  args: {
    header,

    children: body,

    footer,

    isExpanded: true,
  },
}

export const HoverState: Story = {
  args: {
    header,
    children: body,
  },
  render: () => (
    <ListCard header={header} isClickable isExpanded>
      {body}
    </ListCard>
  ),
}

export const Expandable: Story = {
  args: {
    header,
    children: body,
  },
  render: () => {
    const [expanded, setExpanded] = useState(false)

    return (
      <ListCard
        header={header}
        footer={footer}
        isClickable
        isExpanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
      >
        {body}
      </ListCard>
    )
  },
}

export const NoToggle: Story = {
  args: {
    header,

    children: body,

    isExpanded: true,

    isClickable: false,
  },
}

export const FooterActionsDoNotCollapse: Story = {
  args: {
    header,
    children: body,
  },

  render: () => {
    const [expanded, setExpanded] = useState(true)

    return (
      <ListCard
        header={header}
        footer={
          <>
            <button
              type="button"
              onClick={() => {
                console.log('Approve clicked')
              }}
              className="border-border-secondary rounded-md border px-3 py-2 text-sm"
            >
              Approve
            </button>

            <button
              type="button"
              onClick={() => {
                console.log('Reject clicked')
              }}
              className="border-border-danger text-text-danger rounded-md border px-3 py-2 text-sm"
            >
              Reject
            </button>
          </>
        }
        isClickable
        isExpanded={expanded}
        onToggle={() => {
          setExpanded((prev) => !prev)
        }}
      >
        {body}
      </ListCard>
    )
  },
}
