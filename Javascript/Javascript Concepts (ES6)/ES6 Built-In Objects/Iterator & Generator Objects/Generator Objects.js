// TODO:: Iterator is an built-in object which is used to iterate the array value's.

// ! Iterator Syntax :-

// ? function function_nameIterator(argument_name)
// ? {
// ?   let nextIndex = 0;

// ?   return {
// ?     next()
// ?     {
// ?       return nextIndex < argument_name.length ?
// ?       { value: argument_name[nextIndex++], done: false } :
// ?       { done: true }
// ?     }
// ?   }
// ? }

// ? const array_name = ['values to be iterated','',....];
// ? const variable_name = function_nameIterator(array_name);

// TODO:: Similar, methods to Generator.

// ! Iterator Example :-

// function nameIterator(names)
// {
//   let nextIndex = 0;

//   return {
//     next: function ()
//     {
//       return nextIndex < names.length ?
//       { value: names[nextIndex++], done: false } :
//       { done: true }
//     }
//   }
// }

// * Create an array of names :

// const namesArr = ['Jack', 'Jill', 'John'];

// * Initialize iterator and pass in the names array :

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// TODO:: Generator is  also an built-in object which is also used to iterate the array value's. 
// TODO:: It is an alternative to Iterator. 

// ! Generator Syntax :-

// ? function* function_name()
// ? {
// ?   yield 'values to be iterated';
// ?   yield 'values to be iterated';
// ?   ...
// ? }

// ? const variable_name = function_name();                     // "Generator { }""

// * .next() - It is used to return the next iterated value. { Returns a value yielded by the yield expression. }
// * .return() - It returns the given value and finishes the generator.

// ! Generator Example :-

function* sayNames()
{
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());

// ! Infinite Generator Example :-
// * { ID Creator } -

// function* createIds()
// {
//   let index = 1;

//   while(true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);