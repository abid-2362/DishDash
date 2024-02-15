import { Linking } from 'react-native';
import { Item } from '../types';
// import Item from '';
// import firebase from 'firebase/compat';
// import Item = firebase.analytics.Item;

export const emptyFunction = () => {};
export const errorHandler = (err: any) => console.log('error: ', err);

export const calculatePrice = (price: number): number => {
  return price / 100;
};

export const calculateStripeSum = (items: Item[]) => {
  const sum = items.reduce((acc, item) => (acc += item.price), 0);
  return sum;
};

export const calculateUserSum = (items: Item[]) => {
  const sum = calculateStripeSum(items);
  return calculatePrice(sum);
};

export const openAppSettings = () => {
  Linking.openSettings();
};
