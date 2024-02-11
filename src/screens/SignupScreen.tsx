import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SignupScreenProps = {};
const SignupScreen = ({}: SignupScreenProps) => (
  <View style={styles.screen}>
    <Text>Signup Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignupScreen;
