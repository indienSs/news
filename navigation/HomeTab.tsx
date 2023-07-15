import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
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
            <MaterialCommunityIcons name="settings" color={'red'} size={size} />
          ),
          title: 'Войти',
        }}
      />
    </Tab.Navigator>
  );
}
