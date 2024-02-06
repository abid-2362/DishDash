import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeParamsList = {
  Home: undefined;
};

export type TabsParamsList = {
  DiaryNavigator: NavigatorScreenParams<HomeParamsList>;
  Account: undefined;
};

export type ActionType<PayloadType> = {
  type: string;
  payload?: PayloadType;
};
