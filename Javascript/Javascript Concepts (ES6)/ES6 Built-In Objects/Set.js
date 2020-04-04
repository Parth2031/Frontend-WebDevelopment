// TODO:: The Set object lets you store unique values of any type, whether primitive values or object references.
// TODO:: Set objects are collections of values. You can iterate through the elements of a set in insertion order.
// TODO:: A value in the Set may only occur once; it is unique in the Set's collection.

// ! For..Of Loop Explanation :-

/*
  The for...of statement creates a loop iterating over iterable objects,
  including: built -in String, Array, array - like objects(e.g., arguments or NodeList), TypedArray, Map, Set, and user - defined iterables.
*/  

// ! Set Object Methods :-

// ? .has(value) - It returns a boolean asserting whether an element is present with the given value in the Set object or not.
// ? .add(value) - It appends value to the Set object. It returns the Set object.
// ? .clear() - It removes all elements from the Set object.
// ? .delete(value) - It removes the element associated to the value and returns the value that .has(value) would have previously returned .has(value) will return false afterwards.
// ? .entries() - It returns a new Iterator object that contains an array of[same value,same value] for each element in the Set object, in insertion order.
// * { This is similar to the Map object, so that each entry's key is the same as its value for a Set. }
// ? .keys() - It returns a new Iterator object that yields the values for each element in the Set object in insertion order. (For Sets, this is the same as the values() method.)
// ? .values() - It returns a new Iterator object that yields the values for each element in the Set object in insertion order.

// ! Set Object Syntax :-

const set1 = new Set();

// ! Add Values to Set -

set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

// console.log(set1);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// ! Get Count of Set Values :

// console.log(set1.size);

// ! Check for values :

// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'}));

// ! Delete from Set -

// set1.delete(100);
// console.log(set1);

// ! ITERATING THROUGH SETS -

// TODO:: For..of Loop Syntax :-

// ? for (variable of iterable) {
// ?   statement.....
// ? }

// for(let item of set1) {
//   console.log(item);
// }

// * ForEach Loop :

// set1.forEach((value) => {
//   console.log(value);
// });

// ! CONVERT SET TO ARRAY -

const setArr = Array.from(set1);
console.log(setArr);
