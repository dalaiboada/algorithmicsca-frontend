import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      pending2FAUserId: null,
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      setPending2FA: (userId) => set({ pending2FAUserId: userId }),
      logout: () =>
        set({ user: null, isAuthenticated: false, pending2FAUserId: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
