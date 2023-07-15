import {Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useEffect, useState} from 'react';
import {api} from '../api';
import {useSelector} from 'react-redux';
import {selectLoggedIn} from '../redux/reducers/appReducer';

export default function NewsScreen({navigation}: any) {
  const logged = useSelector(selectLoggedIn);

  const callbacks = {
    //Переход на экран просмотра информации о новости
    pressHandler: useCallback(() => {
      navigation.navigate('SingleNewsScreen', {id: 0});
    }, []),
  };

  useEffect(() => {
    if (!logged) {
      navigation.navigate('LoginScreen');
    }
  }, [logged]);

  return (
    <ScreenLayout>
      <Text>News screen</Text>
    </ScreenLayout>
  );
}
