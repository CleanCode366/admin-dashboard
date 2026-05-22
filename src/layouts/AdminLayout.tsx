import { useContext, useEffect, useMemo, useState } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { useGetReports } from '@/api/endpoints/reports/reports'
import AuthContext from '@/context/AuthContext'
import {
  applyReportOverrides,
  forceOnlineWithoutAuth,
  getSidebarStatusCounts,
  isOnline,
  toCardReport,
} from '@/features/reports/reportViewModel'
import type { Report } from '@/shared/types/report'
import { SidebarNav } from '@/shared/composites/SidebarNav'
import { reports as dummyReports } from '@/shared/composites/ReportCard/dummyData'

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
import HistoryIcon from '@/shared/illustrations/HistoryIcon'
import BottomNav from '@/shared/composites/BottomNav/BottomNav'

const navItems = [
  {
    label: 'Queue',

    route: '/queue',

    icon: <QueueListIcon className="size-4" />,

    badge: 3,

    badgeVariant: 'info' as const,
  },

  {
    label: 'Pending',

    route: '/pending',

    icon: <HistoryIcon className="size-4" />,

    badge: 0,

    badgeVariant: 'warning' as const,
  },

  {
    label: 'Resolved',

    route: '/resolved',

    icon: <CheckIcon className="size-4" />,

    badge: 12,

    badgeVariant: 'success' as const,
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

export interface AdminLayoutOutletContext {
  reportOverrides: Record<string, Partial<Report>>
  updateReport: (reportId: string, patch: Partial<Report>) => void
}

const AdminLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  const [collapsed, setCollapsed] = useState(false)
  const [activeRoute, setActiveRoute] = useState('/queue')
  const [reportOverrides, setReportOverrides] = useState<Record<string, Partial<Report>>>({})
  const searchQuery = new URLSearchParams(location.search).get('q') ?? ''
  const shouldFetchOnlineReports = isOnline && isAuthenticated
  const { data: reportsResponse } = useGetReports(undefined, {
    query: { enabled: shouldFetchOnlineReports },
  })

  const onlineReports = useMemo(
    () => (reportsResponse?.status === 200 ? reportsResponse.data.map(toCardReport) : []),
    [reportsResponse]
  )
  const reports = isOnline
    ? isAuthenticated
      ? onlineReports
      : forceOnlineWithoutAuth
        ? []
        : dummyReports
    : dummyReports
  const activeReports = useMemo(
    () => applyReportOverrides(reports, reportOverrides),
    [reportOverrides, reports]
  )
  const statusCounts = useMemo(() => getSidebarStatusCounts(activeReports), [activeReports])
  const navItemsWithCounts = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        badge:
          item.route === '/queue'
            ? statusCounts.queue
            : item.route === '/pending'
              ? statusCounts.pending
            : item.route === '/resolved'
              ? statusCounts.resolved
              : item.route === '/escalated'
                ? statusCounts.escalated
                : item.badge,
      })),
    [statusCounts]
  )

  const syncActiveRouteFromSearch = () => {
    const status = new URLSearchParams(location.search).get('status')
    if (status === 'pending') {
      setActiveRoute('/pending')
      return
    }

    if (status === 'resolved') {
      setActiveRoute('/resolved')
      return
    }

    if (status === 'escalated') {
      setActiveRoute('/escalated')
      return
    }

    setActiveRoute('/queue')
  }

  useEffect(() => {
    syncActiveRouteFromSearch()
  }, [location.search])

  const handleStatusNavigation = (route: string) => {
    setActiveRoute(route)
    const params = new URLSearchParams(location.search)

    if (route === '/queue') {
      params.set('status', 'queue')
      navigate(`/dashboard?${params.toString()}`)
      return
    }

    if (route === '/resolved') {
      params.set('status', 'resolved')
      navigate(`/dashboard?${params.toString()}`)
      return
    }

    if (route === '/pending') {
      params.set('status', 'pending')
      navigate(`/dashboard?${params.toString()}`)
      return
    }

    if (route === '/escalated') {
      params.set('status', 'escalated')
      navigate(`/dashboard?${params.toString()}`)
    }
  }

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(location.search)
    const trimmedQuery = query.trim()

    if (trimmedQuery) {
      params.set('q', trimmedQuery)
    } else {
      params.delete('q')
    }

    if (!params.get('status')) {
      params.set('status', 'queue')
    }

    navigate(`/dashboard?${params.toString()}`, { replace: true })
  }

  const updateReport = (reportId: string, patch: Partial<Report>) => {
    setReportOverrides((currentOverrides) => ({
      ...currentOverrides,
      [reportId]: {
        ...currentOverrides[reportId],
        ...patch,
      },
    }))
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

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
          items={navItemsWithCounts.map((item) => ({
            ...item,

            isActive: activeRoute === item.route,

            onClick: () => {
              handleStatusNavigation(item.route)
            },
          }))}
        />
      </aside>

      <div className={`transition-all duration-300 ${collapsed ? 'md:ml-[72px]' : 'md:ml-64'} `}>
        <Topbar
          title="Moderation Queue"
          showSearch
          searchPlaceholder="Search reports..."
          searchValue={searchQuery}
          onSearch={handleSearch}
          actionsSlot={
            // loading ? (
            //   <Skeleton variant={'avatar'} className="shimmer" />
            // ) : (
            <AvatarMenu name="Admin Mod" />
            // )
          }
        />

        <main className="p-6 pb-24 md:pb-6">
          <Outlet context={{ reportOverrides, updateReport } satisfies AdminLayoutOutletContext} />
        </main>
      </div>
      <BottomNav
        items={navItemsWithCounts}
        activeRoute={activeRoute}
        onNavigate={(route) => {
          handleStatusNavigation(route)

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
