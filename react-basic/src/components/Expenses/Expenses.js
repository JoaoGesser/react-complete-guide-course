import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../Charts/ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')  
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() == filteredYear);
  
  const changedYearHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  }
  

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selected={filteredYear} onChangeYear={changedYearHandler}/>
      </div>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;