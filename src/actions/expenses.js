import uuid from 'uuid';
import database from '../firebase/firebase';
import { registerDecorator } from 'handlebars';
import { doesNotReject } from 'assert';

// conponent call action generator
// action generator returns object
// component dispactches object
// redux store chagnes

// component calls action generator
// aciton generator return function
// component dispatches function (?)
// function runs (dispatch other actions, and do whatever it wants)


// ADD_EXPENSE

export const addExpense = (expense) => ({
type: 'ADD_EXPENSE',
expense 
});

// START_ADD_EXPENSE


export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
      
        const expense = {description, note, amount, createdAt};

      return  database.ref(`/users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};
// REMOVE_EXPENSE

export const removeExpense = ({id} = {}) => ({
type: 'REMOVE_EXPENSE',
id
});

// START_REMOVE_EXPENSE

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch,getState) => {
    const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/expenses/${id}`)
        .remove().then(()=>{       
        dispatch(removeExpense({id}));
                });    
    };
};

// EDIT_EXPENSE

export const editExpense = (id, updates) =>({
type: 'EDIT_EXPENSE',
id,
updates
});

//

export const startEditExpense = (id, updates) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
      return  database.ref(`/users/${uid}/expenses/${id}`)
      .update(updates).then(()=>{   
        dispatch(editExpense(id, updates));
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
});

//export const startSetExpenses;
export const startSetExpenses = () => {
    return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses`)
    .once('value',(snapshot)=>{
    const expenses = [];
    
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()  
        });
    });
  
    dispatch(setExpenses(expenses));
    
    });

                            
           
    };
};


//database.ref('expenses')
// database.ref('expenses')
// .on('value',(snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//           id: childSnapshot.apiKey,
//           ...childSnapshot.val()  
//         });
//     });
//     console.log(expenses);
// });

// dispatch(startSetExpenses({
//     expenses
// }));
        