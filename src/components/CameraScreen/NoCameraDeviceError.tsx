import * as React from 'react';
import { Text } from 'react-native';
import { CustomScreenContainer } from '../common/styles/CommonStyles.ts';
import { Button } from 'react-native-paper';
import Spacer from '../common/Spacer.tsx';
import { colors } from '../../theme/colors.ts';
import { SettingsParamsList } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type NoCameraDeviceErrorProps = {};
const NoCameraDeviceError = ({}: NoCameraDeviceErrorProps) => {
  const navigation: NavigationProp<SettingsParamsList> = useNavigation();
  return (
    <CustomScreenContainer>
      <Text>Sorry, we didn't detect any camera device.</Text>
      <Spacer size={'large'} position={'vertical'}>
        <Button
          icon={'cog'}
          buttonColor={colors.brand.primary}
          textColor={colors.text.inverse}
          onPress={() => navigation.navigate('Settings')}>
          Settings
        </Button>
      </Spacer>
    </CustomScreenContainer>
  );
};

export default NoCameraDeviceError;
