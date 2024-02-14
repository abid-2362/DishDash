import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type CartScreenProps = {};
const CartScreen = ({}: CartScreenProps) => (
  <View style={styles.screen}>
    <Text>Cart Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
