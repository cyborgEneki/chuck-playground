import * as actionTypes from './actions';
import { Action, InitialState } from '../types';

const reducer = (state: InitialState, action: Action): InitialState => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case actionTypes.GET_RANDOM_JOKE:
      return {
        ...state,
        joke: payload,
        loading: false
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;