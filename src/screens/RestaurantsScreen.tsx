import * as React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/RestaurantsContext.ts';
import SearchRestaurant from '../components/RestaurantScreen/SearchRestaurant.tsx';
import { RestaurantsParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

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
  const { state } = useContext(RestaurantsContext);
  const navigation: NavigationProp<RestaurantsParamsList> = useNavigation();

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
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}>
                <SingleRestaurantCard key={item.name} restaurant={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </ListContainer>
    </Screen>
  );
};

export default RestaurantsScreen;
