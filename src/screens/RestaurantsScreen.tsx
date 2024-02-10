import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import { placeHolderRestaurant } from '../data/dummy.ts';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/RestaurantsContext.ts';
import SearchRestaurant from '../components/RestaurantScreen/SearchRestaurant.tsx';

const Screen = styled.View`
  flex: 1;
`;
const CenterScreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;
type RestaurantsScreenProps = {};

const RestaurantsScreen = ({}: RestaurantsScreenProps) => {
  const { state, fetchRestaurants, resetRestaurants } = useContext(RestaurantsContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // console.log('RestaurantsScreen.tsx', 'fetching restaurants');
      // fetchRestaurants();
    }

    return () => {
      // resetRestaurants();
    };
  }, [isFocused]);

  return (
    <Screen>
      <SearchContainer>
        <SearchRestaurant />
      </SearchContainer>
      <ListContainer>
        {state.isLoading ? (
          <CenterScreen>
            <ActivityIndicator />
          </CenterScreen>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={state.restaurants}
            renderItem={({ item }) => <SingleRestaurantCard key={item.name} restaurant={item} />}
          />
        )}
      </ListContainer>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default RestaurantsScreen;
