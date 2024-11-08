/* eslint-disable prettier/prettier */
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '~/constants';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  secureTextEntry?: boolean;
  error: string;
  password?: boolean;
  toggleSecure?: () => void;
};

export const CustomInput = ({
  onChangeText,
  placeholder,
  value,
  keyboardType,
  label,
  secureTextEntry,
  error,
  password,
  toggleSecure,
}: Props): JSX.Element => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {password && (
          <TouchableOpacity onPress={toggleSecure}>
            {secureTextEntry ? (
              <AntDesign name="eye" size={30} />
            ) : (
              <FontAwesome name="eye-slash" size={30} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: colors.dark,
    flex: 1,
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
