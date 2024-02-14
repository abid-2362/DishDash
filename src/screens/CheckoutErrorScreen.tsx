import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type CheckoutErrorScreenProps = {};
const CheckoutErrorScreen = ({}: CheckoutErrorScreenProps) => (
  <View style={styles.screen}>
    <Text>CheckoutError Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutErrorScreen;
