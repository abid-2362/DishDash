import * as React from 'react';
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext.ts';
import RestaurantsList from '../components/common/RestaurantsList.tsx';
import { Appbar } from 'react-native-paper';
import { SettingsParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Spacer from '../components/common/Spacer.tsx';

type FavoritesScreenProps = {};
const FavoritesScreen = ({}: FavoritesScreenProps) => {
  const { state } = useContext(FavoritesContext);
  const navigation: NavigationProp<SettingsParamsList> = useNavigation();
  return (
    <>
      <Appbar>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content titleStyle={{ textAlign: 'center' }} title={'Favorites'} />
      </Appbar>
      <Spacer size={'large'} position={'all'}>
        <RestaurantsList restaurants={state.favorites} />
      </Spacer>
    </>
  );
};

export default FavoritesScreen;
