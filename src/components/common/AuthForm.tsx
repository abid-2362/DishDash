import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Text } from './Text.tsx';
import { AuthContext } from '../../context/AuthContext.ts';
import { Title } from './styles/CommonStyles.ts';
import Spacer from './Spacer.tsx';
import { Button } from 'react-native-paper';
import { colors } from '../../theme/colors.ts';
import {
  BackgroundCover,
  BackgroundScreen,
  CustomTextInput,
  FormContainer,
  NavigationAreaContainer,
} from './styles/FormStyles.ts';
import { TouchableOpacity } from 'react-native';
import { UnauthorizedParamsList } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type AuthFormProps = {
  onSubmit: (email: string, password: string) => void;
  submitTitle?: string;
  route?: 'Login' | 'Signup';
};
const AuthForm = ({ onSubmit, submitTitle = 'Login', route = 'Signup' }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, clearErrorMessage } = useContext(AuthContext);
  const navigation: NavigationProp<UnauthorizedParamsList> = useNavigation();

  const submitHandler = () => {
    onSubmit(email, password);
  };

  useEffect(() => {
    return () => {
      clearErrorMessage();
    };
  }, []);

  return (
    <BackgroundScreen>
      <BackgroundCover />
      <FormContainer>
        <Title variant={'body'}>{route !== 'Login' ? 'Login' : 'Register'} to DishDash</Title>
        <Text variant={'error'}>{state.errorMessage}</Text>
        <Spacer position={'bottom'} size={'large'} />
        <Spacer position={'vertical'} size={'medium'}>
          <CustomTextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            autoComplete={'email'}
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
        </Spacer>
        <Spacer position={'vertical'} size={'medium'}>
          <CustomTextInput
            contentStyle={{ backgroundColor: 'white' }}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoComplete={'off'}
            label="Password"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={submitHandler}
            secureTextEntry={true}
          />
        </Spacer>

        <Spacer position={'vertical'} size={'medium'}>
          <Button
            buttonColor={colors.brand.primary}
            textColor={colors.text.inverse}
            loading={state.isLoading}
            disabled={state.isLoading}
            onPress={submitHandler}>
            {submitTitle}
          </Button>
        </Spacer>

        <NavigationAreaContainer>
          <Text variant={'caption'}>
            {route !== 'Login' ? "Don't" : 'Already'} have an account?
          </Text>
          <Spacer position={'right'} size={'small'} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(route);
            }}>
            <Text variant={'caption'}>{route !== 'Login' ? 'Register' : 'Login'}</Text>
          </TouchableOpacity>
        </NavigationAreaContainer>
      </FormContainer>
    </BackgroundScreen>
  );
};

const defaultProps: AuthFormProps = {
  onSubmit: () => {},
  submitTitle: 'Login',
  route: 'Signup',
};
AuthForm.defaultProps = defaultProps;
export default AuthForm;
