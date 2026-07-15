import { useState } from 'react';
import { useApiClient } from '@/api/ApiContext.jsx';
import { useAuthStore } from '@/stores/auth.store.js';
import { toast } from '@/lib/toast';

export const useLogin = () => {
  const api = useApiClient();
  const login = useAuthStore((state) => state.login);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async ({ email, clave }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/login', { email, clave });

      // Si el usuario tiene 2FA habilitado
      if (response.require2FA) {
        setIsLoading(false);
        return { require2FA: true, userId: response.userId };
      }

      // Login exitoso sin 2FA
      login(response);
      setIsLoading(false);
      return { success: true, user: response };
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err.message || 'Error al iniciar sesión';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  return {
    loginUser,
    isLoading,
    error,
  };
};
