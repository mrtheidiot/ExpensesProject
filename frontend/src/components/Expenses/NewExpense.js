import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const NewExpense = (props) => {
  // GET CSRFToken FUNCIOTN
  const [error, setError] = useState(null)

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

  const newExpenseTitle = useRef();
  const newExpensePrice= useRef();
  const newExpenseCategory = useRef();

  let createNote = async (title, price, category) => {
    console.log(title, price, category)
    fetch("/api/expenses/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        title: title,
        price: price,
        category: category,
      })
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const title = newExpenseTitle.current.value;
    const price = newExpensePrice.current.value;
    const category = newExpenseCategory.current.value;
    if (title.trim().length === 0 || price.trim().length === 0 || category.trim().length == 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter correct values."
      })
      return;
    }
    createNote(title, price, category);
    props.onSetAddExpense();
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
    {error && <ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler} />}

    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" ref={newExpenseTitle}></input>
      </div>
      <div>
        <label>Price</label>
        <input type="text" ref={newExpensePrice}></input>
      </div>
      <div>
        <label>Category</label>
        <input type="text" ref={newExpenseCategory} ></input>
      </div>
      <button type="submit">Add New Expense</button>
      <button type="button" onClick={()=>{props.onSetAddExpense(1)}}>Cancel</button>
    </form>
    </div>
  );
};

export default NewExpense;
