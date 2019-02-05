import {startAddExpense
    , addExpense
    , editExpense
    , removeExpense
    , setExpenses
    , startSetExpenses
    , startRemoveExpense
    , startEditExpense
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase.js';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id] = {description, note, amount, createdAt};
    })
    database.ref('expenses').set(expensesData).then(()=> done());
})

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
const action = addExpense(expenses[2]);
expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
});
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'this one',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

});

test('should add expense defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });

});



test('should setup set expense action boject with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should delete expense from firebase', (done) => {
    const store = createMockStore({});
    const id = 1;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should update expense from firebase',(done)=>{
    const store = createMockStore({});
    const id = 1;
    const updates = {amount: 295};
    store.dispatch(startEditExpense(id, updates)).then(()=>{
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
                id,
                updates
        });
       return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
       
        expect(snapshot.val().amount).toEqual(updates.amount);
        done();
    });
    });
//});

// test('should setup start edit expense',()=>{
//     const action = editExpense('abc123',
//         {amount : 0}
//     );

//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: 'abc123',
//        updates: {amount: 0} 
//     });
// });

// test('should setup add expense with provided values',()=>{
//     const expenseData = {
//         description : '', 
//         note : '', 
//         amount : 0, 
//         createdAt : 0 
//         };
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             ...expenseData,
//             id: expect.any(String)
//         }
//     });  
// })