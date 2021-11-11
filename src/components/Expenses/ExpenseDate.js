import "./ExpenseDate.css";

// the Itemprops was passed from ExpenseItem
const ExpenseDate = (Itemprops) => {
  const month = Itemprops.date.toLocaleString("en-US", { month: "long" });
  const day = Itemprops.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = Itemprops.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
