import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const [selectedDate, setSelectedDate] = useState();

  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const date = {
    //   date: new Date(selectedDate),
    // };
    // props.getExpensesDate(date);
    props.getExpensesDate(selectedDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Date</label>
      <input
        type="date"
        min="2021-11-20"
        max="2024-12-31"
        value={props.selected}
        onChange={dateChangeHandler}
      ></input>
      <button type="submit">Szukaj</button>
    </form>
  );
};

export default ExpensesFilter;

// const [selectedMonth, setSelectedMonth] = useState('Jan');
// const [selectedDay, setSelectedDay] = useState('1');

// const yearSelectionHandler = (event) => {
//   setSelectedYear(event.target.value);
//   console.log(selectedYear)
// };
// const monthSelectionHandler = (event) => {
//   setSelectedMonth(event.target.value);
//   console.log(selectedMonth)
// };
// const daySelectionHandler = (event) => {
//   setSelectedDay(event.target.value);
//   console.log(selectedDay)

// div className="expenses-filter">
//       <div className="expenses-filter-year">
//         <label>Year</label>
//         <select onChange={yearSelectionHandler}>
//           <option value="2023">2023</option>
//           <option value="2022">2022</option>
//           <option value="2021">2021</option>
//         </select>
//       </div>
//       <div className="expenses-filter-month">
//         <label>Month</label>
//         <select onChange={monthSelectionHandler}>
//           <option value="January">Jan</option>
//           <option value="February">Feb</option>
//           <option value="March">March</option>
//           <option value="April">April</option>
//           <option value="May">May</option>
//           <option value="June">June</option>
//           <option value="July">July</option>
//           <option value="Aug">Aug</option>
//           <option value="Sep">Sep</option>
//           <option value="Oct">Oct</option>
//           <option value="Nov">Nov</option>
//           <option value="Dec">Dec</option>
//         </select>
//       </div>
//       <div className="expenses-filter-day">
//         <label>Day</label>
//         <input onChange={daySelectionHandler}></input>
//       </div>
//       <button onClick={submitHandler}></button>
//     </div>
