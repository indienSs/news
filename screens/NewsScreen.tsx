import {Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useEffect} from 'react';
import {api} from '../api';

interface INewsScreen {
  navigation: any;
}

export default function NewsScreen({navigation}: INewsScreen) {
  useEffect(() => {
    async function fetchData() {
      api.get('/news').then(res => {
        if (res.ok) {
        }
      });
    }
    fetchData();
  }, []);

  const callbacks = {
    //Переход на экран просмотра информации о новости
    pressHandler: useCallback(() => {
      navigation.navigate('SingleNewsScreen', {id: 0});
    }, []),
  };

  return (
    <ScreenLayout>
      <Text>News screen</Text>
    </ScreenLayout>
  );
}
