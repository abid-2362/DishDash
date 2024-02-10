import camelize from 'camelize';
import { locations, RawLocations } from '../data/mock/location.mock.ts';
import { Location } from '../types';

const locationTransform = (result: RawLocation): Location => {
  const camelizedResponse = camelize(result);
  if (!Array.isArray(camelizedResponse.results) || camelizedResponse.results.length < 0) {
    // return result;
    const emptyLocation: Location = {
      lat: 0,
      lng: 0,
      viewport: { northeast: { lat: 0, lng: 0 }, southwest: { lat: 0, lng: 0 } },
    };
    return emptyLocation;
  }
  const { geometry } = camelizedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport } as Location;
};
export const fetchLocation = (searchTerm: string): Promise<Location> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as keyof RawLocations];
    if (!locationMock) {
      return reject('No location found');
    }
    const transformedLocation = locationTransform(locationMock);

    return resolve(transformedLocation);
  });
};

export const getLatLngStringFromLocation = (location: Location): string => {
  return `${location.lat},${location.lng}`;
};

type RawLocation = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
};
