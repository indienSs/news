import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import SingleNewsScreen from '../screens/SingleNewsScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
