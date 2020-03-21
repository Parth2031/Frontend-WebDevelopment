// TODO:: Map object holds key-value pairs and remembers the original insertion order of the keys. 
// TODO:: Any value(both objects and primitive values) may be used as either a key or a value.

// ! Map Object Syntax :-

const maps = new Map();

// TODO:: Map Object Methods :-

// ? .clear() - It removes all key - value pairs from the Map object.
// ? .delete(key) - Returns Map if an element in the Map object existed and has been removed, or false if the element does not exist.Map.has(key) will return false afterwards.
// ? .get(key) - It returns the value associated to the key, or undefined if there is none.
// ? .has(key) - It returns a boolean asserting whether a value has been associated to the key in the Map object or not.
// ? .keys() - It returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
// ? .set(key, value) - It sets the value for the key in the Map object.Returns the Map object.
// ? .values() - It returns a new Iterator object that contains the values for each element in the Map object in insertion order.

// * A Map Object contains a key and it's value so to we have to set the key and values separately. 

// ! Set Keys :- 

const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// ! Set Map values by Key :-

maps.set(key1, 'Value of key1');
maps.set(key2, 'Value of key2');
maps.set(key3, 'Value of key3');

// ! Get values by Key -

// console.log(maps.get(key1));
// console.log(maps.get(key2));
// console.log(maps.get(key3));

// ! Count values of Keys -

// console.log(maps.size);

// ! ITERATING MAPS :-

// ? Loop using for...of to get Keys and Values :-

// for(let [key, value] of maps) {
//   console.log(`${key} = ${value}`);
// }

// ! Iterate Keys Only -

// for(let key of maps.keys()) {
//   console.log(key);
// }

// ! Iterate Values Only -

// for(let value of maps.values()) {
//   console.log(value);
// }

// ! Loop with forEach -

// maps.forEach(function(value, key){
//   console.log(`${key} = ${value}`);
// });

// ! CONVERT TO ARRAYS -

// * Create an Array of the Key-Value Pairs :

// const keyValArr = Array.from(maps);
// console.log(keyValArr);

// * Create an Array of the Values :

// const valArr = Array.from(maps.values());
// console.log(valArr);

// * Create an Array of the Keys :

const keyArr = Array.from(maps.keys());
console.log(keyArr);