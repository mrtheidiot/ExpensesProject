import React, { useState, useEffect } from "react";
import SearchByYear from "./SearchByYear";
import SearchByCategory from "./SearchByCategory";
import Filter1 from "./Filter1";

const ChartFilter = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectFilter, setSelectFilter] = useState(1);
  
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedCategory, setSelectedCategory] = useState('Papierosy');
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
  
  
  // const selectedYearHandler = (event) => {
  //   setSelectedYear(event.target.value);
  //   console.log(selectedYear)
  // };
  const selectedCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
  };
  const selectedMonthHandler = (event) => {
    setSelectedMonth(event.target.value);
  };

  const searchByYearHandler = (year) => {
    setSelectFilter(1);
    setSelectedYear(year);
    console.log(selectedYear)
  };
  const searchByCategoryHandler = () => {
    setSelectFilter(2);
  };
  const searchByCatAndMonthHandler = () => {};

  // <div></div>;
  return (
    <div>
        <Filter1 onSearchByYear={searchByYearHandler} />
        <div>
          <label>Select Category</label>
          <select onChange={selectedCategoryHandler} value={selectedCategory}>
            {/* {categories.map((category, index) => {
              return (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              );
            })} */}
            <option value="Akohol" >Alkohol</option>
            <option value="Papierosy" >Papierosy</option>
            <option value="Sex" >Sex</option>
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
          <button type="button" onClick={searchByCatAndMonthHandler}>
            Search by Month and Category
          </button>
        </div>

      <div>
        {selectFilter === 1 ? <SearchByYear expenses = {expenses} selected = {selectedYear}/> : null}
        {selectFilter === 2 ? <SearchByCategory expenses = {expenses} categories = {categories} selectedY = {selectedYear} selectedC = {selectedCategory} /> : null}
      </div>
    </div>
  );
};

export default ChartFilter;
