import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsParamsList } from '../types';
import SettingsScreen from '../screens/SettingsScreen.tsx';
import CameraScreen from '../screens/CameraScreen.tsx';
import FavoritesScreen from '../screens/FavoritesScreen.tsx';

const SettingsStack = createNativeStackNavigator<SettingsParamsList>();

type MealsNavigatorProps = {};

const SettingsNavigator = ({}: MealsNavigatorProps) => (
  <SettingsStack.Navigator
    // change background color to white
    // screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'red' } }}
    screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
    initialRouteName={'Settings'}>
    <SettingsStack.Screen
      name={'Settings'}
      component={SettingsScreen}
      options={{ title: 'Account Settings' }}
    />
    <SettingsStack.Screen
      name={'Favorites'}
      component={FavoritesScreen}
      options={{ title: 'Take Picture' }}
    />
    <SettingsStack.Screen
      name={'Camera'}
      component={CameraScreen}
      options={{ title: 'Take Picture' }}
    />
  </SettingsStack.Navigator>
);

export default SettingsNavigator;
