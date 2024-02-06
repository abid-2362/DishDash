import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

interface IResolveAuthScreenProps {}

const ResolveAuthScreen = ({}: IResolveAuthScreenProps) => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResolveAuthScreen;
