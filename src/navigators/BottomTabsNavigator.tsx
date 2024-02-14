import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsNavigator from './RestaurantsNavigator.tsx';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabsParamsList } from '../types';
import { RouteProp } from '@react-navigation/native';
import MapScreen from '../screens/MapScreen.tsx';
import { FavoritesProvider } from '../context/FavoritesContext.ts';
import SettingsNavigator from './SettingsNavigator.tsx';
import { colors } from '../theme/colors.ts';

const Tab = createBottomTabNavigator<TabsParamsList>();

const TAB_ICON = {
  RestaurantsNavigator: 'restaurant',
  MapScreen: 'map',
  SettingsNavigator: 'settings',
};

const createScreenOptions = ({ route }: { route: RouteProp<TabsParamsList> }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarActiveTintColor: colors.brand.primary,
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
  };
};

function BottomTabsNavigator() {
  return (
    <FavoritesProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name={'RestaurantsNavigator'}
          component={RestaurantsNavigator}
          options={{
            title: 'Restaurants Navigator',
            // tabBarIcon: () => <Icon name={'add'} />,
          }}
        />
        <Tab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'Map',
            // tabBarIcon: () => <Icon name={'settings-sharp'} />,
          }}
        />
        <Tab.Screen
          name="SettingsNavigator"
          component={SettingsNavigator}
          options={{
            title: 'Settings',
            // tabBarIcon: () => <Icon name={'settings-sharp'} />,
          }}
        />
      </Tab.Navigator>
    </FavoritesProvider>
  );
}

export default BottomTabsNavigator;
