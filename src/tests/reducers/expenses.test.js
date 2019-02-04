import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set defaul state', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
   // console.log('state',state);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
   // console.log('state',state);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: 4,
        description: 'test',
        note: '',
        amount: 5000,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});



test('should edit expense', () => {
    const updates = {note: 'abc'};
    const action = {   
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state[0].note).toEqual(updates.note);
});


test('should no edit expense', () => {
    const updates = {note: 'abc'};
    const action = {   
        type: 'EDIT_EXPENSE',
        id: -1,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should set expenses', ()=>{
    const action ={
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

test('', ()=>{

});