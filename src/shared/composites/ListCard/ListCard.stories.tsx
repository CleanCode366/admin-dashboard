import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ListCard } from './ListCard'
import { Button } from '@/shared/primitives/Button'

const meta = {
  title: 'Shared/Composites/ListCard',

  component: ListCard,

  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
  },

  decorators: [
    (Story) => (
      <div className="bg-bg-primary min-h-screen p-6">
        <div className="max-w-4xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ListCard>

export default meta

type Story = StoryObj<typeof meta>

const header = (
  <div className="space-y-1">
    <div className="text-text-primary text-sm font-medium">Report title</div>

    <div className="text-text-secondary text-xs">Additional metadata</div>
  </div>
)

const body = (
  <div className="space-y-4">
    <div className="flex flex-wrap items-center gap-2">
      <div className="bg-bg-warning text-text-warning rounded-full px-2 py-1 text-xs">Pending</div>

      <div className="bg-bg-danger text-text-danger rounded-full px-2 py-1 text-xs">Escalated</div>
    </div>

    <div className="bg-bg-secondary text-text-primary rounded-lg p-4 text-sm">
      Expanded body content
    </div>
  </div>
)

const footer = (
  <>
    <Button
      type="button"
      // className="border-border-secondary rounded-md border px-3 py-2 text-sm"
    >
      Action 1
    </Button>

    <Button
      type="button"
      // className="border-border-secondary rounded-md border px-3 py-2 text-sm"
    >
      Action 2
    </Button>
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
    <ListCard header={header} footer={footer} isClickable isExpanded>
      {' '}
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
            <Button
              type="button"
              onClick={() => {
                console.log('Approve clicked')
              }}
              // className="border-border-secondary rounded-md border px-3 py-2 text-sm"
            >
              Approve
            </Button>

            <Button
              type="button"
              onClick={() => {
                console.log('Reject clicked')
              }}
              variant={'danger'}
              // className="border-border-danger text-text-danger rounded-md border px-3 py-2 text-sm"
            >
              Reject
            </Button>
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

export const QueuePreview: Story = {
  args: {
    header,
    children: body,
  },
  render: () => {
    const [expandedId, setExpandedId] = useState<string | null>('2')

    return (
      <div className="space-y-4">
        {[
          {
            id: '1',
            title: 'Spam promotion detected',
            meta: 'Reported 5 mins ago',
          },

          {
            id: '2',
            title: 'Potential hate speech',
            meta: 'Escalated to human review',
          },

          {
            id: '3',
            title: 'Misinformation report',
            meta: 'AI confidence 0.82',
          },
        ].map((item) => (
          <ListCard
            key={item.id}
            isClickable
            isExpanded={expandedId === item.id}
            onToggle={() => {
              setExpandedId(expandedId === item.id ? null : item.id)
            }}
            header={
              <div className="space-y-1">
                <div className="text-text-primary text-sm font-medium">{item.title}</div>

                <div className="text-text-secondary text-xs">{item.meta}</div>
              </div>
            }
            footer={
              <>
                <Button>Review</Button>

                <Button variant="danger">Remove</Button>
              </>
            }
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="bg-bg-warning text-text-warning rounded-full px-2 py-1 text-xs">
                  Pending
                </div>

                <div className="bg-bg-danger text-text-danger rounded-full px-2 py-1 text-xs">
                  Escalated
                </div>
              </div>

              <div className="bg-bg-secondary text-text-primary rounded-lg p-4 text-sm">
                Example expanded moderation content preview.
              </div>
            </div>
          </ListCard>
        ))}
      </div>
    )
  },
}
