import * as React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import SingleRestaurantCard from './SingleRestaurantCard.tsx';
import { AuthorizedParamsList, Restaurant } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RestaurantsListProps = {
  restaurants: Restaurant[];
};
const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const navigation: NavigationProp<AuthorizedParamsList> = useNavigation();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={r => r.id}
      data={restaurants}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BottomTabsNavigator', {
              screen: 'RestaurantsNavigator',
              params: {
                screen: 'RestaurantDetails',
                params: {
                  restaurant: item,
                },
              },
            })
          }>
          <SingleRestaurantCard key={item.name} restaurant={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default RestaurantsList;
