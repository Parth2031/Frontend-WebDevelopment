// TODO:: Some Example of working of Third Party Libraries :-
// ? Lodash Library -

const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];

// ! _.difference() is a method of Lodash Library which is used to get difference of any array,function,etc after comparing.
// * It can be used when we are fetching data from Database or any API,etc.

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log("Difference of Array: ");
console.log(inactiveCustomers);