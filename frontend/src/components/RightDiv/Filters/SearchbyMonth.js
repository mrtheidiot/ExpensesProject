import React from "react";
import Chart from "./Chart";

const SearchbyMonth = (props) => {
  const filteredExpenses = props.expenses.filter((expense) => {
    const date = new Date(expense.created);
    return date.getFullYear() == props.selectedY;
  });

  const filteredExpByMon = filteredExpenses.filter(
    (expense) => {
      const date = new Date(expense.created);
      return date.getMonth() == props.selectedM;
    }
  )

  const chartDataPoints = [];
  for (const i of props.categories) {
    chartDataPoints.push({ label: i.title, value: 0, id:i.id});
  }

  for (let i=0; i< chartDataPoints.length; i++) {
    for (const expense of filteredExpByMon) {
      //   console.log(chartDataPoints[i].id)
      //   console.log(expense.category)
        if (chartDataPoints[i].id == expense.category)
        chartDataPoints[i].value += +expense.price
    }
}

return <Chart dataPoints={chartDataPoints}/>
};

export default SearchbyMonth;
