import {Image, Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useEffect, useState} from 'react';
import {api} from '../api';

export default function SingleNewsScreen({route}: any) {
  const [singleNews, setSingleNews] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/news/${route.params.id}`).then(res => {
      if (res.ok) {
        setSingleNews(res.data);
      }
      setLoading(false);
    });
  }, [route.params.id]);

  if (loading) {
    return (
      <ScreenLayout>
        <Text>Loading...</Text>
      </ScreenLayout>
    );
  }

  if (!singleNews) {
    return (
      <ScreenLayout>
        <Text>Ошибка получения информации о новости</Text>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout>
      <Image source={singleNews.image_url} />
      <Text>{singleNews.title}</Text>
      <Text>{singleNews.short_text}</Text>
    </ScreenLayout>
  );
}
