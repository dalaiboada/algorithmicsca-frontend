import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/auth-store';

export const ProtectedRoute = ({ allowedRoles, require2FA = false }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/auth" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role))
    return <Navigate to="/" replace />;

  if (require2FA && !user?.twoFactorEnabled)
    return <Navigate to="/auth" replace />;

  return <Outlet />;
};
