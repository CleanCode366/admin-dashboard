import AvatarMenu from '@/shared/composites/AvatarMenu/AvatarMenu'
import { ToastProvider } from '@/shared/integrations/Toast'
import { Tooltip } from '@/shared/primitives/Tooltip'
// import ThemeToggleSwitch from '@/ThemeToggleSwitch'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout: React.FC = () => {
  return (
    <div className="bg-bg-primary flex min-h-screen flex-col">
      {/* Main Content */}
      <ToastProvider />
      <main className="">
        <div className="text-text-primary">
          <Suspense fallback={null}>
            <Outlet />
            <div className="absolute top-4 right-10 flex gap-2">
              <Tooltip
                children={<AvatarMenu name="Admin Mod" />}
                content="Settings"
                position="left"
              />
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default BaseLayout
