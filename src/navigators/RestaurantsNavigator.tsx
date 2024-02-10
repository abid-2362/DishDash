import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantsScreen from '../screens/RestaurantsScreen.tsx';
import { RestaurantsParamsList } from '../types';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen.tsx';

const RestaurantsStack = createNativeStackNavigator<RestaurantsParamsList>();

type MealsNavigatorProps = {};

const RestaurantsNavigator = ({}: MealsNavigatorProps) => (
  <RestaurantsStack.Navigator
    // change background color to white
    // screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'red' } }}
    screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
    initialRouteName={'Restaurants'}>
    <RestaurantsStack.Screen
      name={'Restaurants'}
      component={RestaurantsScreen}
      options={{ title: 'Restaurants>' }}
    />
    <RestaurantsStack.Screen
      name={'RestaurantDetails'}
      component={RestaurantDetailsScreen}
      options={{ title: 'Restaurants>' }}
    />
  </RestaurantsStack.Navigator>
);

export default RestaurantsNavigator;
