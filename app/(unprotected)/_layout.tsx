import { Redirect, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

import { useToken } from '~/lib/zustand/token';

const UnprotectedLayout = () => {
  const router = useRouter();
  const token = useToken((state) => state.token);
  const { redirect } = useLocalSearchParams<{ redirect: string }>();

  if (token) return <Redirect href={redirect as any} />;
  const onPress = () => {
    router.back();
  };
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        title: 'Amazon.sg',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <Text>Cancel</Text>
          </Pressable>
        ),
      }}
    />
  );
};

export default UnprotectedLayout;
