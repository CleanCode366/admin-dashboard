import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Shared/Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['pending', 'escalated', 'resolved', 'dismissed', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// one export per variant/state from your issue spec
export const Pending: Story = { args: { label: 'Pending', variant: 'pending' } }
export const Escalated: Story = { args: { label: 'Escalated', variant: 'escalated' } }
export const Resolved: Story = { args: { label: 'Resolved', variant: 'resolved' } }
export const Dismissed: Story = { args: { label: 'Dismissed', variant: 'dismissed' } }
export const Info: Story = { args: { label: 'Info', variant: 'info' } }
export const Small: Story = { args: { label: 'Pending', variant: 'pending', size: 'sm' } }
export const Medium: Story = { args: { label: 'Pending', variant: 'pending', size: 'md' } }
