import { useState, useCallback, useEffect } from 'react';
import { useApi } from './useApi';

export const useServerHealth = () => {
  const { execute } = useApi();
  const [loading, setLoading] = useState(true);

  const [alert, setAlert] = useState({
    title: 'Testeo de Servidor',
    description:
      'El servidor está en una plataforma gratuita y puede tardar hasta 15s en iniciar. Por favor, espera. ',
    type: 'warning',
  });

  const checkHealth = useCallback(async () => {
    try {
      setLoading(true);
      const response = await execute('get', '/test', { retries: 3 });

      setAlert({
        title: 'Servidor Online',
        description:
          'El servicio está disponible y listo para operar. Última comprobación: ' +
          new Date().toLocaleTimeString(),
        type: 'success',
      });
      return response;
    } catch (err) {
      setAlert({
        title: 'Servidor no disponible',
        description:
          'No pudimos conectar con el servidor. Intenta recargar la página más tarde. Última comprobación: ' +
          new Date().toLocaleTimeString(),
        type: 'error',
      });
      throw err;
    } finally {
      setLoading(false);
    }
  }, [execute]);

  useEffect(() => {
    checkHealth();
  }, [checkHealth]);

  return { isChecking: loading, alert, checkHealth };
};
