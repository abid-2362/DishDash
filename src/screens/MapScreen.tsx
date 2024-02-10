import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Screen } from '../components/common/styles/CommonStyles.ts';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import MapSearch from '../components/MapScreen/MapSearch.tsx';
import { RestaurantsContext } from '../context/RestaurantsContext.ts';
import { LocationContext } from '../context/LocationContext.ts';
import MapCallout from '../components/MapScreen/MapCallout.tsx';
import { TabsParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Map = styled(MapView)`
  flex: 1;
`;
type MapScreenProps = {};
const MapScreen = ({}: MapScreenProps) => {
  const { state: lState } = useContext(LocationContext);
  const { state: rState } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { location } = lState;
  const { viewport } = location;
  const navigation: NavigationProp<TabsParamsList> = useNavigation();

  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;
    setLatDelta(northEastLat - southWestLat);
  }, [location, viewport]);
  return (
    <Screen>
      <MapSearch />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {rState.restaurants.map(rest => (
          <Marker
            key={rest.name}
            title={rest.name}
            coordinate={{
              latitude: rest.geometry.location.lat,
              longitude: rest.geometry.location.lng,
            }}>
            <Callout>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantsNavigator', {
                    screen: 'RestaurantDetails',
                    params: {
                      restaurant: rest,
                    },
                  })
                }>
                <MapCallout restaurant={rest} />
              </TouchableOpacity>
            </Callout>
          </Marker>
        ))}
      </Map>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapScreen;
