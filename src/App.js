import react, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// this is the initial expense data
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 800,
    date: new Date(2021, 3, 1),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // initial was sent into the useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // we want to put the expense(object) here into the const expense the array above
  // everytime update state by previous state using function to update the state array
  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
