import { createNavigationContainerRef } from '@react-navigation/native';
import { MainNavigatorParamsList } from '../types';

export const navigationRef = createNavigationContainerRef<MainNavigatorParamsList>();

export function navigate<RouteName extends keyof MainNavigatorParamsList>(
  ...args: RouteName extends unknown
    ? undefined extends MainNavigatorParamsList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: MainNavigatorParamsList[RouteName]]
      : [screen: RouteName, params: MainNavigatorParamsList[RouteName]]
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}
