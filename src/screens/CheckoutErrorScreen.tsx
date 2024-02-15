import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { FullScreenCenterContainer } from '../components/common/styles/CommonStyles.ts';
import { Text } from '../components/common/Text.tsx';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CartParamsList } from '../types';
import { colors } from '../theme/colors.ts';
import Spacer from '../components/common/Spacer.tsx';

type CheckoutErrorScreenProps = {};
const CheckoutErrorScreen = ({}: CheckoutErrorScreenProps) => {
  const route: RouteProp<CartParamsList, 'CheckoutError'> = useRoute();
  const { error } = route.params;
  const navigation: NavigationProp<CartParamsList> = useNavigation();

  return (
    <>
      <Appbar>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content titleStyle={{ textAlign: 'center' }} title={'Error'} />
      </Appbar>
      <FullScreenCenterContainer>
        <Avatar.Icon
          icon={'alert-outline'}
          style={{ backgroundColor: colors.brand.primary }}
          size={120}
        />
        <Spacer size={'large'} position={'top'} />
        <Text variant={'error'}>{error}</Text>
      </FullScreenCenterContainer>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutErrorScreen;
