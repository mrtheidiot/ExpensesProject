import React from "react";
import ExpenseItem from "./ExpenseItem";
const FilteredExpensesList = (props) => {
  const slicedData = props.date.slice(0, 11);

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.created.slice(0, 10) === slicedData;
  });

  // <h1>{expense.created.slice(0, 10)}</h1>
  return (
    <div>
      {filteredExpenses.map((expense, index) => {
        return (
          <div>
            <ExpenseItem
              title={expense.title}
              date={expense.created}
              price={expense.price}
              category={expense.category}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FilteredExpensesList;
