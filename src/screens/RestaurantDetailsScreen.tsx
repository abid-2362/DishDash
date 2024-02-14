import * as React from 'react';
import { ScrollView } from 'react-native';
import { Appbar, List, Divider } from 'react-native-paper';
import { RestaurantsParamsList } from '../types';
import { Screen } from '../components/common/styles/CommonStyles.ts';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import SingleRestaurantCard from '../components/common/SingleRestaurantCard.tsx';
import { colors } from '../theme/colors.ts';
import Spacer from '../components/common/Spacer.tsx';

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
      <Spacer size={'medium'} position={'all'}>
        <SingleRestaurantCard restaurant={restaurant} />
      </Spacer>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          titleStyle={{ color: colors.brand.primary }}
          left={props => <List.Icon {...props} color={colors.brand.primary} icon="bread-slice" />}>
          <List.Item title="Eggs" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          titleStyle={{ color: colors.brand.primary }}
          title="Lunch"
          left={props => <List.Icon {...props} color={colors.brand.primary} icon="hamburger" />}>
          <List.Item title="Burger With Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          titleStyle={{ color: colors.brand.primary }}
          title="Dinner"
          left={props => <List.Icon {...props} color={colors.brand.primary} icon="food-variant" />}>
          <List.Item title="Spaghetti Blognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          titleStyle={{ color: colors.brand.primary }}
          title="Drinks"
          left={props => <List.Icon {...props} color={colors.brand.primary} icon="cup" />}>
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Pepsi" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </Screen>
  );
};

export default RestaurantDetailsScreen;
