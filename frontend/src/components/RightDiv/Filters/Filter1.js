import React, { useRef } from "react";

const Filter1 = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onSearchByYear(event.target.value);
  };

  return (
    <div >
      <select onChange={dropdownChangeHandler} value={props.selected} style={{ width: "100%" }}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Filter1;
