import * as React from 'react';
import createDataContext from './createDataContext.tsx';
import { navigate } from '../navigators/RootNavigation.ts';
import * as locationAPI from '../api/locations.ts';
import { ActionType } from '../types';

export type LatLong = { lat: number; lng: number };

interface ILocationState {
  errorMessage: string;
  keyword: string;
  location: string;
  isLoading: boolean;
}

interface ILocationContext {
  state: ILocationState;
  onSearch: (keyword: string) => void;
  setLocation: (location: string) => void;
}

const initialState: ILocationState = {
  errorMessage: '',
  keyword: '',
  location: '',
  isLoading: false,
};

/* REDUCER ACTIONS */
const SET_LOADING = 'SET_LOADING';
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const SET_LOCATION = 'SET_LOCATION';
const SET_KEYWORD = 'SET_KEYWORD';
/* /REDUCER ACTIONS */

const locationReducer = (state: ILocationState, action: ActionType<any>) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };

    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch: React.Dispatch<ActionType<any>>) => () => {
  dispatch({ type: REMOVE_ERROR });
};

// function to setLocations
const setLocation = (dispatch: React.Dispatch<ActionType<any>>) => (location: string) => {
  dispatch({ type: SET_LOCATION, payload: location });
};

const onSearch = (dispatch: React.Dispatch<ActionType<any>>) => async (searchTerm: string) => {
  if (!searchTerm) {
    return;
  }
  dispatch({ type: SET_LOADING, payload: true });
  dispatch({ type: SET_KEYWORD, payload: searchTerm });
  try {
    // locationRequest
    const result = await locationAPI.fetchLocation(searchTerm.toLowerCase());
    setLocation(dispatch)(result);
    // now we have the location, we need to fetch the restaurants based on this location
    console.log('LocationContext.ts', 'result', result);
    dispatch({ type: SET_LOADING, payload: false });
  } catch (error) {
    let err;
    if (error && (error as any).message) {
      err = (error as any).message;
    } else {
      err = String(error);
      console.log('LocationContext.ts', 'error', err);
    }
    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: ADD_ERROR, payload: err });
  }
};

const dataContext = createDataContext(
  locationReducer,
  { clearErrorMessage, onSearch, setLocation },
  initialState,
);

const { Context }: { Context: React.Context<ILocationContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as LocationProvider, Context as LocationContext };
