import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import SingleNewsScreen from '../screens/SingleNewsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{title: 'Главная'}}
      />
      <Stack.Screen
        name="SingleNewsScreen"
        component={SingleNewsScreen}
        options={{title: 'Информация о новости'}}
      />
    </Stack.Navigator>
  );
}
