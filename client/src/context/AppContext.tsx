import { createContext, Dispatch, useEffect, useReducer } from "react";
import reducer from "./reducers";
import * as actionTypes from "./actions";
import { InitialState } from "../types";

const initialState = {
  categories: [],
  joke: [],
  loading: false,
  error: null
};

const AppContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

type Props = {
  children: React.ReactNode
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true });

    fetch("/")
      .then(res => res.json())
      .then(data => dispatch({ type: actionTypes.GET_CATEGORIES, payload: data.categories }))
      .catch(err => dispatch({ type: actionTypes.SET_ERROR, payload: err.message }));
  }, []);

  useEffect(() => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true });

    fetch("/")
      .then(res => res.json())
      .then(data => dispatch({ type: actionTypes.GET_RANDOM_JOKE, payload: data.joke }))
      .catch(err => dispatch({ type: actionTypes.SET_ERROR, payload: err.message }));
  }, []);

  return <AppContext.Provider value={{ state, dispatch }}> {children} </AppContext.Provider>;
};

export { AppContext, AppContextProvider };