import React, { useState, useEffect } from "react";

const Filter1 = (props) => {
    const [year, setYear] = useState()

    const selectedYearHandler = (event) => {
        setYear(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSearchByYear(year)
    }

  return (
    <form onSubmit={submitHandler}>
      <label>Select Year</label>
      <select onChange={selectedYearHandler}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
      <button type="submit">
        Search by Year
      </button>
    </form>
  );
};

export default Filter1;
