import { createBrowserRouter, Navigate } from "react-router-dom"
import { MainLayout } from "@/layouts/MainLayout"
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { LoginPage } from "@/features/auth/pages/LoginPage"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <LoginPage /> },
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
            path: "dashboard",
            element: (
              <div className="p-8">
                <h1 className="text-2xl font-heading">Dashboard</h1>
              </div>
            ),
          },
        ],
      },
    ],
  },
])
