import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ReportCard } from './ReportCard'

const meta = {
  title: 'Shared/composites/ReportCard',

  component: ReportCard,

  tags: ['autodocs'],
} satisfies Meta<typeof ReportCard>

export default meta

type Story = StoryObj<typeof meta>

export const Expanded: Story = {
  args: {
    useDummyData: true,

    isExpanded: true,

    onAction: (reportId, action) => {
      console.log(reportId, action)
    },

    onToggleExpand: () => {},
  },
}

export const Collapsed: Story = {
  args: {
    useDummyData: true,

    isExpanded: false,

    onAction: (reportId, action) => {
      console.log(reportId, action)
    },

    onToggleExpand: () => {},
  },
}

export const Interactive: Story = {
  args: {
    useDummyData: true,
    isExpanded: false,
    onToggleExpand: () => {},
    onAction: () => {},
  },
  render: () => {
    const [expanded, setExpanded] = useState(false)

    return (
      <ReportCard
        useDummyData
        isExpanded={expanded}
        onToggleExpand={() => setExpanded(!expanded)}
        onAction={(reportId, action) => {
          console.log(reportId, action)
        }}
      />
    )
  },
}

export const Claimed: Story = {
  args: {
    useDummyData: true,

    isExpanded: true,

    isClaimed: true,

    claimedBy: 'Moderator Jane',

    onAction: (reportId, action) => {
      console.log(reportId, action)
    },

    onToggleExpand: () => {},
  },
}
