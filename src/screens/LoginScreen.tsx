import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.ts';
import AuthForm from '../components/common/AuthForm.tsx';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

type LoginScreenProps = {};
const LoginScreen = ({}: LoginScreenProps) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <>
      <AuthForm onSubmit={signin} submitTitle={'Login'} route={'Signup'} />
    </>
  );
};

export default LoginScreen;
