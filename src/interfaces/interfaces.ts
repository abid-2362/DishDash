import { ThemeType } from '../theme';
import { Restaurant } from '../types';
import { User } from 'firebase/auth';

export type emptyFunction = () => void;
export type optionalCallbackFunction = (onSuccess?: emptyFunction) => void;

export interface IAuthState {
  user: User | null;
  errorMessage: string;
  isLoading: boolean;
}

export interface IAuthContext {
  state: IAuthState;
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  signout: emptyFunction;
  clearErrorMessage: emptyFunction;
  tryLocalSignin: emptyFunction;
}

export interface IRestaurantsState {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: string;
}

export interface IRestaurantsContext {
  state: IRestaurantsState;
  fetchRestaurants: (location: string) => Promise<void>;
  resetRestaurants: emptyFunction;
}

export interface StyledProps {
  theme: ThemeType;
}
