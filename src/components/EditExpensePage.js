import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense} from '../actions/expenses';
import {startRemoveExpense} from '../actions/expenses.js';

const EditExpensePage = (props) => {
   
    return(
    <div>
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
        </div>
    </div>
    <div className="content-container">
        <ExpenseForm
        expense = {props.expense}
        onSubmit={(expense)=>{
            props.dispatch(startEditExpense(props.expense.id, expense));
            console.log(props.match.params.id);
            props.history.push('/');
        }}
        />
        <button  className= "button button--secondary" onClick = {()=>{
            console.log(props.expense.id)
            props.dispatch(startRemoveExpense({id: props.expense.id}));
            props.history.push('/');
         }}>Remove</button>
    </div>
    </div>
)};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpensePage);