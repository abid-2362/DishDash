import camelize from 'camelize';
import { locations, RawLocations } from '../data/mock/location.mock.ts';

const locationTransform = (result: RawLocation) => {
  const camelizedResponse = camelize(result);
  if (!Array.isArray(camelizedResponse.results) || camelizedResponse.results.length < 0) {
    // return result;
    return '0,0';
  }
  const { geometry } = camelizedResponse.results[0];
  const { lat, lng } = geometry.location;

  // return { lat, lng };
  return `${lat},${lng}`;
};
export const fetchLocation = (searchTerm: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as keyof RawLocations];
    if (!locationMock) {
      return reject('Not found');
    }
    const transformedLocation = locationTransform(locationMock);

    return resolve(transformedLocation);
  });
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
