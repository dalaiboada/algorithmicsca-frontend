import { createContext, useContext, useMemo } from 'react';
import { ApiClient } from './ApiClient.js';

const ApiContext = createContext(null);

const apiInstance = new ApiClient();

export const ApiProvider = ({ children }) => {
  // useMemo asegura que la instancia no se recree innecesariamente
  const value = useMemo(() => apiInstance, []);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiClient = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('useApiClient debe ser utilizado dentro de un ApiProvider');
  }

  return context;
};
