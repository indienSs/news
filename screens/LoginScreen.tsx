import {Alert, Button, SafeAreaView, TextInput} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useState} from 'react';
import {api} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectLoggedIn,
  setLoggedIn,
  setUserInfo,
} from '../redux/reducers/appReducer';
import {UserType} from '../types/UserType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  const callbacks = {
    //Отправка формы логина в api
    login: async () => {
      const res = await api.post<any>('/auth/sign_in', {email, password});
      if (res.ok) {
        if (res.headers) {
          const userInfo: UserType = {
            username: res.data.user.username,
            uid: res.headers.uid,
            client: res.headers.client,
            'access-token': res.headers['access-token'],
          };
          await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          dispatch(setUserInfo(userInfo));
          dispatch(setLoggedIn(true));
        } else {
          Alert.alert('Неверный логин или пароль', '', [
            {
              text: 'OK',
              onPress: () => setPassword(''),
            },
          ]);
        }
      }
    },
    logout: () => {
      dispatch(setUserInfo(null));
      dispatch(setLoggedIn(false));
      api.setHeaders({
        uid: '',
        client: '',
        'access-token': '',
      });
    },
  };

  if (loggedIn) {
    return (
      <ScreenLayout>
        <Button
          title="Выйти из аккаунта"
          onPress={callbacks.logout}
          color={'gray'}
        />
      </ScreenLayout>
    );
  }

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
        <Button title="Войти" onPress={callbacks.login} color={'gray'} />
      </SafeAreaView>
    </ScreenLayout>
  );
}
