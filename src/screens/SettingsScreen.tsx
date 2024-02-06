import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Spacer from '../components/Spacer.tsx';
import { emptyFunction, openAppSettings } from '../utils/utils.ts';
import Icon from 'react-native-vector-icons/Ionicons';

interface IAccountScreenProps {}

const SettingsScreen = ({}: IAccountScreenProps) => {
  return (
    <View style={styles.screen}>
      <Spacer>
        <View style={styles.row}>
          <Text>Settings</Text>
          <Icon name={'settings'} onPress={openAppSettings} />
        </View>
      </Spacer>
      <Spacer>
        <Button title={'Logout'} onPress={emptyFunction} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SettingsScreen;
