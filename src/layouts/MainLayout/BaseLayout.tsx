import ThemeToggleSwitch from '@/ThemeToggleSwitch';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 text-text-primary">
          <Suspense fallback={null}>
            <Outlet />
            <div className="flex gap-2 absolute top-4 right-10">
              <ThemeToggleSwitch />
            </div>
          </Suspense>
        </div>
      </main>

    </div>
  );
};

export default BaseLayout;