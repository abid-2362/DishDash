import * as React from 'react';
import { useContext } from 'react';
import AuthForm from '../components/common/AuthForm.tsx';
import { AuthContext } from '../context/AuthContext.ts';

type SignupScreenProps = {};
const SignupScreen = ({}: SignupScreenProps) => {
  const { signup } = useContext(AuthContext);
  return <AuthForm onSubmit={signup} submitTitle={'Register'} route={'Login'} />;
};

export default SignupScreen;
