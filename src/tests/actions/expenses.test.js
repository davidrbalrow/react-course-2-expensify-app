import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',() => {
    const action = removeExpense({id: 'abc123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('should setup edit expense',()=>{
    const action = editExpense('abc123',
        {amount : 0}
    );

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
       updates: {amount: 0} 
    });
});

test('should setup add expense with provided values',()=>{
const expenseData = {
    description : 'Rent', 
    note : 'This was last months rent', 
    amount : 4020, 
    createdAt : 1000 
    };
const action = addExpense(expenseData);
expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
        ...expenseData,
        id: expect.any(String)
    }
});
});

test('should setup add expense with provided values',()=>{
    const expenseData = {
        description : '', 
        note : '', 
        amount : 0, 
        createdAt : 0 
        };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });  
})