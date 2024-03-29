import * as React from 'react';
import { Restaurant, RestaurantsParamsList } from '../../types';
import { placeHolderRestaurant } from '../../data/dummy.ts';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../assets/star';
import open from '../../assets/open';
import Spacer from './Spacer.tsx';
import { Text } from './Text.tsx';
import {
  Address,
  Icon,
  Info,
  OpenContainer,
  RatingContainer,
  RestaurantCard,
  RestaurantCardCover,
} from './styles/SingleRestaurantCardStyles.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import FavoriteFAB from './FavoriteFAB.tsx';

export type SingleRestaurantCardProps = {
  restaurant: Restaurant;
};
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const SingleRestaurantCard = ({
  restaurant = placeHolderRestaurant,
}: SingleRestaurantCardProps) => {
  const { id, name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;

  const navigation: NavigationProp<RestaurantsParamsList> = useNavigation();

  let ratingArray = [];
  if (rating) {
    ratingArray = Array.from(new Array(Math.floor(rating)));
  }

  return (
    <RestaurantCard elevation={1}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <FavoriteFAB restaurant={restaurant} />
      <Info>
        <Text variant="body">{name}</Text>
        <RatingContainer>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={`star-${id}-${index}`} xml={star} width="20" height="20" />
            ))}
            {ratingArray.length < 1 && <Text variant={'caption'}>Not Rated</Text>}
          </Rating>
          <OpenContainer>
            {isClosedTemporarily && <Text variant={'error'}> CLOSED TEMPORARILY </Text>}
            {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
            <Spacer position="left" size="medium" />
            <Icon source={{ uri: icon }} />
          </OpenContainer>
        </RatingContainer>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

SingleRestaurantCard.defaultProps = {
  restaurant: placeHolderRestaurant,
};
export default SingleRestaurantCard;
