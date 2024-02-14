import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../context/LocationContext.ts';
import { RestaurantsContext } from '../../context/RestaurantsContext.ts';
import { Text } from '../common/Text.tsx';
import { getLatLngStringFromLocation } from '../../api/locations.ts';
import { errorHandler } from '../../utils/utils.ts';

const Search = styled(Searchbar)`
  border-radius: ${props => props.theme.space[1]};
  background-color: ${props => props.theme.colors.bg.primary};
`;
type MapSearchProps = {};
const MapSearch = ({}: MapSearchProps) => {
  const { state, onSearch } = useContext(LocationContext);
  const { fetchRestaurants, resetRestaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState<string>(state.keyword);

  const searchHandler = () => {
    onSearch(searchQuery).catch(errorHandler);
  };

  useEffect(() => {
    setSearchQuery(state.keyword);
  }, [state.keyword]);

  useEffect(() => {
    // fetch restaurants everytime the location changes
    fetchRestaurants(getLatLngStringFromLocation(state.location)).catch(errorHandler);

    return () => {
      resetRestaurants();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.location]);
  return (
    <>
      <Search
        placeholder="Search"
        icon={'map'}
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

export default MapSearch;
