import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList2 = (props) => {
  return (
    <div>
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.created}
            price={expense.price}
            category={expense.category}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ExpensesList2;
