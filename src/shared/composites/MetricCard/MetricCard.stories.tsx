import type { Meta, StoryObj } from '@storybook/react-vite'

import { MetricCard } from './MetricCard'

const meta: Meta<typeof MetricCard> = {
  title: 'Shared/Composites/MetricCard',

  component: MetricCard,

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MetricCard>

export const Default: Story = {
  args: {
    label: 'Escalation Rate',

    value: '34%',

    subLabel: 'of all reports',
  },
}

export const Danger: Story = {
  args: {
    label: 'Escalated',

    value: 1,

    subLabel: 'needs review',

    valueColor: 'danger',
  },
}

export const Warning: Story = {
  args: {
    label: 'Pending',

    value: 3,

    subLabel: 'awaiting action',

    valueColor: 'warning',
  },
}

export const Success: Story = {
  args: {
    label: 'AI Auto-resolved',

    value: 8,

    subLabel: 'this week',

    valueColor: 'success',
  },
}

export const WithoutSubLabel: Story = {
  args: {
    label: 'Total Users',

    value: 1284,
  },
}

export const GridPreview: Story = {
  args: {
    label: 'Preview',

    value: 0,
  },

  render: () => (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <MetricCard label="Pending" value={3} subLabel="awaiting action" valueColor="warning" />

      <MetricCard label="Escalated" value={1} subLabel="needs review" valueColor="danger" />

      <MetricCard label="AI Auto-resolved" value={8} subLabel="this week" valueColor="success" />

      <MetricCard label="Escalation Rate" value="34%" subLabel="of all reports" />
    </div>
  ),
}
