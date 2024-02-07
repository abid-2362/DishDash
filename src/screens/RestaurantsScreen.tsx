import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import { placeHolderRestaurant } from '../data/dummy.ts';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

type RestaurantsScreenProps = {};

const RestaurantsScreen = ({}: RestaurantsScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');
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
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </SearchContainer>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
          renderItem={() => <SingleRestaurantCard restaurant={placeHolderRestaurant} />}
        />
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
