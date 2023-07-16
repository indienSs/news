import {Alert, Button, SafeAreaView, TextInput} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useState} from 'react';
import {api} from '../api';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../redux/reducers/appReducer';

export default function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const callbacks = {
    //Отправка формы логина в api
    sendForm: () =>
      api.post('/auth/sign_in', {email, password}).then(res => {
        if (res.ok) {
          if (res.headers && res.data) {
            dispatch(
              setUserInfo({
                username: res.data.user.username,
                uid: res.headers.uid,
                client: res.headers.client,
                'access-token': res.headers['access-token'],
              }),
            );
          }
        } else {
          Alert.alert('Неверный логин или пароль', '', [
            {
              text: 'OK',
              onPress: () => setPassword(''),
            },
          ]);
        }
      }),
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
