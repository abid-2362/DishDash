import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator.tsx';
// import { AuthContext } from '../context/AuthContext.ts';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  // const { state } = useContext(AuthContext);
  // const isAuthenticated = !!state.token;
  const isAuthenticated = true;

  return (
    <Stack.Navigator initialRouteName={'ResolveAuth'}>
      {isAuthenticated ? (
        <Stack.Group screenOptions={{ headerShown: false, title: 'Tracks App' }}>
          <Stack.Screen name={'BottomTabsNavigator'} component={BottomTabsNavigator} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'ResolveAuth'} component={ResolveAuthScreen} />
          {/*<Stack.Screen name={'Signin'} component={SignInScreen} />*/}
          {/*<Stack.Screen name={'Signup'} component={SignupScreen} />*/}
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
