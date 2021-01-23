import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transaction: [
    { id: 1, text: 'Flower', amounts: 20 },

  ]
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState , //() => {
    //const localdata = localStorage.getItem('Budget');
    //return localdata ? JSON.parse(localdata) : [];
  );

  console.log(initialState.transaction)


  //Local Storage
  useEffect( () => {
    localStorage.setItem('Budget', JSON.stringify(initialState));
  },  )
  

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });

    
  }

  return (<GlobalContext.Provider value={{
    transaction: state.transaction,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}