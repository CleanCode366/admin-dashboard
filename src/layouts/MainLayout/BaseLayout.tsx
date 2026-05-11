import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        <div className="text-text-secondary py-8 sm:py-12">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout;
