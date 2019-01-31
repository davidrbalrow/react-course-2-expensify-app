import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => (
   
    <div>
    <h3>Viewing {props.expenses.length} expense{props.expenses.length!==1 ? 's' : ''} totalling {selectExpensesTotal(props.expenses)}</h3>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
 

export default connect(mapStateToProps)(ExpensesSummary);