import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses.js';

const EditExpensePage = (props) => {
   
    return(
    <div>
        <ExpenseForm
        expense = {props.expense}
        onSubmit={(expense)=>{
            props.dispatch(editExpense(props.expense.id, expense));
            console.log(props.match.params.id);
            props.history.push('/');
        }}
        />
        <button  onClick = {()=>{
            console.log(props.expense.id)
            props.dispatch(removeExpense({id: props.expense.id}));
            props.history.push('/');
         }}>Remove</button>
    </div>
)};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpensePage);