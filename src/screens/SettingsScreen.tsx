import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Spacer from '../components/common/Spacer';
import { openAppSettings } from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext.ts';
import { CustomScreenContainer, Row } from '../components/common/styles/CommonStyles.ts';
import { colors } from '../theme/colors.ts';
import styled from 'styled-components/native';

const TextLabel = styled.Text`
  flex: 1;
`;

interface IAccountScreenProps {}

const SettingsScreen = ({}: IAccountScreenProps) => {
  const { state, signout } = useContext(AuthContext);
  return (
    <CustomScreenContainer>
      <Spacer>
        <View style={styles.row}>
          <Text>Settings</Text>
          <Icon name={'settings'} onPress={openAppSettings} />
        </View>
      </Spacer>
      <Spacer size={'medium'} position={'vertical'}>
        <Row>
          <TextLabel>Account: </TextLabel>
          <Text>{!!state.user && state.user.email}</Text>
        </Row>
      </Spacer>
      <Spacer size={'large'} position={'vertical'}>
        <Button
          buttonColor={colors.brand.primary}
          textColor={colors.text.inverse}
          loading={state.isLoading}
          disabled={state.isLoading}
          onPress={signout}>
          Logout
        </Button>
      </Spacer>
    </CustomScreenContainer>
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
