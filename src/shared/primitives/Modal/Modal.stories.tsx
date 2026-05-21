import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { Modal } from './Modal'

import { Button } from '@/shared/primitives/Button'

import { Input } from '@/shared/primitives/Input'

const meta = {
  title: 'Shared/Primitives/Modal',

  component: Modal,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          Open Modal
        </Button>

        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          title="Confirmation"
        >
          <div>
            <div>
              <p className="text-text-secondary text-sm">Are you sure you want to proceed?</p>
            </div>
            <div
              className="mt-5 flex items-end gap-3"
              style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 0 0 0' }}
            >
              <Button
                variant="ghost"
                onClick={() => {
                  setOpen(false)
                }}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  setOpen(false)
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          title="Delete Report"
          footer={
            <>
              <Button
                variant="ghost"
                onClick={() => {
                  setOpen(false)
                }}
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  setOpen(false)
                }}
              >
                Confirm
              </Button>
            </>
          }
        >
          <p className="text-sm">This action cannot be undone.</p>
        </Modal>
        <Button variant={'primary'} onClick={() => setOpen(true)}>
          Open Modal
        </Button>
      </div>
    )
  },
}

export const SearchModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const [search, setSearch] = useState('')

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          Open Search
        </Button>

        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          title="Search Reports"
          size="sm"
        >
          <Input
            type="search"
            label="Search"
            value={search}
            onChange={setSearch}
            placeholder="Search reports..."
            autoComplete="off"
            prefixIcon={<MagnifyingGlassIcon className="size-4" />}
            helperText="Search by report ID, author, or reason"
          />
        </Modal>
      </>
    )
  },
}

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          title="Large Modal"
          size="lg"
        >
          <div className="space-y-4">
            <p>Large modal content</p>

            <p className="text-text-secondary text-sm">
              Used for moderation details, advanced filters, or analytics previews.
            </p>
          </div>
        </Modal>
        <Button variant={'primary'} onClick={() => setOpen(true)}>
          Open Modal
        </Button>
      </div>
    )
  },
}

export const NoBackdropClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          title="Protected Action"
          closeOnBackdrop={false}
        >
          <p className="text-sm">Clicking outside will not close this modal.</p>
        </Modal>
        <Button variant={'primary'} onClick={() => setOpen(true)}>
          Open Modal
        </Button>
      </div>
    )
  },
}

export const AccessibilityPreview: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const [email, setEmail] = useState('')
    const [role, setRole] = useState('Senior Moderator')

    return (
      <div>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false)
          }}
          title="Invite Moderator"
          footer={<Button>Send Invite</Button>}
        >
          <div className="space-y-4">
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="moderator@example.com"
              helperText="Must be a valid company email"
            />

            <Input label="Role" value={role} onChange={setRole} isReadOnly />
          </div>
        </Modal>
        <Button variant={'primary'} onClick={() => setOpen(true)}>
          Open Modal
        </Button>
      </div>
    )
  },
}
