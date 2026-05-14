import LoginCard from '@/LoginCard'

import { SidebarNav } from '@/shared/composites/SidebarNav'

import {
  CheckIcon,
  ExclamationTriangleIcon,
  PresentationChartLineIcon,
  QueueListIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { useState } from 'react'

const LoginPage = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Queue')
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen transition-all duration-300 ${
          collapsed ? 'w-18' : 'w-64'
        } `}
      >
        <SidebarNav
          collapsed={collapsed}
          onToggle={() => {
            setCollapsed(!collapsed)
          }}
          items={[
            {
              label: 'Queue',

              icon: <QueueListIcon className="size-4" />,

              badge: 3,

              badgeVariant: 'danger',

              isActive: activeItem === 'Queue',

              onClick: () => {
                setActiveItem('Queue')

                console.log('Queue clicked')
              },
            },

            {
              label: 'Resolved',

              icon: <CheckIcon className="size-4" />,

              badge: 12,

              badgeVariant: 'info',

              isActive: activeItem === 'Resolved',

              onClick: () => {
                setActiveItem('Resolved')

                console.log('Resolved clicked')
              },
            },

            {
              label: 'Escalated',

              icon: <ExclamationTriangleIcon className="size-4" />,

              badge: 1,

              badgeVariant: 'danger',

              isActive: activeItem === 'Escalated',

              onClick: () => {
                setActiveItem('Escalated')

                console.log('Escalated clicked')
              },
            },

            {
              label: 'Users',

              icon: <UsersIcon className="size-4" />,

              isActive: activeItem === 'Users',

              onClick: () => {
                setActiveItem('Users')

                console.log('Users clicked')
              },
            },

            {
              label: 'Analytics',

              icon: <PresentationChartLineIcon className="size-4" />,

              isActive: activeItem === 'Analytics',

              onClick: () => {
                setActiveItem('Analytics')

                console.log('Analytics clicked')
              },
            },
          ]}
        />
      </aside>

      {/* Main Content */}
      <main
        className={`flex min-h-screen items-center justify-center transition-all duration-300 ${
          collapsed ? 'w-[72px]' : 'w-64'
        } `}
      >
        <LoginCard />
      </main>
    </div>
  )
}

export default LoginPage
