import {Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useEffect, useState} from 'react';
import {api} from '../api';
import {NewsType} from '../types/NewsType';

export default function SingleNewsScreen({route}: any) {
  const [singleNews, setSingleNews] = useState<NewsType | unknown>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/news/${route.params.id}`).then(res => {
      if (res.ok) {
        setSingleNews(res.data);
        setLoading(false);
      }
    });
  }, [route.params.id]);

  if (loading) {
    return (
      <ScreenLayout>
        <Text>Loading...</Text>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Text>Single news screen</Text>
    </ScreenLayout>
  );
}
