import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { LocationContext } from '../../context/LocationContext.ts';
import { RestaurantsContext } from '../../context/RestaurantsContext.ts';
import { Text } from '../common/Text.tsx';

const Search = styled(Searchbar)`
  border-radius: ${props => props.theme.space[1]};
`;
type SearchRestaurantProps = {};
const SearchRestaurant = ({}: SearchRestaurantProps) => {
  const { state, onSearch } = useContext(LocationContext);
  const { fetchRestaurants, resetRestaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState<string>(state.keyword);

  const searchHandler = () => {
    console.log('SearchRestaurant.tsx', searchQuery);
    onSearch(searchQuery);
  };

  useEffect(() => {
    onSearch('San Francisco');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // fetch restaurants everytime the location changes
    fetchRestaurants(state.location);

    return () => {
      resetRestaurants();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.location]);
  return (
    <>
      <Search
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        onSubmitEditing={searchHandler}
      />
      {Boolean(state.errorMessage) && <Text variant={'error'}>{state.errorMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchBar: {
    borderRadius: 5,
    // backgroundColor: '#fff',
  },
});

export default SearchRestaurant;
