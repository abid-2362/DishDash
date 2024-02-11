import * as React from 'react';
import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Spacer from '../components/common/Spacer';
import { openAppSettings } from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext.ts';

interface IAccountScreenProps {}

const SettingsScreen = ({}: IAccountScreenProps) => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={styles.screen}>
      <Spacer>
        <View style={styles.row}>
          <Text>Settings</Text>
          <Icon name={'settings'} onPress={openAppSettings} />
        </View>
      </Spacer>
      <Spacer>
        <Button title={'Logout'} onPress={signout} />
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
