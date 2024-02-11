import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Restaurant, RestaurantsParamsList } from '../types';
import MapCallout from './MapScreen/MapCallout.tsx';
import { NavigationProp } from '@react-navigation/native';
import Spacer from './common/Spacer.tsx';

type FavoritesBarProps = {
  favorites: Restaurant[];
  navigation: NavigationProp<RestaurantsParamsList>;
};
const FavoritesBar = ({ favorites, navigation }: FavoritesBarProps) => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {favorites.map(fav => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RestaurantDetails', { restaurant: fav });
          }}>
          <Spacer size={'medium'} position={'right'}>
            <MapCallout restaurant={fav} />
          </Spacer>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesBar;
