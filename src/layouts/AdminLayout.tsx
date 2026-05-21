import { useEffect, useState } from 'react'

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
import { Skeleton } from '@/shared/primitives/Skeleton'
import BottomNav from '@/shared/composites/BottomNav/BottomNav'

const navItems = [
  {
    label: 'Queue',

    route: '/queue',

    icon: <QueueListIcon className="size-4" />,

    badge: 3,

    badgeVariant: 'danger' as const,
  },

  {
    label: 'Resolved',

    route: '/resolved',

    icon: <CheckIcon className="size-4" />,

    badge: 12,

    badgeVariant: 'info' as const,
  },

  {
    label: 'Escalated',

    route: '/escalated',

    icon: <ExclamationTriangleIcon className="size-4" />,

    badge: 1,

    badgeVariant: 'danger' as const,
  },

  {
    label: 'Users',

    route: '/users',

    icon: <UsersIcon className="size-4" />,
  },

  {
    label: 'Analytics',

    route: '/analytics',

    icon: <PresentationChartLineIcon className="size-4" />,
  },
]

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeRoute, setActiveRoute] = useState('/queue')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <ToastProvider />

      <aside
        className={`fixed top-0 left-0 z-30 hidden h-screen transition-all duration-300 md:block ${collapsed ? 'w-[72px]' : 'w-64'} `}
      >
        <SidebarNav
          collapsed={collapsed}
          onToggle={() => {
            setCollapsed(!collapsed)
          }}
          items={navItems.map((item) => ({
            ...item,

            isActive: activeRoute === item.label,

            onClick: () => {
              setActiveRoute(item.label)
            },
          }))}
        />
      </aside>

      <div className={`transition-all duration-300 ${collapsed ? 'md:ml-[72px]' : 'md:ml-64'} `}>
        <Topbar
          title="Moderation Queue"
          showSearch
          searchPlaceholder="Search reports..."
          actionsSlot={
            loading ? (
              <Skeleton variant={'avatar'} className="shimmer" />
            ) : (
              <AvatarMenu name="Admin Mod" />
            )
          }
        />

        <main className="p-6 pb-24 md:pb-6">
          <Outlet />
        </main>
      </div>
      <BottomNav
        items={navItems}
        activeRoute={activeRoute}
        onNavigate={(route) => {
          setActiveRoute(route)

          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      />
    </div>
  )
}

export default AdminLayout
