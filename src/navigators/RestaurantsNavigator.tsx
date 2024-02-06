import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsScreen from '../screens/RestaurantsScreen.tsx';
import { RestaurantsParamsList } from '../types';

const RestaurantsStack = createNativeStackNavigator<RestaurantsParamsList>();

type MealsNavigatorProps = {};

const RestaurantsNavigator = ({}: MealsNavigatorProps) => (
  <RestaurantsStack.Navigator
    // change background color to white
    screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}
    initialRouteName={'Restaurants'}>
    <RestaurantsStack.Screen
      name={'Restaurants'}
      component={RestaurantsScreen}
      options={{ title: 'Restaurants>' }}
    />
  </RestaurantsStack.Navigator>
);

export default RestaurantsNavigator;
