import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../components/common/Text.tsx';
import { Appbar, Avatar } from 'react-native-paper';
import { colors } from '../theme/colors.ts';
import Spacer from '../components/common/Spacer.tsx';
import { FullScreenCenterContainer } from '../components/common/styles/CommonStyles.ts';
import { CartParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type CheckoutSuccessScreenProps = {};
const CheckoutSuccessScreen = ({}: CheckoutSuccessScreenProps) => {
  const navigation: NavigationProp<CartParamsList> = useNavigation();
  return (
    <>
      <Appbar>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content titleStyle={{ textAlign: 'center' }} title={'Checkout Success'} />
      </Appbar>
      <FullScreenCenterContainer>
        <Avatar.Icon
          icon={'check-bold'}
          style={{ backgroundColor: colors.brand.primary }}
          size={120}
        />
        <Spacer size={'large'} position={'top'} />
        <Text variant={'body'}>Order has been placed successfully</Text>
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

export default CheckoutSuccessScreen;
