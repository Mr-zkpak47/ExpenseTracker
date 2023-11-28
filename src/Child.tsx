import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext.tsx";

const Child = () => {
  const { transactions, addTransaction, deleteTransaction } =
    useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTransaction({
      amount: Number(amount),
      desc: text,
      id: id,
    });
    setId(id + 1);
    setText("");
    setAmount(0);
    let inputs = document.body.querySelectorAll("input");
    inputs[0].value = "";
    inputs[1].value = "";
  };
  const handleDelete = (id) => {
    deleteTransaction({
      id: id,
    });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-2 mt-5 ">
        <h1 className="self-baseline text-xl font-semibold">History</h1>
        <hr className="bg-gray-300 w-full h-0.5"></hr>
        <ul className="flex flex-col w-full justify-center items-center gap-y-2">
          {transactions.map((transaction) => (
            <>
              <li
                key={transaction.id}
                className="flex justify-between flex-row bg-gray-50 w-full p-2 shadow-md relative h-10 items-center overflow-hidden"
              >
                <span className="item flex flex-row justify-between items-center absolute  w-11/12 md:hover:w-4/5 transition-all">
                  <span>{transaction.desc}</span>
                  {/* <span>${(transaction.amount<0?-"$"-Number(transaction.amount):(transaction.amount)).toFixed(2)}</span> */}
                  <span>
                    {transaction.amount < 0 ? "-" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </span>
                <button
                  className={`cross absolute top-0  h-full w-10 ${
                    transaction.id % 2 === 0 ? "bg-violet-400" : "bg-rose-400"
                  } transition-all`}
                  type="button"
                  onClick={() => {
                    handleDelete(transaction.id);
                  }}
                >
                  <i className="fa-solid fa-xmark fa-lg text-gray-600 cursor-pointer hover:text-gray-800 transition"></i>
                </button>
              </li>
            </>
          ))}
        </ul>
        <h1 className="self-baseline text-xl font-semibold mt-5">
          Add new transaction
        </h1>
        <hr className="bg-gray-300 w-full h-0.5"></hr>
        <h3 className="self-baseline text-md">Text</h3>
        <input
          className="w-full shadow p-1 border border-gray-300 rounded placeholder:text-gray-500 pl-3 outline-none mt-2"
          type="text"
          placeholder="Enter text..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <span className="flex flex-col">
          <h3 className="self-baseline text-md mt-2">Amount</h3>
          <span className="text-bs self-baseline">
            (negative - Expense, positive - Income)
          </span>
        </span>
        <input
          className="w-full shadow p-1 border border-gray-300 rounded placeholder:text-gray-500 pl-3 outline-none mt-2"
          placeholder="Enter amount..."
          type="number"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
        <input
          className="bg-violet-400 w-full mt-2 rounded h-10 font-bold text-md uppercase text-white transition cursor-pointer transition-all hover:bg-violet-500 tracking-wider flex justify-center items-center"
          type="submit"
          value="Add Transaction"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        />
      </div>
    </>
  );
};
export default Child;
