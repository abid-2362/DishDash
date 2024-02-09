// Restaurants related api requests.
import { RawRestaurant } from '../types';
import camelize from 'camelize';
import { mockImages, mocks } from '../data/mock';
import random from 'lodash/random';

type Mocks = typeof mocks;

const restaurantsTransform = (results: RawRestaurant[]) => {
  const mappedResults = results.map(restaurant => {
    const photos = restaurant.photos.map(p => mockImages[random(0, mockImages.length - 1)]);
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      photos,
    };
  });
  return camelize(mappedResults);
};

export const fetchRestaurants = (location: string = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location as keyof Mocks];
    if (!mock) {
      reject('not found');
    }
    const transformedData = restaurantsTransform(mock.results as RawRestaurant[]);
    const camelizedData = camelize(transformedData);
    resolve(camelizedData);
  });
};
