import { useState, useCallback } from 'react';
import { useApiClient } from '@/api/ApiContext';

export const useApi = () => {
  const apiClient = useApiClient();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (method, path, options = {}) => {
      setLoading(true);
      setError(null);

      try {
        // apiClient.get('/users')
        return await apiClient[method](path, options);
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiClient]
  );

  return { loading, error, execute };
};
