import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartParamsList } from '../types';
import CartScreen from '../screens/CartScreen.tsx';
import CheckoutSuccessScreen from '../screens/CheckoutSuccessScreen.tsx';
import CheckoutErrorScreen from '../screens/CheckoutErrorScreen.tsx';

const CartNavigatorStack = createNativeStackNavigator<CartParamsList>();

type MealsNavigatorProps = {};

const CartNavigator = ({}: MealsNavigatorProps) => (
  <CartNavigatorStack.Navigator
    // change background color to white
    // screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'red' } }}
    screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
    initialRouteName={'CartScreen'}>
    <CartNavigatorStack.Screen
      name={'CartScreen'}
      component={CartScreen}
      options={{ title: 'Cart' }}
    />
    <CartNavigatorStack.Screen
      name={'CheckoutSuccess'}
      component={CheckoutSuccessScreen}
      options={{ title: 'Checkout Success' }}
    />
    <CartNavigatorStack.Screen
      name={'CheckoutError'}
      component={CheckoutErrorScreen}
      options={{ title: 'Checkout Success' }}
    />
  </CartNavigatorStack.Navigator>
);

export default CartNavigator;
