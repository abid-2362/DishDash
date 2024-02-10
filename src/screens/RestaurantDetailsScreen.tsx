import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { Restaurant, RestaurantsParamsList } from '../types';
import { Screen } from '../components/common/styles/CommonStyles.ts';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import { IconButton, List, Appbar } from 'react-native-paper';

type RestaurantDetailsScreenProps = {};
const RestaurantDetailsScreen = ({}: RestaurantDetailsScreenProps) => {
  const route: RouteProp<RestaurantsParamsList, 'RestaurantDetails'> = useRoute();
  const { restaurant } = route.params;
  const navigation: NavigationProp<RestaurantsParamsList> = useNavigation();

  return (
    <Screen>
      <Appbar>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title={restaurant.name} />
      </Appbar>
      {/*<IconButton icon={'chevron-left'} onPress={() => navigation.goBack()} />*/}
      <SingleRestaurantCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => <List.Icon {...props} icon="bread-slice" />}>
          <List.Item title="Eggs" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion title="Lunch" left={props => <List.Icon {...props} icon="hamburger" />}>
          <List.Item title="Burger With Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion title="Dinner" left={props => <List.Icon {...props} icon="food-variant" />}>
          <List.Item title="Spaghetti Blognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion title="Drinks" left={props => <List.Icon {...props} icon="cup" />}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Pepsi" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </Screen>
  );
};

export default RestaurantDetailsScreen;
