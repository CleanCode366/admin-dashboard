import type { Meta, StoryObj } from '@storybook/react-vite'

import { fn } from 'storybook/test'

import { AvatarMenu } from './AvatarMenu'

const meta = {
  title: 'Shared/Composites/AvatarMenu',

  component: AvatarMenu,

  tags: ['autodocs'],

  args: {
    onEditProfile: fn(),

    onPreferences: fn(),

    onSecurity: fn(),

    onLogout: fn(),
  },
} satisfies Meta<typeof AvatarMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Admin Mod',
  },
}

export const WithImage: Story = {
  args: {
    name: 'Admin Mod',

    src: 'https://i.pravatar.cc/150?img=12',
  },
}
