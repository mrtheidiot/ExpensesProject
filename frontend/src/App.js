import ExpensesList from "./components/Expenses/ExpensesList";
import ChartFilter from "./components/RightDiv/Filters/ChartFilter";
import "./App.css";

function App() {
  return (
    <div className="main-app-div">
      <div className="main-app-sub-div1">
        <ExpensesList />
      </div>
      <div className="main-app-sub-div2">
        <ChartFilter />

      </div>
    </div>
  );
}

export default App;
