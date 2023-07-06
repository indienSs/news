import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import LoginScreen from '../screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Главная',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Войти',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="user" color={color} size={size} />
            ),
            title: 'Настройки',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
