import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Restaurant } from '../../../types';

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  margin-bottom: ${props => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const OpenContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
