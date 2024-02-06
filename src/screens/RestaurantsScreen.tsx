import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/common/RestaurantInfo.tsx';
import { placeHolderRestaurant } from '../data/dummy.ts';

type RestaurantsScreenProps = {};

const RestaurantsScreen = ({}: RestaurantsScreenProps) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // Do something
    }

    return () => {
      // unsub or cleanup
    };
  }, [isFocused]);

  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="Search"
          // onChangeText={setSearchQuery}
          // value={searchQuery}
          style={styles.searchBar}
        />
        <View>
          <RestaurantInfo restaurant={placeHolderRestaurant} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchBarContainer: {
    padding: 15,
  },
  searchBar: {
    borderRadius: 5,
    // backgroundColor: '#fff',
  },
});

export default RestaurantsScreen;
