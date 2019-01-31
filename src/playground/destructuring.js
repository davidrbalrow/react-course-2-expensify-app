//object destructuring

// console.log('destruct');

// const person = {
//     name: 'Dave',
//     age: 39,
//     location:{
//         city: 'LA',
//         temp: 70
//     }
// };

// //default value for name
// const {name: firstName='Anonymous', age} = person;
// // const name = person.name;
// // const age = peson.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: tempurature} = person.location;

// if (city && tempurature){
//     console.log(`It's ${city} in ${tempurature}`);
//     }

// if (person.location.city && person.location.temp){
// console.log(`It's ${person.location.city} in ${person.location.temp}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'NA'} = book.publisher
// console.log(publisherName);


//
// Array

const address = ['1299 S Juniper Street', 'Los Angeles', 'CA'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${address[1]},${address[2]}`);

console.log(`You are in ${city},${state}`);

const item = ['Coffee', '$2.00', '2.50', '2.57'];
const [type, small, medium, large] = item;

console.log(`A medium ${type} costs ${medium}`);




