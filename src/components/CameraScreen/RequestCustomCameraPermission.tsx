import { CustomScreenContainer } from '../common/styles/CommonStyles.ts';
import { Text } from 'react-native';
import Spacer from '../common/Spacer.tsx';
import { Button } from 'react-native-paper';
import { colors } from '../../theme/colors.ts';
import { openAppSettings } from '../../utils/utils.ts';
import * as React from 'react';

const RequestCustomCameraPermission = () => {
  return (
    <CustomScreenContainer>
      <Text>
        We are sorry, we can't open the camera as the permission has been denied. If you want to
        open camera, please open the settings and grant permission for the camera to this app.
      </Text>
      <Spacer size={'large'} position={'vertical'}>
        <Button
          icon={'camera'}
          buttonColor={colors.brand.primary}
          textColor={colors.text.inverse}
          // loading={state.isLoading}
          // disabled={state.isLoading}
          onPress={openAppSettings}>
          Grant Camera Permission
        </Button>
      </Spacer>
    </CustomScreenContainer>
  );
};

export default RequestCustomCameraPermission;
