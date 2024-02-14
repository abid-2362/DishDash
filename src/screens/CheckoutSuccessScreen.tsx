import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type CheckoutSuccessScreenProps = {};
const CheckoutSuccessScreen = ({}: CheckoutSuccessScreenProps) => (
  <View style={styles.screen}>
    <Text>CheckoutSuccess Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutSuccessScreen;
