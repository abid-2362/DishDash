import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.ts';
import AuthForm from '../components/common/AuthForm.tsx';

type LoginScreenProps = {};
const LoginScreen = ({}: LoginScreenProps) => {
  const { state, signin } = useContext(AuthContext);

  return <AuthForm onSubmit={signin} submitTitle={'Login'} route={'Signup'} />;
};

export default LoginScreen;
