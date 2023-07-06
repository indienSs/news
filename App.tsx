import {Provider} from 'react-redux';
import {store} from './redux/store';
import HomeTab from './navigation/HomeTab';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HomeTab />
    </Provider>
  );
}

export default App;
