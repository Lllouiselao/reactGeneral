

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  <h2>Let's get started!</h2>
  const expense = [
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

  return(
    <div>
      <NewExpense/>
      <Expenses items = {expense}/>
    </div>
  )
 
}

export default App;
