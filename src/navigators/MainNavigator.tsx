import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator.tsx';
// import { AuthContext } from '../context/AuthContext.ts';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';
import { AuthContext } from '../context/AuthContext.ts';
import { MainNavigatorParamsList } from '../types';
import LoginScreen from '../screens/LoginScreen.tsx';
import SignupScreen from '../screens/SignupScreen.tsx';

const Stack = createNativeStackNavigator<MainNavigatorParamsList>();

const MainNavigator = () => {
  const { state } = useContext(AuthContext);
  const isAuthenticated = !!state.user;

  return (
    <Stack.Navigator initialRouteName={'ResolveAuth'}>
      {isAuthenticated ? (
        <Stack.Group screenOptions={{ headerShown: false, title: 'DishDash App' }}>
          <Stack.Screen name={'BottomTabsNavigator'} component={BottomTabsNavigator} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'ResolveAuth'} component={ResolveAuthScreen} />
          <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Signup'} component={SignupScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
  // return (
  //   <Stack.Navigator
  //     initialRouteName={'BottomTabsNavigator'}
  //     screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name={'BottomTabsNavigator'} component={BottomTabsNavigator} />
  //   </Stack.Navigator>
  // );
};

export default MainNavigator;
