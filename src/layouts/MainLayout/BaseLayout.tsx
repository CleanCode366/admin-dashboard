import { Tooltip } from '@/shared/Tooltip'
import ThemeToggleSwitch from '@/ThemeToggleSwitch'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout: React.FC = () => {
  return (
    <div className="bg-bg-primary flex min-h-screen flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        <div className="text-text-primary py-8 sm:py-12">
          <Suspense fallback={null}>
            <Outlet />
            <div className="absolute top-4 right-10 flex gap-2">
              <Tooltip children={<ThemeToggleSwitch />} content="Change theme" position="left" />
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default BaseLayout
