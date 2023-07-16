import {Provider} from 'react-redux';
import {store, useAppDispatch} from './redux/store';
import HomeTab from './navigation/HomeTab';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {fetchAppInfo} from './redux/reducers/appReducer';

function App(): JSX.Element {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchAppInfo());
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeTab />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
