import react, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpense(expenseData);
    setNewExpense(false);
  };

  const startNewExpenseHandler = () => {
    setNewExpense(true);
  };

  const stopEditingHandler = () => {
    setNewExpense = false;
  };

  return (
    <div className="new-expense">
      {!newExpense && (
        <button onClick={startNewExpenseHandler}>Add New Expenses</button>
      )}
      {newExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
