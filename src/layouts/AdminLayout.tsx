import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import { SidebarNav } from '@/shared/composites/SidebarNav'

import { Topbar } from '@/shared/composites/Topbar'

import { AvatarMenu } from '@/shared/composites/AvatarMenu/AvatarMenu'

import { ToastProvider } from '@/shared/integrations/Toast'

import {
  CheckIcon,
  ExclamationTriangleIcon,
  PresentationChartLineIcon,
  QueueListIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Queue')

  return (
    //     <div
    //         className="
    //     min-h-screen
    //     bg-bg-primary
    //     text-text-primary
    //   "
    //     >
    //         <ToastProvider />

    //         {/* Sidebar */}
    //         <aside
    //             className={`fixed top-0 left-0 z-30 h-screen transition-all duration-300 ${collapsed ? 'w-18' : 'w-64'
    //                 } `}
    //         >
    //             <SidebarNav
    //                 collapsed={collapsed}
    //                 onToggle={() => {
    //                     setCollapsed(!collapsed)
    //                 }}
    //                 items={[
    //                     {
    //                         label: 'Queue',

    //                         icon: <QueueListIcon className="size-4" />,

    //                         badge: 3,

    //                         badgeVariant: 'danger',

    //                         isActive: activeItem === 'Queue',

    //                         onClick: () => {
    //                             setActiveItem('Queue')

    //                             console.log('Queue clicked')
    //                         },
    //                     },

    //                     {
    //                         label: 'Resolved',

    //                         icon: <CheckIcon className="size-4" />,

    //                         badge: 12,

    //                         badgeVariant: 'info',

    //                         isActive: activeItem === 'Resolved',

    //                         onClick: () => {
    //                             setActiveItem('Resolved')

    //                             console.log('Resolved clicked')
    //                         },
    //                     },

    //                     {
    //                         label: 'Escalated',

    //                         icon: <ExclamationTriangleIcon className="size-4" />,

    //                         badge: 1,

    //                         badgeVariant: 'danger',

    //                         isActive: activeItem === 'Escalated',

    //                         onClick: () => {
    //                             setActiveItem('Escalated')

    //                             console.log('Escalated clicked')
    //                         },
    //                     },

    //                     {
    //                         label: 'Users',

    //                         icon: <UsersIcon className="size-4" />,

    //                         isActive: activeItem === 'Users',

    //                         onClick: () => {
    //                             setActiveItem('Users')

    //                             console.log('Users clicked')
    //                         },
    //                     },

    //                     {
    //                         label: 'Analytics',

    //                         icon: <PresentationChartLineIcon className="size-4" />,

    //                         isActive: activeItem === 'Analytics',

    //                         onClick: () => {
    //                             setActiveItem('Analytics')

    //                             console.log('Analytics clicked')
    //                         },
    //                     },
    //                 ]}
    //             />
    //         </aside>
    //         <main
    //             className={`flex min-h-screen items-center justify-center transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-64'
    //                 } `}
    //         >
    //         </main>
    //         <div
    //             className={`
    //       transition-all
    //       duration-300
    //       ${collapsed
    //                     ? 'ml-[72px]'
    //                     : 'ml-64'
    //                 }
    //     `}
    //         >

    //             <main className="p-6">
    //                 <Outlet />
    //             </main>
    //         </div>
    //     </div>
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <ToastProvider />

      <aside
        className={`fixed top-0 left-0 z-30 h-screen transition-all duration-300 ${
          collapsed ? 'w-[72px]' : 'w-64'
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

      <div className={`transition-all duration-300 ${collapsed ? 'ml-[72px]' : 'ml-64'} `}>
        <Topbar
          title="Moderation Queue"
          actionsSlot={<AvatarMenu name="Admin Mod" />}
          searchSlot={
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Search reports..."
            />
          }
        />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
