import * as React from 'react';
import { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import Spacer from '../components/common/Spacer.tsx';
import { colors } from '../theme/colors.ts';
import { Title } from '../components/common/styles/CommonStyles.ts';
import { AuthContext } from '../context/AuthContext.ts';
import { Text } from '../components/common/Text.tsx';

const BackgroundScreen = styled.ImageBackground.attrs({
  source: require('../assets/home_bg.jpg'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Container = styled.View`
  //position: absolute;
  width: 70%;
  //height: 100%;
  padding: ${props => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.7);
`;

type LoginScreenProps = {};
const LoginScreen = ({}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signin } = useContext(AuthContext);

  const loginHandler = () => {
    signin(email, password);
  };
  return (
    <BackgroundScreen>
      <BackgroundCover />
      <Container>
        <Title variant={'body'}>Login to DishDash</Title>
        <Text variant={'error'}>{state.errorMessage}</Text>
        <Spacer position={'bottom'} size={'large'} />
        <Spacer position={'vertical'} size={'medium'}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            autoComplete={'email'}
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
        </Spacer>
        <Spacer position={'vertical'} size={'medium'}>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            autoComplete={'off'}
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </Spacer>

        <Spacer position={'vertical'} size={'medium'}>
          <Button
            buttonColor={colors.brand.primary}
            textColor={colors.text.inverse}
            onPress={loginHandler}>
            Login
          </Button>
        </Spacer>
      </Container>
    </BackgroundScreen>
  );
};

export default LoginScreen;
