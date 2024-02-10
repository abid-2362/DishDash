import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { ActionType, Restaurant } from '../types';

interface IFavoritesState {
  errorMessage: string;
  favorites: Restaurant[];
}

interface IFavoritesContext {
  state: IFavoritesState;
  addFavorite: (restaurant: Restaurant) => void;
  removeFavorite: (id: string) => void;
}

const initialState: IFavoritesState = {
  errorMessage: '',
  favorites: [],
};

/* REDUCER ACTIONS */
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
/* /REDUCER ACTIONS */

const favoritesReducer = (state: IFavoritesState, action: ActionType<any>) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(f => f.id !== action.payload),
      };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: REMOVE_ERROR });
};

const addFavorite = (dispatch: any) => (restaurant: Restaurant) => {
  dispatch({ type: ADD_FAVORITE, payload: restaurant });
};

const removeFavorite = (dispatch: any) => (id: string) => {
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};

const dataContext = createDataContext(
  favoritesReducer,
  {
    clearErrorMessage,
    addFavorite,
    removeFavorite,
  },
  initialState,
);

const { Context }: { Context: React.Context<IFavoritesContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as FavoritesProvider, Context as FavoritesContext };
