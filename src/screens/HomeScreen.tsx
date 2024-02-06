import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

type HomeScreenProps = {};

const HomeScreen = ({}: HomeScreenProps) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // Do something
    }

    return () => {
      // unsub or cleanup
    };
  }, [isFocused]);

  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
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

export default HomeScreen;
