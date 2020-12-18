import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const initialState = {
    isCoach: false,
  };

  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
