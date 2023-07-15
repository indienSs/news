import {Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useEffect} from 'react';
import {api} from '../api';

export default function SingleNewsScreen({route}: any) {
  useEffect(() => {
    api.get('/news/' + route.params.id);
  }, [route.params.id]);

  return (
    <ScreenLayout>
      <Text>Single news screen</Text>
    </ScreenLayout>
  );
}
