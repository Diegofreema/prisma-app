import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

const UnprotectedLayout = () => {
  const router = useRouter();

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
