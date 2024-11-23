/* eslint-disable prettier/prettier */

import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { CustomButton } from './ui/CustomButton';
import { Loading } from './ui/Loading';

import { useToken } from '~/lib/zustand/token';
import { useUserStore } from '~/lib/zustand/userStore';
import { User } from '~/type';

export const Account = (): JSX.Element => {
  const token = useToken((state) => state.token);
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);
  if (isLoading) return <Loading />;
  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      {token ? <LoggedInUi user={user} /> : <NotLoggedInUi />}
    </View>
  );
};

const LoggedInUi = ({ user }: { user: User | null }) => {
  return (
    <View>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};
const NotLoggedInUi = () => {
  const router = useRouter();
  const onPress = () => {
    router.push('/login?redirect=/account');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are not logged in</Text>
      <Text style={styles.title}>Login to view your profile</Text>
      <CustomButton buttonTitle="Login" color="white" onPress={onPress} style={{ width: 200 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
