import React from "react";
import "./App.css"
import TransactionProvider from "./transContext.tsx";
import Child from "./Child.tsx";
import Header from "./Header.tsx"
import Balance from "./Balance.tsx";
import Calculations from "./Calculations.tsx";
const App = () => {
  return (
    <section className="flex justify-center items-center bg-gray-200 py-10 scroll-smooth">
    <TransactionProvider>
      <section className="container bg-gray-100 w-96 flex flex-col items-center p-10 shadow-md">
      <Header/>
      <Balance/>
      <Calculations/>
      <Child />
      </section>
    </TransactionProvider>
    </section>
  );
};
export default App;
