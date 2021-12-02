import React from 'react'

const SearchByCategory = (props) => {
    const filteredExpenses = props.expenses.filter((expense) => {
        const date = new Date(expense.created);
        return date.getFullYear() === props.selectedY
      });

    console.log(filteredExpenses)
    console.log(props.selectedC.id)

    const filteredExpensesbyCat = filteredExpenses.filter((expense) => {
            return expense.category === props.selectedC})

    console.log(filteredExpensesbyCat)

    return (
        <div>
            
        </div>
    )
}

export default SearchByCategory

