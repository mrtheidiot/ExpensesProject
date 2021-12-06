import React, { useRef } from "react";

const Filter1 = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onSearchByYear(event.target.value);
  };

  return (
    <div>
      <label>Select Year</label>
      <select onChange={dropdownChangeHandler} value={props.selected}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Filter1;
