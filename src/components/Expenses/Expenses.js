import react, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpnesesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (yearChanged) => {
    setFilterYear(yearChanged);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  

  // don't want react to go over every iten and updated every items so we give a 'key' value
  // because after we filter everything we then need to put final filter in the map so
  // we put the final filtered handelr before map
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpnesesChart expenses={filteredExpense}/>
        <ExpenseList items= {filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
