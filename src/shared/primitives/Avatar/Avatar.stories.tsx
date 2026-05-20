import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from './Avatar'

const meta = {
  title: 'Shared/Primitives/Avatar',

  component: Avatar,

  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {
    name: 'Admin Mod',

    src: 'https://i.pravatar.cc/150?img=12',
  },
}

export const InitialsFallback: Story = {
  args: {
    name: 'Admin Mod',
  },
}

export const Online: Story = {
  args: {
    name: 'Admin Mod',

    showOnline: true,
  },
}

export const ExtraSmall: Story = {
  args: {
    name: 'Admin Mod',

    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    name: 'Admin Mod',

    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    name: 'Admin Mod',

    size: 'md',
  },
}

export const Large: Story = {
  args: {
    name: 'Admin Mod',

    size: 'lg',
  },
}

export const BrokenImageFallback: Story = {
  args: {
    name: 'Admin Mod',

    src: '/broken-image.png',
  },
}

export const Decorative: Story = {
  args: {
    name: '',

    src: 'https://i.pravatar.cc/150?img=12',
  },
}
