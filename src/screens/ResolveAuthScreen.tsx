import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Text } from '../components/common/Text.tsx';
import { AuthContext } from '../context/AuthContext';
import { UnauthorizedParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface IResolveAuthScreenProps {}

const ResolveAuthScreen = ({}: IResolveAuthScreenProps) => {
  const { tryLocalSignin } = useContext(AuthContext);
  const navigation: NavigationProp<UnauthorizedParamsList> = useNavigation();
  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.screen}>
      <Text variant={'body'}>DishDash is loading</Text>
      <Text variant={'caption'}>Checking for your login credentials...</Text>
      <Button title={'Login'} />
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
