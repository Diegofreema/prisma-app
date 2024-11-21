/* eslint-disable prettier/prettier */

import { Href, Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CustomInput } from './CustomInput';
import { CustomButton } from '../ui/CustomButton';

import { validateEmail, validatePassword } from '~/utils';
import { toast } from 'sonner-native';

type Props = {
  register?: boolean;
};
export const LoginForm = ({ register }: Props) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    name: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => setSecure((prev) => !prev);
  const router = useRouter();
  const handleChange = (inputName: string, text: string) => {
    setValues((prev) => ({ ...prev, [inputName]: text }));
  };
  const { username, password, name } = values;
  const handleSubmit = async () => {
    if (register && name.trim() === '') {
      setErrorName('Please enter your name');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'emilys',
          password: 'emilyspass',
        }),
        credentials: 'include', // Include cookies (e.g., accessToken) in the request
      });
      const response = await res.json();
      console.log(response);

      setValues({
        username: '',
        name: '',
        password: '',
      });
      setErrorEmail('');
      setErrorPassword('');
      toast.success('Success', {
        description: 'Welcome back!',
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', {
        description: 'Please try again later!!',
      });
    } finally {
      setLoading(false);
    }
  };

  const disabled = username.trim() === '' || password.trim() === '';
  const buttonTitle = register ? 'Sign up' : 'Sign in';
  const bottomText = register ? 'Already' : 'Don’t';
  const actionText = register ? 'Sign in' : 'Sign up';
  const href: Href<string | object> = register ? '/login' : '/register';
  return (
    <View style={styles.container}>
      {register && (
        <CustomInput
          label="Full name"
          placeholder="eg John Doe"
          keyboardType="default"
          value={name}
          onChangeText={(text) => handleChange('name', text)}
          error={errorName}
        />
      )}
      <CustomInput
        label="Username"
        placeholder="Enter your username"
        keyboardType="default"
        value={username}
        onChangeText={(text) => handleChange('username', text)}
        error={errorEmail}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        keyboardType="default"
        value={password}
        onChangeText={(text) => handleChange('password', text)}
        error={errorPassword}
        secureTextEntry={secure}
        toggleSecure={toggleSecure}
        password
      />
      <CustomButton
        isLoading={loading}
        disabled={false}
        buttonTitle={buttonTitle}
        onPress={handleSubmit}
      />

      <Link href={href} asChild>
        <Text style={styles.account}>
          {' '}
          {bottomText} have an account? <Text style={styles.register}>{actionText}</Text>
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
  register: {
    color: 'blue',
  },
  account: {
    marginTop: 20,
    textAlign: 'center',
  },
});
