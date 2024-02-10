import createDataContext from './createDataContext.tsx';
import { IRestaurantsContext, IRestaurantsState } from '../interfaces/interfaces.ts';
import { navigate } from '../navigators/RootNavigation.ts';
import * as restaurantApi from '../api/restaurants.ts';

const initialState: IRestaurantsState = {
  restaurants: [],
  isLoading: false,
  error: '',
};

/* REDUCER ACTIONS */
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const SIGNOUT = 'SIGNOUT';
const SET_RESTURANTS = 'SET_RESTURANTS';
const SET_LOADING = 'SET_LOADING';
/* /REDUCER ACTIONS */

const restaurantsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };

    case REMOVE_ERROR:
      return { ...state, errorMessage: '' };

    case SET_RESTURANTS:
      return { ...state, restaurants: action.payload };

    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    case SIGNOUT:
      console.log('nullifying token');
      return { ...state, token: null };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: REMOVE_ERROR });
};

const setIsLoading = (dispatch: any, isLoading: boolean) => {
  dispatch({ type: SET_LOADING, payload: isLoading });
};

const resetRestaurants = (dispatch: any) => () => {
  dispatch({ type: SET_RESTURANTS, payload: [] });
};
const fetchRestaurants = (dispatch: any) => async (location: string) => {
  try {
    setIsLoading(dispatch, true);
    clearErrorMessage(dispatch)();

    setTimeout(async () => {
      const response = await restaurantApi.fetchRestaurants(location);
      dispatch({ type: SET_RESTURANTS, payload: response });
      setIsLoading(dispatch, false);
    }, 1000);
  } catch (err: any) {
    console.log(err);
    console.log(err.response.data);
    dispatch({
      type: ADD_ERROR,
      payload: err?.response?.data?.error ?? 'Something went wrong',
    });
    setIsLoading(dispatch, false);
  }
};

const dataContext = createDataContext(
  restaurantsReducer,
  { fetchRestaurants, clearErrorMessage, resetRestaurants },
  initialState,
);

const { Context }: { Context: React.Context<IRestaurantsContext> } = dataContext;
const { Provider } = dataContext;
export { Provider as RestaurantsProvider, Context as RestaurantsContext };
