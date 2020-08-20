import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
// initiall state
const initialState = {
  transactions: [ ]
};
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const deleteTransaction=(id)=>{
      dispatch({type:"DELETE_TRANSACTION",payload:id})
  }
  function addTransaction(transaction){
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  return (
    <GlobalContext.Provider
      value={{ transactions:state.transactions, addTransaction,deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
