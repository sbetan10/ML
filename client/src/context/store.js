import React, { createContext, useReducer } from 'react';
import {initialState} from './initialState'
import { categoriesReducer } from './categoriesReducer'

// App Global Context
export const Context = createContext();
// App Global Context Provider Component
export const Store = props => {
  const [globalState, dispatch] = useReducer(categoriesReducer, initialState);

  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
