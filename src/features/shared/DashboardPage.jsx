import { useAuthStore } from '@/stores/auth.store';

export const DashboardPage = () => {
  const { user } = useAuthStore();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-heading">Dashboard</h1>
      <p>
        {user?.email ? `Sesión iniciada: ${user.email}` : 'Sesión no iniciada'}
      </p>
    </div>
  );
};
