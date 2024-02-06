import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen.tsx';
import HomeNavigator from './HomeNavigator.tsx';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={'Navigator'}
        component={HomeNavigator}
        options={{
          title: 'Navigator',
          tabBarIcon: () => <Icon name={'add'} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: () => <Icon name={'settings-sharp'} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
