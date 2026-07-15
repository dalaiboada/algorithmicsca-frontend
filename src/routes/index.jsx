import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { AuthLayout } from '@/layouts/AuthLayout';
import { CoursesPage } from '@/features/shared/CoursesPage';
import { RegisterPage } from '@/features/auth/pages/RegisterPage';
import { ResetPasswordPage } from '@/features/auth/pages/ResetPasswordPage';
import { DashboardPage } from '@/features/shared/DashboardPage';
import { TwoFactorPage } from '@/features/auth/pages/TwoFactorPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/auth" replace /> },
      { path: 'courses', element: <CoursesPage /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
      // { path: '2fa-setup', element: <TwoFactorSetupPage /> },
      { path: '2fa-verify', element: <TwoFactorPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            path: 'dashboard',
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);
