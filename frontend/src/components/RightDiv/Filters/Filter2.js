import React from "react";

const Filter2 = (props) => {
  // onSearchByCategory

  const selectedCategoryHandler = (event) => {
    props.onSearchByCategory(event.target.value)
  }
  return (
    <div>
      <label>Select Category</label>
      <select onChange={selectedCategoryHandler}>
        {props.categories.map((category, index) => {
          return (
            <option key={index} value={category.id}>
              {category.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter2;
