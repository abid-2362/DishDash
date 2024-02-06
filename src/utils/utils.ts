import { Linking } from 'react-native';

export const emptyFunction = () => {};
export const errorHandler = (err: any) => console.log('error: ', err); //eslint-disable-line no-console

export const openAppSettings = () => {
  Linking.openSettings();
};
