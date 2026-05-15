import React, { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { ToastProvider } from '@/shared/integrations/Toast'

const BaseLayout: React.FC = () => {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <ToastProvider />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default BaseLayout
