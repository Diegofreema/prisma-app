import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Store = {
  token: string;
  remove: () => void;
  setToken: (token: string) => void;
};

export const useToken = create<Store>()(
  persist(
    (set) => ({
      token: '',
      remove: () => {
        set({ token: '' });
      },
      setToken: (token: string) => {
        set({ token });
      },
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
