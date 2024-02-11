import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../components/common/Text.tsx';
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
      <Text variant={'body'}>DishDash is loading</Text>
      <Text variant={'caption'}>Checking for your login credentials...</Text>
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
