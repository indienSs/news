import {Text} from 'react-native';
import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectLoggedIn} from '../redux/reducers/appReducer';
import {useAppDispatch} from '../redux/store';
import {fetchNews, selectNews} from '../redux/reducers/newsReducer';
import NewsItem from '../components/NewsItem';

export default function NewsScreen({navigation}: any) {
  const logged = useSelector(selectLoggedIn);
  const news = useSelector(selectNews);
  const appDispatch = useAppDispatch();

  const callbacks = {
    //Переход на экран просмотра информации о новости
    pressHandler: useCallback(() => {
      navigation.navigate('SingleNewsScreen', {id: 371});
    }, []),
  };

  useEffect(() => {
    appDispatch(fetchNews());
    if (!logged) {
      navigation.navigate('LoginScreen');
    }
  }, [logged]);

  return (
    <ScreenLayout>
      {news.map(element => (
        <NewsItem
          newsInfo={element}
          navigateToSingleNews={callbacks.pressHandler}
        />
      ))}
    </ScreenLayout>
  );
}
