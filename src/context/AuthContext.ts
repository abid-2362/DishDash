import * as React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import TrackerServer from '../api/tracker.ts';
import createDataContext from './createDataContext.tsx';
import { IAuthContext, IAuthState } from '../interfaces/interfaces.ts';
import { navigate } from '../navigators/RootNavigation.ts';
const initialState: IAuthState = {
  token: null,
  errorMessage: '',
};

/* REDUCER ACTIONS */
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNOUT = 'SIGNOUT';
/* /REDUCER ACTIONS */

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case SIGNOUT:
      console.log('nullifying token');
      return { ...state, token: null };

    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return { ...state, token: action.payload, errorMessage: '' };

    // case SIGNIN_SUCCESS:
    //   return {...state, token: action.payload, errorMessage: ''};

    default:
      return state;
  }
};

const signup = (dispatch: any) => async (email: string, password: string) => {
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
const signin = (dispatch: any) => async (email: string, password: string) => {
  try {
    clearErrorMessage(dispatch)();
    // const response = await TrackerServer.post('/signin', {
    //   email,
    //   password,
    // });
    //
    // const token = response?.data?.token ?? null;
    // await AsyncStorage.setItem('token', token);
    // dispatch({ type: SIGNIN_SUCCESS, payload: response?.data?.token ?? null });
  } catch (err: any) {
    console.log(err);
    console.log(err.response.data);
    dispatch({
      type: ADD_ERROR,
      payload: err?.response?.data?.error ?? 'Something went wrong',
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
  // const token = await AsyncStorage.getItem('token');
  // if (token) {
  //   return dispatch({ type: SIGNIN_SUCCESS, payload: token });
  // }
  // navigate('Signin');
};

const dataContext = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  initialState,
);

const { Context }: { Context: React.Context<IAuthContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as AuthProvider, Context as AuthContext };
