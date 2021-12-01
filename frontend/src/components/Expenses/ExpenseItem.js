import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React, { useState, useEffect } from "react";

const ExpenseItem = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch("/api/categories/");
    const data = await response.json();
    setCategories(data);
  };

  let categorytitle;
  for (const category of categories) {
    if (category.id === props.category) {
      categorytitle = category.title;
    }
  }

  return (
    <Card className="expenses-item-card">
      <div className="expense-item__general">
        <ExpenseDate date={props.date} />
        <div>
          <div>Category: {categorytitle}</div>
          <div className="expense-item__title">{props.title}</div>
        </div>
        <div className="expense-item__price">{props.price} zł</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
