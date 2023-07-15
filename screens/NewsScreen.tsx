import {Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useEffect, useState} from 'react';
import {api} from '../api';

export default function NewsScreen({navigation}: any) {
  const callbacks = {
    //Переход на экран просмотра информации о новости
    pressHandler: useCallback(() => {
      navigation.navigate('SingleNewsScreen', {id: 0});
    }, []),
  };

  useEffect(() => {
    async function fetchData() {
      api.get('/news').then(res => {
        if (res.ok) {
          //перенести в asyncthunk redux
        }
      });
    }
    fetchData();
  }, []);

  return (
    <ScreenLayout>
      <Text>News screen</Text>
    </ScreenLayout>
  );
}
