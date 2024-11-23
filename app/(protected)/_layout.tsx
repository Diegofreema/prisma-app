import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { useToken } from '~/lib/zustand/token';
import { useUserStore } from '~/lib/zustand/userStore';

const ProtectedScreenLayout = () => {
  const token = useToken((state) => state.token);
  const setUser = useUserStore((state) => state.getUser);
  const setIsLoading = useUserStore((state) => state.setLoading);
  useEffect(() => {
    if (!token) return;
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const res = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
        });
        const response = await res.json();
        // if(response.message === 'Token has expired'){

        // }
        setUser(response);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [token]);
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default ProtectedScreenLayout;
