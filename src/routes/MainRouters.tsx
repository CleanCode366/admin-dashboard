// import OAuthCallback from '@views/Auth/OAuthCallBack'
// import BaseLayout from '@layouts/MainLayout/BaseLayout'
// import NotFound from '@views/NotFound/NotFound'
// import HomePage from "@/views/Home/Home";
// import InscriptionDetails from "@/views/InscriptionDetailPage.tsx/InscriptionDetails";
// import Upload from "@/views/Upload/Upload";
// import AuthPage from "@views/Auth/AuthPage";
// import Feed from "@views/Feed/Feed";
// import Gallery from "@views/Gallery/Gallery";
// import Profile from "@views/Profile/Profile";
// import Profile1 from "@views/Profile/Profile1";
// import Setting from "@views/Setting/Setting";
// import { Navigate } from 'react-router-dom'
import LoginPage from '@/views/LoginPage'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/MainLayout/BaseLayout'
import { ProtectedRoute, PublicRoute } from '@/layouts/ProtectedLayOut/ProtectedLayout'
import AuthPage from '@/views/Auth/AuthPage'
import { Navigate } from 'react-router-dom'
import NotFound from '@/views/NotFound/NotFound'
import OAuthCallback from '@/views/Auth/OAuthCallBack'

export const MainRoutes = {
  path: '/',
  element: <BaseLayout />,
  children: [
    {
      index: true,
      element: (
        <Navigate to="dashboard" replace />
      )
    },
    {
      path: 'login',
      element: (
        <PublicRoute>
        <AuthPage />
        </PublicRoute>
      )
    },
    {
      path: 'dashboard',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
            <LoginPage />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: 'oauth/callback',
      element: (
        <OAuthCallback />
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ],
}
