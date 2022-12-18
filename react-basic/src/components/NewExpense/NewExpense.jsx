import React, {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
            
        }

        props.onAddExpense(expenseData);
        setOpenForm(false);
    }

    const cancelExpenseForm = () => {
        setOpenForm(false);
    }

    const openExpenseForm = () => {
        setOpenForm(true);
    }

    return (
        <div className='new-expense'>
            {openForm && <ExpenseForm onCacelExpenseForm={cancelExpenseForm} onSaveExpenseData={saveExpenseDataHandler}/>}
            {!openForm && <button onClick={openExpenseForm}>Add new Expense</button>}
            
        </div>    
    );
}

export default NewExpense;