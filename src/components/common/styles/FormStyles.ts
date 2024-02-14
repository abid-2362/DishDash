import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../../theme/colors.ts';

export const BackgroundScreen = styled.ImageBackground.attrs({
  source: require('../../../assets/home_bg.jpg'),
})`
  flex: 1;
  //justify-content: center;
  align-items: center;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const FormContainer = styled.View`
  //position: absolute;
  width: 70%;
  //height: 100%;
  padding: ${props => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const NavigationAreaContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const CustomTextInput = styled(TextInput).attrs({
  contentStyle: {
    backgroundColor: colors.bg.primary,
    borderColor: colors.text.primary,
    // borderWidth: 1,
    // borderRadius: 4,
  },
  underlineStyle: {
    // borderWidth: 5,
    // borderColor: '#fff',
  },
  mode: 'outlined',
  outlineColor: 'transparent',
  activeOutlineColor: colors.text.primary,
  // activeOutlineColor: 'transparent',
})``;
