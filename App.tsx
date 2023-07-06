import {Provider} from 'react-redux';
import {store} from './redux/store';
import HomeTab from './navigation/HomeTab';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeTab />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
