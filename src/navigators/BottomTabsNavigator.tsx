import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen.tsx';
import RestaurantsNavigator from './RestaurantsNavigator.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabsParamsList } from '../types';

const Tab = createBottomTabNavigator<TabsParamsList>();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={'MealsNavigator'}
        component={RestaurantsNavigator}
        options={{
          title: 'Meals Navigator',
          tabBarIcon: () => <Icon name={'add'} />,
        }}
      />
      <Tab.Screen
        name="Settings"
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
