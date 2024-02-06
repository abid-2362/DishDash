import { createNavigationContainerRef } from '@react-navigation/native';
import { TabsParamsList } from '../types';

export const navigationRef = createNavigationContainerRef<TabsParamsList>();

export function navigate<RouteName extends keyof TabsParamsList>(
  ...args: RouteName extends unknown
    ? undefined extends TabsParamsList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: TabsParamsList[RouteName]]
      : [screen: RouteName, params: TabsParamsList[RouteName]]
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}
