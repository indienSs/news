import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import SingleNewsScreen from '../screens/SingleNewsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarsListScreen"
        component={NewsScreen}
        options={{title: 'Главная'}}
      />
      <Stack.Screen
        name="CarScreen"
        component={SingleNewsScreen}
        options={{title: 'Информация'}}
      />
    </Stack.Navigator>
  );
}
