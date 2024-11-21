import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Account = () => {
  const router = useRouter();
  return (
    <View>
      <Button title="Logout" onPress={() => router.push('/login')} />
    </View>
  );
};

export default Account;
