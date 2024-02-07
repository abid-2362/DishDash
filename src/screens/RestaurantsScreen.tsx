import * as React from 'react';
import { StyleProp, StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/common/RestaurantInfo.tsx';
import { placeHolderRestaurant } from '../data/dummy.ts';
import styled from 'styled-components';
import { StylesProps } from '../interfaces/interfaces.ts';

const SearchContainer = styled.View`
  padding: ${(props: StylesProps) => props.theme.space[3]};
`;

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
      </View>
      <View style={styles.list}>
        <RestaurantInfo restaurant={placeHolderRestaurant} />
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
  list: {
    flex: 1,
    padding: 16,
    // backgroundColor: 'blue',
  },
});

export default RestaurantsScreen;
