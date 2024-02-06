import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Button, Text } from 'react-native-paper';
import { Restaurant } from '../../types';
import { placeHolderRestaurant } from '../../data/dummy.ts';

type RestaurantInfoProps = {
  restaurant: Restaurant;
};
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const RestaurantInfo = ({ restaurant = placeHolderRestaurant }: RestaurantInfoProps) => {
  const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;
  return (
    <View style={styles.component}>
      <Card style={styles.card}>
        {/*<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />*/}
        <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Text style={styles.title}>{name}</Text>
        {/*<Card.Actions>*/}
        {/*  <Button>Cancel</Button>*/}
        {/*  <Button>Ok</Button>*/}
        {/*</Card.Actions>*/}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
  },
  cover: { padding: 20, backgroundColor: 'white' },
  title: { padding: 16 },
});

export default RestaurantInfo;
