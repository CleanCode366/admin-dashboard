import type { Meta, StoryObj } from '@storybook/react-vite'

import { useState } from 'react'

import { Drawer } from '.'

import { Button } from '@/shared/primitives/Button'

const meta = {
  title: 'Shared/Composites/Drawer',

  component: Drawer,

  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj

function DrawerDemo(props: Partial<React.ComponentProps<typeof Drawer>>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Open Drawer
      </Button>

      <Drawer
        isOpen={open}
        onClose={() => {
          setOpen(false)
        }}
        title="Drawer Title"
        {...props}
      >
        <div className="space-y-4">
          <p>Drawer content</p>

          <p>More content</p>

          <p>More content</p>

          <p>More content</p>

          <p>More content</p>
        </div>
      </Drawer>
    </>
  )
}

export const Right: Story = {
  render: () => <DrawerDemo side="right" />,
}

export const Left: Story = {
  render: () => <DrawerDemo side="left" />,
}

export const Bottom: Story = {
  render: () => <DrawerDemo side="bottom" />,
}

export const WithFooter: Story = {
  render: () => (
    <DrawerDemo
      footer={
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      }
    />
  ),
}

export const NonDismissable: Story = {
  render: () => <DrawerDemo isDismissable={false} />,
}
