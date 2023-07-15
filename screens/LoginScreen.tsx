import {Button, SafeAreaView, Text, TextInput} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useState} from 'react';
import {api} from '../api';

export default function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const callbacks = {
    //Отправка формы логина в api
    sendForm: useCallback(
      () =>
        api.post('/auth/sign_in', {email, password}).then(res => {
          if (!res.ok) {
            navigation.navigate('LoginScreen');
          }
          console.log(res.headers);
        }),
      [],
    ),
  };

  return (
    <ScreenLayout>
      <SafeAreaView>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Введите имейл"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Введите пароль"
          secureTextEntry
        />
        <Button title="Войти" onPress={callbacks.sendForm} color={'gray'} />
      </SafeAreaView>
    </ScreenLayout>
  );
}
