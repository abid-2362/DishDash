import * as React from 'react';
import { Text } from 'react-native';
import { Restaurant } from '../../types';
import styled from 'styled-components/native';

const CompactImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: ${props => props.theme.space[2]};
  margin-bottom: 10px;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  max-width: 150px;
`;

type MapCalloutProps = {
  restaurant: Restaurant;
};
const MapCallout = ({ restaurant }: MapCalloutProps) => (
  <Container>
    <CompactImage source={{ uri: restaurant.photos[0] }} />
    <Text style={{ maxWidth: '100%' }} numberOfLines={1}>
      {restaurant.name}
    </Text>
  </Container>
);

export default MapCallout;
