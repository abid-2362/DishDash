import * as React from 'react';
import { useCallback, useContext, useState } from 'react';
import { Avatar, Button, Divider, List } from 'react-native-paper';
import Spacer from '../components/common/Spacer';
import { openAppSettings } from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from '../components/common/Text.tsx';
import { AuthContext } from '../context/AuthContext.ts';
import {
  CenterContainer,
  CustomScreenContainer,
  RowSpaceBetween,
} from '../components/common/styles/CommonStyles.ts';
import { colors } from '../theme/colors.ts';
import { SettingsParamsList } from '../types';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackgroundCover, BackgroundScreen } from '../components/common/styles/FormStyles.ts';
import styled from 'styled-components/native';

const StyledCover = styled(BackgroundCover)`
  background-color: rgba(255, 255, 255, 0.5);
`;

const StyledListItem = styled(List.Item).attrs({
  titleStyle: { color: colors.brand.primary },
})`
  background-color: rgba(255, 255, 255, 0.5);
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.sizes[0]};
`;

interface IAccountScreenProps {}

const SettingsScreen = ({}: IAccountScreenProps) => {
  const [profilePhoto, setProfilePhoto] = useState('');
  const { state, signout } = useContext(AuthContext);
  const navigation: NavigationProp<SettingsParamsList> = useNavigation();
  useFocusEffect(
    useCallback(() => {
      (async () => {
        if (state.user) {
          const photo = await AsyncStorage.getItem(`${state.user.uid}-photo`);
          if (photo) {
            setProfilePhoto(photo);
          }
        }
      })();
    }, [state.user]),
  );
  return (
    <BackgroundScreen>
      <StyledCover />
      <CustomScreenContainer>
        <ScrollView>
          <Spacer position={'top'} />
          <CenterContainer>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Camera');
              }}>
              {profilePhoto ? (
                <Avatar.Image source={{ uri: profilePhoto }} size={180} />
              ) : (
                <Avatar.Icon
                  size={180}
                  icon={'human'}
                  style={{ backgroundColor: colors.brand.primary }}
                />
              )}
            </TouchableOpacity>
            <Spacer position={'vertical'} size={'large'}>
              <Text variant={'body'}>{!!state.user && state.user.email}</Text>
            </Spacer>
          </CenterContainer>

          <Spacer>
            <List.Section>
              <StyledListItem
                title="Favorites"
                left={() => <List.Icon color={colors.brand.primary} icon="heart-outline" />}
                onPress={() => navigation.navigate('Favorites')}
              />
              <Spacer position={'bottom'} size={'small'} />
              <StyledListItem
                title="App Settings"
                left={() => <List.Icon color={colors.brand.primary} icon="cog" />}
                onPress={openAppSettings}
              />
            </List.Section>
          </Spacer>

          <Spacer size={'large'} position={'vertical'}>
            <Button
              icon={'lock'}
              buttonColor={colors.brand.primary}
              textColor={colors.text.inverse}
              loading={state.isLoading}
              disabled={state.isLoading}
              onPress={signout}>
              Logout
            </Button>
          </Spacer>
        </ScrollView>
      </CustomScreenContainer>
    </BackgroundScreen>
  );
};

export default SettingsScreen;
