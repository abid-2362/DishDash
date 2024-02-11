import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { IAuthContext, IAuthState } from '../interfaces/interfaces.ts';
import * as authAPI from '../api/authentication.ts';
import { ActionType } from '../types';
import { AuthError } from 'firebase/auth';
import { navigate } from '../navigators/RootNavigation.ts';

const initialState: IAuthState = {
  user: null,
  errorMessage: '',
  isLoading: false,
};

/* REDUCER ACTIONS */
const SET_LOADING = 'SET_LOADING';
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNOUT = 'SIGNOUT';
const SET_USER = 'SET_USER';
/* /REDUCER ACTIONS */

const authReducer = (state: IAuthState, action: ActionType<any>) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case SET_USER:
      return { ...state, user: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case SIGNOUT:
      return { ...state, user: null, errorMessage: '' };

    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, errorMessage: '', isLoading: false };

    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

const beforeRequest = (dispatch: React.Dispatch<any>) => {
  dispatch({ type: REMOVE_ERROR });
  dispatch({ type: SET_LOADING, payload: true });
};
const afterRequest = (dispatch: React.Dispatch<any>) => {
  dispatch({ type: SET_LOADING, payload: false });
};
const signup = (dispatch: React.Dispatch<any>) => async (email: string, password: string) => {
  try {
    beforeRequest(dispatch);
    const user = await authAPI.signup(email, password);
    afterRequest(dispatch);
    dispatch({ type: SIGNUP_SUCCESS, payload: user ?? null });
  } catch (error: unknown) {
    const errorMessage = firebaseErrorHandler(error);
    dispatch({
      type: ADD_ERROR,
      payload: errorMessage,
    });
    afterRequest(dispatch);
  }
};

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: REMOVE_ERROR });
};

// firebase error handler
const firebaseErrorHandler = (error: unknown): string => {
  let errorMessage = '';
  switch ((error as AuthError).code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
    case 'auth/invalid-email':
      errorMessage = 'Invalid credentials';
      break;

    default:
      errorMessage = (error as AuthError)?.message ?? 'Something went wrong';
  }
  return errorMessage;
};

// login user
const signin = (dispatch: any) => async (email: string, password: string) => {
  try {
    beforeRequest(dispatch);
    const user = await authAPI.login(email, password);
    dispatch({ type: SIGNIN_SUCCESS, payload: user ?? null });
    afterRequest(dispatch);
  } catch (error: unknown) {
    const errorMessage = firebaseErrorHandler(error);
    dispatch({
      type: ADD_ERROR,
      payload: errorMessage,
    });
    afterRequest(dispatch);
  }
};

const signout = (dispatch: any) => async () => {
  await authAPI.logout();
  dispatch({ type: SIGNOUT });
};

const tryLocalSignin = (dispatch: any) => async () => {
  beforeRequest(dispatch);

  authAPI.retrieveSession(user => {
    if (user) {
      dispatch({ type: SET_USER, payload: user });
    } else {
      dispatch({ type: SIGNOUT });
      navigate('Login');
    }
    afterRequest(dispatch);
  });

  // setTimeout(() => {
  //   navigate('Login');
  //   afterRequest(dispatch);
  // }, 500);
};

const dataContext = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  initialState,
);

const { Context }: { Context: React.Context<IAuthContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as AuthProvider, Context as AuthContext };
