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

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
      
        const expense = {description, note, amount, createdAt};

      return  database.ref('expenses').push(expense).then((ref)=>{
            
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
})

// EDIT_EXPENSE

export const editExpense = (id, updates) =>({
type: 'EDIT_EXPENSE',
id,
updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
});

//export const startSetExpenses;
export const startSetExpenses = () => {
    return (dispatch) => {
        
        // const expenses = [];

        // const expenses = {description, note, amount, createdAt};
    return database.ref('expenses')
    .once('value',(snapshot)=>{
    const expenses = [];
    
    snapshot.forEach((childSnapshot)=>{
        console.log('id',childSnapshot.key);
        console.log('time',Math.floor(new Date().getTime()/1000.0));
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()  
        });
    });
  
    console.log(expenses);
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
        