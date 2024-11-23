import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { User } from '~/type';

type Store = {
  user: User | null;
  getUser: (user: User) => void;
  clearUser: () => void;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      clearUser: () => {
        set({ user: null, isLoading: false });
      },
      getUser: (user: User) => {
        set((state) => ({ ...state, user }));
      },
      isLoading: false,
      setLoading: (isLoading: boolean) => {
        set((state) => ({ ...state, isLoading }));
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
