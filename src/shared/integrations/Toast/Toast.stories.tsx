import type { Meta, StoryObj } from '@storybook/react-vite'

import { toast } from './toast'

import { Button } from '@/shared/primitives/Button'

const meta = {
  title: 'Shared/Integrations/Toast',

  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj

export const Success: Story = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toast.success('Report resolved successfully')
        }}
      >
        Show Success Toast
      </Button>
    </>
  ),
}

export const Error: Story = {
  render: () => (
    <>
      <Button
        variant="danger"
        onClick={() => {
          toast.error('Failed to moderate report')
        }}
      >
        Show Error Toast
      </Button>
    </>
  ),
}

export const Warning: Story = {
  render: () => (
    <>
      <Button
        variant="warning"
        onClick={() => {
          toast.warning('Another moderator is reviewing this')
        }}
      >
        Show Warning Toast
      </Button>
    </>
  ),
}

export const Info: Story = {
  render: () => (
    <>
      <Button
        variant="info"
        onClick={() => {
          toast.info('AI moderation started')
        }}
      >
        Show Info Toast
      </Button>
    </>
  ),
}

export const WithAction: Story = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toast.success('Report dismissed', {
            action: {
              label: 'Undo',

              onClick: () => {
                console.log('Undo clicked')
              },
            },
          })
        }}
      >
        Show Action Toast
      </Button>
    </>
  ),
}

export const StackedQueue: Story = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toast.success('Report resolved')

          toast.warning('Another moderator joined')

          toast.info('AI screening started')

          toast.error('Failed to sync changes')
        }}
      >
        Show Stacked Toasts
      </Button>
    </>
  ),
}
