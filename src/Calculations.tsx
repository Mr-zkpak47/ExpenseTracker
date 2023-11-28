import React, { useContext } from "react";
import { TransactionContext } from "./transContext.tsx";
const Calculations = () => {
  const { transactions } = useContext(TransactionContext);
  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount;
      }
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += Math.abs(transactions[i].amount); // Use Math.abs to calculate the absolute value of expense
      }
    }
    return expense;
  };
  return (
    <>
      <div className="flex flex-row justify-between w-full  mt-5 py-3 px-10 shadow-md bg-gray-50">
        <span className="flex flex-col justify-center items-center">
          <span className="font-bold uppercase">Income</span>
          <span className="font-bold text-2xl text-teal-500">${getIncome().toFixed(2)}</span>
        </span>
        <span className="flex flex-col justify-center items-center">
          <span className="font-bold uppercase">Expense</span>
          <span className="font-bold text-2xl text-red-500">${getExpense().toFixed(2)}</span>
        </span>
      </div>
    </>
  );
};
export default Calculations;
export const getIncome = () => getIncome();
