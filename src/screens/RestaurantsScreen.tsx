import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import { placeHolderRestaurant } from '../data/dummy.ts';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/RestaurantsContext.ts';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

type RestaurantsScreenProps = {};

const RestaurantsScreen = ({}: RestaurantsScreenProps) => {
  const { state, fetchRestaurants, resetRestaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // console.log('RestaurantsScreen.tsx', 'fetching restaurants');
      fetchRestaurants();
    }

    return () => {
      resetRestaurants();
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
        {state.isLoading ? (
          <View
            style={[
              styles.screen,
              {
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={state.restaurants}
            renderItem={({ item }) => <SingleRestaurantCard key={item.name} restaurant={item} />}
          />
        )}
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
