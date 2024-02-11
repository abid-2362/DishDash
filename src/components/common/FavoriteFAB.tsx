import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Restaurant } from '../../types';
import { FavoritesContext } from '../../context/FavoritesContext.ts';

const FABButton = styled(AntDesign)`
  position: absolute;
  margin: 16px;
  right: 10px;
  top: 10px;
`;
type FavoriteProps = {
  restaurant: Restaurant;
};
const FavoriteFAB = ({ restaurant }: FavoriteProps) => {
  const {
    state: { favorites },
    addFavorite,
    removeFavorite,
  } = useContext(FavoritesContext);
  const isFavorite = favorites.find(f => {
    return f.id === restaurant.id;
  });
  return (
    <FABButton
      name={isFavorite ? 'heart' : 'hearto'}
      size={24}
      color={isFavorite ? 'red' : 'white'}
      onPress={() => (isFavorite ? removeFavorite(restaurant.id) : addFavorite(restaurant))}
    />
  );
};

export default FavoriteFAB;
