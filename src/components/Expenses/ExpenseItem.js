import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

// appProps was passed from App.js the value passed from here and then pass to 
// ExpenseDate.js on line 13
const ExpenseItem = (appProps) => {
  return (
    <ul>
      <Card className="expense-item">
        <ExpenseDate date={appProps.date} />
        <div className="expense-item__description">
          <h2>{appProps.title}</h2>
          <div className="expense-item__price">{appProps.price}</div>
        </div>
      </Card>
    </ul>
  );
};

export default ExpenseItem;
