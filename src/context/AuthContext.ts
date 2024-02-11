import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { IAuthContext, IAuthState } from '../interfaces/interfaces.ts';
import { login } from '../api/authentication.ts';
import { ActionType } from '../types';
import { navigate } from '../navigators/RootNavigation.ts';
import { AuthError } from 'firebase/auth';

const initialState: IAuthState = {
  user: null,
  errorMessage: '',
  isLoading: false,
};

/* REDUCER ACTIONS */
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNOUT = 'SIGNOUT';
/* /REDUCER ACTIONS */

const authReducer = (state: IAuthState, action: ActionType<any>) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case SIGNOUT:
      return { ...state, user: null, errorMessage: '' };

    case SIGNIN_SUCCESS:
      return { ...state, user: action.payload, errorMessage: '', isLoading: false };

    // case SIGNIN_SUCCESS:
    //   return {...state, token: action.payload, errorMessage: ''};

    default:
      return state;
  }
};

const signup = (dispatch: React.Dispatch<any>) => async (email: string, password: string) => {
  try {
    dispatch({ type: REMOVE_ERROR });
    // const response = await TrackerServer.post('/signup', {
    //   email,
    //   password,
    // });
    //
    // const token = response?.data?.token ?? null;
    // await AsyncStorage.setItem('token', token);
    // dispatch({ type: SIGNUP_SUCCESS, payload: response?.data?.token ?? null });
  } catch (err: any) {
    console.log(err);
    console.log(err.response.data);
    dispatch({
      type: ADD_ERROR,
      payload: err?.response?.data?.error ?? 'Something went wrong',
    });
  }
};

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: REMOVE_ERROR });
};

// login user
const signin = (dispatch: any) => async (email: string, password: string) => {
  try {
    clearErrorMessage(dispatch)();
    const user = await login(email, password);
    dispatch({ type: SIGNIN_SUCCESS, payload: user ?? null });
  } catch (error: unknown) {
    let errorMessage = '';
    switch ((error as AuthError).code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credentials':
      case 'auth/invalid-email':
        errorMessage = 'Invalid credentials';
        break;

      default:
        errorMessage = `Error signing in: ${
          (error as AuthError)?.message ?? 'Something went wrong'
        }`;
    }
    dispatch({
      type: ADD_ERROR,
      payload: errorMessage,
    });
  }
};

const signout = (dispatch: any) => {
  return async () => {
    // console.log('signout done');
    // await AsyncStorage.setItem('token', '');
    dispatch({ type: SIGNOUT });
    // navigate('Signin');
  };
};

const tryLocalSignin = (dispatch: any) => async () => {
  // if firebase user exists in asyncstorage, dispatch the SIGNIN_SUCCESS action.
  // const token = await AsyncStorage.getItem('token');
  // if (token) {
  //   return dispatch({ type: SIGNIN_SUCCESS, payload: token });
  // }
  setTimeout(() => {
    navigate('Login');
  }, 500);
};

const dataContext = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  initialState,
);

const { Context }: { Context: React.Context<IAuthContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as AuthProvider, Context as AuthContext };
