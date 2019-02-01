import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref().set({
//     name: 'David Barlow',
//     age: 39,
//     isSingle: false,
//     location: {
//         city: 'Los Angeles',
//         country:'United States'
//     }
// }).then(()=> {
//     console.log('data synced');
// }).catch((e)=>{
//     console.log('This failed', e)
// });

// database.ref().update( {
//     employment: 'BC group'
// });

// database.ref().once('value').then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.age} years old and works at ${val.employment}`);
// });

// database.ref().update( {
//     employment: 'none'
// });

// const onValueChange = database.ref().on('value',(snapshot) => {
// const val = snapshot.val();
// console.log(`${val.name} is ${val.age} years old and works at ${val.employment}`);
// });


// database.ref('expenses').push({
//     description: 'coffee',
//     amount: 300,
//     ceratedAt: 1000,
//     note: ''
// });

// database.ref('expenses').push({
//     description: 'rent',
//     amount: 50000,
//     ceratedAt: 0,
//     note: 'rent for month'
// });

// database.ref('expenses').push({
//     description: 'shirt',
//     amount: 4000,
//     ceratedAt: 1000,
//     note: ''
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//           id: childSnapshot.apiKey,
//           ...childSnapshot.val()  
//         });
//     });
//     console.log(expenses);
// });

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

// database.ref('expenses').push({
//     description: 'shoes',
//     amount: 9000,
//     ceratedAt: 1237000,
//     note: ''
// });
