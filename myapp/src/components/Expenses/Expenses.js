import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(null);

  const changeYearFilterHandler = (newYear) => {
    setFilteredYear(newYear);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYearFilter={changeYearFilterHandler} />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
