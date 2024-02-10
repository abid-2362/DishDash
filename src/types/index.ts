import { NavigatorScreenParams } from '@react-navigation/native';
import toronto from '../data/mock/toronto.json';

export type RestaurantsParamsList = {
  Restaurants: undefined;
  RestaurantDetails: { restaurant: Restaurant };
};

export type TabsParamsList = {
  RestaurantsNavigator: NavigatorScreenParams<RestaurantsParamsList>;
  MapScreen: undefined;
  SettingsScreen: undefined;
};

export type RootParamsList = RestaurantsParamsList & TabsParamsList;

export type ActionType<PayloadType> = {
  type: string;
  payload?: PayloadType;
};

export type Restaurant = {
  id: string;
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
const rResult = toronto.results[0];
export type RawRestaurant = typeof rResult;
