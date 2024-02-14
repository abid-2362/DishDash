import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../context/RestaurantsContext.ts';
import SearchRestaurant from '../components/RestaurantScreen/SearchRestaurant.tsx';
import { RestaurantsParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FavoritesContext } from '../context/FavoritesContext.ts';
import FavoritesBar from '../components/FavoritesBar.tsx';
import Spacer from '../components/common/Spacer.tsx';
import { errorHandler } from '../utils/utils.ts';
import { AuthContext } from '../context/AuthContext.ts';
import RestaurantsList from '../components/common/RestaurantsList.tsx';
import { LocationContext } from '../context/LocationContext.ts';

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
  const { state: lState } = useContext(LocationContext);
  const { state: aState } = useContext(AuthContext);
  const { state } = useContext(RestaurantsContext);
  const navigation: NavigationProp<RestaurantsParamsList> = useNavigation();
  const { state: fState, saveFavorites, loadFavorites } = useContext(FavoritesContext);
  const [showFavorites, setShowFavorites] = useState(false);

  const showFavoritesToggle = () => {
    setShowFavorites(prev => !prev);
  };

  useEffect(() => {
    if (aState.user) {
      loadFavorites(aState.user.uid).catch(errorHandler);
    }
  }, [aState.user]);

  useEffect(() => {
    if (aState.user) {
      saveFavorites(fState.favorites, aState.user.uid).catch(errorHandler);
    }
  }, [fState.favorites]);
  return (
    <Screen>
      <SearchContainer>
        <SearchRestaurant onFavoritesToggle={showFavoritesToggle} showFavorites={showFavorites} />
      </SearchContainer>
      {showFavorites && (
        <Spacer size={'large'} position={'left'}>
          <FavoritesBar favorites={fState.favorites} navigation={navigation} />
        </Spacer>
      )}
      {!lState.errorMessage && (
        <ListContainer>
          {state.isLoading ? (
            <CenterScreen>
              <ActivityIndicator />
            </CenterScreen>
          ) : (
            <RestaurantsList restaurants={state.restaurants} />
          )}
        </ListContainer>
      )}
    </Screen>
  );
};

export default RestaurantsScreen;
