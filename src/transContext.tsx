import React from "react";
import Reducer from "./Reducer.jsx";

const initialTransactions = [];

export const TransactionContext = React.createContext<{
  transactions: { id: number; amount: number; desc: string }[];
  addTransaction: (transObj: { amount: number; desc: string; id: any }) => void;
  deleteTransaction: (transObj: { id: any }) => void;
}>({
  transactions: initialTransactions,
  addTransaction: () => {},
  deleteTransaction: () => {},
});

const TransactionProvider = ({ children }) => {
  const [state, dispatch]: any = React.useReducer<any>(
    Reducer,
    initialTransactions
  );

  function addTransaction(transObj: {
    amount: number;
    desc: string;
    id: number;
  }) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
        id: transObj.id,
      },
    });
  }
  function deleteTransaction(transObj: { id: number }) {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: { id: transObj.id },
    });
  }

  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export default TransactionProvider;
