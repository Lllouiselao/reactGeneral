import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";


const Expenses =(props) =>{
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = yearChanged =>{
    setFilterYear(yearChanged);
  };

  return (
      <div>
      <Card className ="expenses">
        <ExpensesFilter selected = {filterYear} onFilterChange = {filterChangeHandler}/>
        {props.items.map(expense => (
        <ExpenseItem 
          title = {expense.title} 
          price = {expense.amount} 
          date = {expense.date}
          />
          ))}  
      </Card>
      </div>
    )
}

export default Expenses;