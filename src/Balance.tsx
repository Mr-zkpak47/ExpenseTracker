import React, { useContext } from "react";
import { TransactionContext } from "./transContext.tsx";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.length > 0 ? amounts.reduce((acc, items) => (acc += items)).toFixed(2) : 0;
  return (
    <span className="self-start mt-5 flex flex-col">
      <span className=" uppercase font-semibold">Your Balance :</span>
      <span className="text-3xl font-bold">${Number(total).toFixed(2)}</span>
    </span>
  );
};
export default Balance;
