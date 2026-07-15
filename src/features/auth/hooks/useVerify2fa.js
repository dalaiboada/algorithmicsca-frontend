import { useState } from 'react';
import { useApiClient } from '@/api/ApiContext.jsx';
import { useAuthStore } from '@/stores/auth.store';

export const useVerify2fa = () => {
  const api = useApiClient();
  const { pending2FAUserId, login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const verify2fa = async (otp) => {
    setIsLoading(true);
    try {
      if (!pending2FAUserId) {
        throw new Error('No pending 2FA verification found');
      }

      const response = await api.post('/auth/login/2fa', {
        userId: pending2FAUserId,
        token: otp,
      });

      login(response);

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    verify2fa,
    isLoading,
  };
};
