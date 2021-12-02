import React from "react";
import Chart from "./Chart";

const SearchByYear = (props) => {
  const filteredExpenses = props.expenses.filter((expense) => {
    const date = new Date(expense.created);
    return date.getFullYear() === props.selected
  });

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of filteredExpenses) {
    const expneseMonth = new Date(expense.created).getMonth()
    chartDataPoints[expneseMonth].value += +expense.price;
  }


  return (
    <Chart dataPoints={chartDataPoints}/>
  );
};

export default SearchByYear;
