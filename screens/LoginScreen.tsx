import {Button, SafeAreaView, Text, TextInput} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useState} from 'react';
import {api} from '../api';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const callbacks = {
    sendForm: useCallback(
      () => api.post('/auth/sign_in', {email, password}),
      [],
    ),
  };

  return (
    <ScreenLayout>
      <SafeAreaView>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Введите логин"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Введите пароль"
          secureTextEntry
        />
        <Button title="Войти" onPress={callbacks.sendForm} />
      </SafeAreaView>
    </ScreenLayout>
  );
}
