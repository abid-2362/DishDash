import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { navigate } from '../navigators/RootNavigation.ts';
import { ActionType, Item, Restaurant } from '../types';
import { calculatePrice } from '../utils/utils.ts';

interface ICartState {
  errorMessage: string;
  items: Item[];
  currentRestaurant: Restaurant | null;
}

interface ICartContext {
  state: ICartState;
  addToCart: (item: Item, restaurant: Restaurant) => void;
  clearCart: () => void;
}

const initialState: ICartState = {
  errorMessage: '',
  items: [],
  currentRestaurant: null,
};

/* REDUCER ACTIONS */
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const ADD_ITEM = 'ADD_ITEM';
const SET_CURRENT_RESTAURANT = 'SET_CURRENT_RESTAURANT';
const CLEAR_CART = 'CLEAR_CART';

/* /REDUCER ACTIONS */

interface IAddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface IAddErrorAction {
  type: typeof ADD_ERROR;
  payload: string;
}

interface IRemoveErrorAction {
  type: typeof REMOVE_ERROR;
}

interface IClearCartAction {
  type: typeof CLEAR_CART;
}

interface ISetCurrentRestaurantAction {
  type: typeof SET_CURRENT_RESTAURANT;
  payload: Restaurant;
}

const cartReducer = (
  state: ICartState,
  action:
    | IAddItemAction
    | IAddErrorAction
    | IRemoveErrorAction
    | IClearCartAction
    | ISetCurrentRestaurantAction,
) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case SET_CURRENT_RESTAURANT:
      return {
        ...state,
        currentRestaurant: action.payload,
      };

    case ADD_ITEM:
      const isNewRestaurant = state.items.some(item => {
        return item.restaurantId !== action.payload.restaurantId;
      });
      if (isNewRestaurant) {
        return {
          ...state,
          items: [action.payload],
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch: React.Dispatch<any>) => () => {
  dispatch({ type: REMOVE_ERROR });
};

const addToCart =
  (dispatch: React.Dispatch<ActionType<Item | Restaurant>>) =>
  (item: Item, restaurant: Restaurant) => {
    dispatch({ type: SET_CURRENT_RESTAURANT, payload: restaurant });
    dispatch({ type: ADD_ITEM, payload: item });
    navigate('BottomTabsNavigator', {
      screen: 'CartNavigator',
      params: {
        screen: 'CartScreen',
      },
    });
  };

const clearCart = (dispatch: React.Dispatch<any>) => () => {
  dispatch({ type: CLEAR_CART });
};

const dataContext = createDataContext(
  cartReducer,
  { clearErrorMessage, addToCart, clearCart },
  initialState,
);

const { Context }: { Context: React.Context<ICartContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as CartProvider, Context as CartContext };
