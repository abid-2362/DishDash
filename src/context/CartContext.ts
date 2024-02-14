import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { navigate } from '../navigators/RootNavigation.ts';
import { ActionType } from '../types';

type Item = {
  id: string;
  name: string;
  price: number;
};

interface ICartState {
  errorMessage: string;
  items: Item[];
}

interface ICartContext {
  state: ICartState;
}

const initialState: ICartState = {
  errorMessage: '',
  items: [],
};

/* REDUCER ACTIONS */
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const ADD_ITEM = 'ADD_ITEM';
const CLEAR_CART = 'CLEAR_CART';
/* /REDUCER ACTIONS */

const cartReducer = (state: ICartState, action: ActionType<any>) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case ADD_ITEM:
      // todo:: add logic to make sure 1 restaurant item is added
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: REMOVE_ERROR });
};

const dataContext = createDataContext(cartReducer, { clearErrorMessage }, initialState);

const { Context }: { Context: React.Context<ICartContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as CartProvider, Context as CartContext };
