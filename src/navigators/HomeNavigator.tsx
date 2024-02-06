import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.tsx';

const HomeStack = createNativeStackNavigator();

type HomeNavigatorProps = {};

const HomeNavigator = ({}: HomeNavigatorProps) => (
  <HomeStack.Navigator screenOptions={{ headerShown: true }} initialRouteName={'TrackList'}>
    <HomeStack.Screen name={'Home'} component={HomeScreen} options={{ title: 'Home' }} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
