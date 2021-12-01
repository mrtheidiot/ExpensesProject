import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./ExpensesList.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList2 from "./ExpensesList2";
import FilteredExpensesList from "./FilteredExpensesList";
import NewExpense from "./NewExpense";

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [showFilterComponent, setShowFilterComponent] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2021-11-20");
  const [filterofall, setfilterofall] = useState(1);


  useEffect(() => {
    getExpenses();
  }, []);

  const getExpenses = async () => {
    const response = await fetch("/api/expenses/");
    const data = await response.json();
    setExpenses(data);
  };

  const expenseDateHandler = (newDate) => {
    const date = new Date (newDate);
    setSelectedDate(date);
    setfilterofall(2);
    console.log(date);
  };

  return (
    <div className="expenses-list__card">
      <Card className="expenses-list">
        <NewExpense />
        <div className="expenses-list-buttons">
          <button
            className="expenses-list-button"
            onClick={() => {
              setShowFilterComponent(true);
            }}
          >
            Filter
          </button>
          <button className="expenses-list-button">All Expenses</button>
        </div>
        {showFilterComponent && (
          <ExpensesFilter
            selected={selectedDate}
            getExpensesDate={expenseDateHandler}
          />
        )}
        <div>
          {filterofall === 1 ? <ExpensesList2 expenses={expenses} /> : null}
          {filterofall === 2 ? <FilteredExpensesList date={JSON.stringify(selectedDate).slice(1, 11)} expenses={expenses} /> : null}
        </div>
      </Card>
    </div>
  );
};

export default ExpensesList;
