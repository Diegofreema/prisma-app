/* eslint-disable prettier/prettier */

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomInput } from './CustomInput';
import { CustomButton } from '../ui/CustomButton';

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <CustomButton buttonTitle="Sign in" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
});
