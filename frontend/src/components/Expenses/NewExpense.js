import React, { useState } from "react";

const NewExpense = () => {
  // GET CSRFToken FUNCIOTN

  function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
    const token = document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((c) => c.startsWith(name + "="));

    if (token.length === 0) {
      return null;
    }
    return decodeURIComponent(token[0].split("=")[1]);
  }
  const csrftoken = getCookie("csrftoken");

  //  END GET CSRF FUNCIOTN

  const [newExpenseTitle, setNewExpenseTitle] = useState();
  const [newExpensePrice, setNewExpensePrice] = useState();
  const [newExpenseCategory, setNewExpenseCategory] = useState();

  const newExpenseTitleHandler = (event) => {
    setNewExpenseTitle(event.target.value);
  };
  const newExpensePriceHandler = (event) => {
    setNewExpensePrice(event.target.value);
  };
  const newExpenseCategoryHandler = (event) => {
    setNewExpenseCategory(event.target.value);
  };

  let createNote = async () => {
    fetch("/api/expenses/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        title: newExpenseTitle,
        price: newExpensePrice,
        category: newExpenseCategory,
      })
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createNote();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" onChange={newExpenseTitleHandler}></input>
      </div>
      <div>
        <label>Price</label>
        <input type="text" onChange={newExpensePriceHandler}></input>
      </div>
      <div>
        <label>Category</label>
        <input type="text" onChange={newExpenseCategoryHandler}></input>
      </div>
      <button type="submit">Add New Expense</button>
    </form>
  );
};

export default NewExpense;
