import { ThemeType } from '../theme';

export type emptyFunction = () => void;
export type optionalCallbackFunction = (onSuccess?: emptyFunction) => void;

export interface IAuthState {
  token: null | string;
  errorMessage: string;
}
export interface IAuthContext {
  state: IAuthState;
  signin: (title: string, content: string, onSuccess?: emptyFunction) => void;
  signup: (email: string, password: string) => void;
  signout: emptyFunction;
  clearErrorMessage: emptyFunction;
  tryLocalSignin: emptyFunction;
}

export interface StyledProps {
  theme: ThemeType;
}
