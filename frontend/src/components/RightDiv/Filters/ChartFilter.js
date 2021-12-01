import React, { useState, useEffect } from "react";

const ChartFilter = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedMonth, setSelectedMonth] = useState();

  useEffect(() => {
    getExpenses();
  }, []);
  useEffect(() => {
    getCategories();
  }, []);

  const getExpenses = async () => {
    let response = await fetch("/api/expenses/");
    let data = await response.json();
    setExpenses(data);
  };

  const getCategories = async () => {
    const response = await fetch("/api/categories/");
    const data = await response.json();
    setCategories(data);
  };

  const selectedYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const selectedCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
  };
  const selectedMonthHandler = event => {
    setSelectedMonth(event.target.value)
  }

  const searchByYearHandler = () => {};
  const searchByCategoryHandler = () => {};
  const searchByCatAndMonthHandler = () => {};

  // <div></div>;
  return (
    <form>
      <div>
        <label>Select Year</label>
        <select onChange={selectedYearHandler} value={selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
        <button type="button" onClick={searchByYearHandler}>
          Search by Year
        </button>
      </div>
      <div>
        <label>Select Category</label>
        <select>
          {categories.map((category, index) => {
            return <option key={index} value={category.id}>{category.title}</option>;
          })}
        </select>
        <button type="button" onClick={searchByCategoryHandler}>
          Search by Category
        </button>
      </div>
      <div>
        <label>Search by Category in Month</label>
        <select>
          <option value="0">January</option>
          <option value="1">february</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <button type="button" onClick={searchByCatAndMonthHandler}>Search by Month and Category</button>
      </div>
    </form>
  );
};

export default ChartFilter;
