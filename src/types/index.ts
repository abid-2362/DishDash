import { NavigatorScreenParams } from '@react-navigation/native';

export type RestaurantsParamsList = {
  Restaurants: undefined;
};

export type TabsParamsList = {
  MealsNavigator: NavigatorScreenParams<RestaurantsParamsList>;
  Settings: undefined;
};

export type ActionType<PayloadType> = {
  type: string;
  payload?: PayloadType;
};

export type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
