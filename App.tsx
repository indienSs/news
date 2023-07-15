import {Provider} from 'react-redux';
import {store} from './redux/store';
import HomeTab from './navigation/HomeTab';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {api} from './api';
import {AsyncStorage} from 'react-native';

function App({navigation}: any): JSX.Element {
  useEffect(() => {
    async function fetchData() {
      AsyncStorage;
      api.get('/news').then(res => console.log(res.data));
    }
    fetchData();
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
