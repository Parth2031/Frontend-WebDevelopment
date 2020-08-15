// TODO:: Some Example of working of Third Party Libraries :-
// * Lodash Library -

const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];

// ! _.difference() is a method of Lodash Library which is used to get difference of any array,function,etc after comparing.
// & It can be used when we are fetching data from Database or any API,etc.

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log("Difference of Array: ");
console.log(inactiveCustomers);

// ~ _.uniqueId() is a method of Lodash Library which is used to generate unique Id and not repetive as it could be used be used instead of ....
// ~ .... Math.random()

let n = Math.random();

for (var i = 0; i < n; i++)
{
  var id1 = _.uniqueId();
  var id2 = _.uniqueId();
}

console.log(id1);
console.log(id2);