import { Linking } from 'react-native';
import Item from '';
// import firebase from 'firebase/compat';
// import Item = firebase.analytics.Item;

export const emptyFunction = () => {};
export const errorHandler = (err: any) => console.log('error: ', err);

export const calculatePrice = (price: number): number => {
  return price / 100;
};

export const calculateSum = (items: Item[]) => {
  const sum = items.reduce((acc, item) => (acc += item.price), 0);
  return calculatePrice(sum);
};

export const openAppSettings = () => {
  Linking.openSettings();
};
