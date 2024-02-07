import * as React from 'react';
import { Card } from 'react-native-paper';
import { Restaurant } from '../../types';
import { placeHolderRestaurant } from '../../data/dummy.ts';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../assets/star';

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;
const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;
const Title = styled.Text`
  color: ${props => props.theme.colors.ui.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.body};
`;

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

const StyledView = styled.View`
  flex: 1;
  //background: white;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const RestaurantInfo = ({ restaurant = placeHolderRestaurant }: RestaurantInfoProps) => {
  const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledView>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width="20" height="20" />
            ))}
          </Rating>

          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </StyledView>
  );
};

export default RestaurantInfo;
