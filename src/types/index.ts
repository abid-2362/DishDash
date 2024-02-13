import { NavigatorScreenParams } from '@react-navigation/native';
import toronto from '../data/mock/toronto.json';

export type RestaurantsParamsList = {
  Restaurants: undefined;
  RestaurantDetails: { restaurant: Restaurant };
};

export type SettingsParamsList = {
  Settings: undefined;
  Favorites: undefined;
  Camera: undefined;
};

export type TabsParamsList = {
  RestaurantsNavigator: NavigatorScreenParams<RestaurantsParamsList>;
  MapScreen: undefined;
  SettingsNavigator: SettingsParamsList;
};

export type UnauthorizedParamsList = {
  ResolveAuth: undefined;
  Login: undefined;
  Signup: undefined;
};

export type AuthorizedParamsList = {
  BottomTabsNavigator: NavigatorScreenParams<TabsParamsList>;
};

export type MainNavigatorParamsList = AuthorizedParamsList & UnauthorizedParamsList;

// export type RootParamsList = RestaurantsParamsList & TabsParamsList;

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
  geometry: Geometry;
};
const rResult = toronto.results[0];
export type RawRestaurant = typeof rResult;

export type LatLong = { lat: number; lng: number };
export type Geometry = {
  location: Location;
};
export type Location = {
  lat: number;
  lng: number;
  viewport: {
    northeast: LatLong;
    southwest: LatLong;
  };
};
