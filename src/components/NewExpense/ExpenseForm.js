import react, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    
    // to use one state need to pass in an object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event)=>{
        setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // also don't forget can't lose other two input
        // but also we need to upgrade on the previous state func this will always the latest
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
        // });
        

    };

    const amountChangeHandler = (event)=>{
        setenteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })
    };

    const dateChangeHandler = (event)=>{
        setenteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    };

    const submitHandler = (event) =>{
        // since each time submit browser get refresh keep not refreshing
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            // convert date into an object since we only gater its string but we want date property
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    }

    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__conntrol">
                <label>Title</label>
                <input type = "text" 
                value = {enteredTitle}
                onChange = {titleChangeHandler}/>
            </div>
            <div className="new-expense__conntrol">
                <label>Amount</label>
                <input type = "number" min="0.01" step = "0.01" 
                value = {enteredAmount}
                onChange = {amountChangeHandler}/>
            </div>
            <div className="new-expense__conntrol">
                <label>Date</label>
                <input type = "date" min= "2019-01-01" max = "2022-12-31" 
                value = {enteredDate}
                onChange = {dateChangeHandler}/>
            </div>
            <div className = "new-expense__actions">
                <button type = "submit">Add Expenses</button>
            </div>

        </div>
    </form>

    )
}

export default ExpenseForm