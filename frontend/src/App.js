import ExpensesList from "./components/Expenses/ExpensesList";
import ChartFilter from "./components/RightDiv/Filters/ChartFilter";
import "./App.css";

function App() {
  return (
    <div className="main-app-div">
      <div className="main-app-sub-div">
        <ExpensesList />
      </div>
      <div className="main-app-sub-div">
        <ChartFilter />
        <div>Hello new git hub</div>
      </div>
    </div>
  );
}

export default App;
