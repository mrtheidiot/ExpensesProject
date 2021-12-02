import React, { useState, useEffect } from "react";
import SearchByYear from "./SearchByYear";
import SearchByCategory from "./SearchByCategory";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import Filter3 from "./Filter3";
import SearchbyMonth from "./SearchbyMonth";

const ChartFilter = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectFilter, setSelectFilter] = useState(1);

  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedCategory, setSelectedCategory] = useState("Papierosy");
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
  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };
  const selectedMonthHandler = (month) => {
    setSelectedMonth(month);
    console.log(selectedMonth)
  };

  const searchByYearHandler = (year) => {
    setSelectFilter(1);
    setSelectedYear(year);
  };
  const searchByCategoryHandler = (event) => {
    event.preventDefault();
    setSelectFilter(2);
  };
  const searchByCatAndMonthHandler = () => {
    setSelectFilter(3);
  };

  // <div></div>;
  return (
    <div>
      <Filter1 onSearchByYear={searchByYearHandler} selected={selectedYear} />
      <div>
        <Filter2
          onSearchByCategory={selectedCategoryHandler}
          categories={categories}
        />
        <button type="button" onClick={searchByCategoryHandler}>
          Search by Category
        </button>
      </div>
      <div>
        <Filter3
          onSearchByMonth={selectedMonthHandler}
          categories={categories}
        />
        <button type="button" onClick={searchByCatAndMonthHandler}>
          Search by Month and Category
        </button>
      </div>

      <div>
        {selectFilter === 1 ? (
          <SearchByYear expenses={expenses} selected={selectedYear} />
        ) : null}
        {selectFilter === 2 ? (
          <SearchByCategory
            expenses={expenses}
            categories={categories}
            selectedY={selectedYear}
            selectedC={selectedCategory}
          />
        ) : null}
        {selectFilter === 3 ? <SearchbyMonth expenses={expenses} categories={categories} selectedM={selectedMonth} selectedY={selectedYear}/> : null}
      </div>
    </div>
  );
};

export default ChartFilter;
