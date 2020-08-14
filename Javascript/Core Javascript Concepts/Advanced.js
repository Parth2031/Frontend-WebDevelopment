// TODO:: Understanding Pure Functions without Side Effects :-

/* 
^ A pure function is a function which :->
~ Given the same input, will always return the same output.
? Produces no side effects means It doesn't change something outside of the function.
* It is highly recommended as it is extremely independent — easy to move around, refactor, and reorganize in your code, .... 
* .... making your programs more flexible and adaptable to future changes.
*/

// ! Example of Pure Function -

function add(num1,num2) {
  return num1 + num2;
}

// console.log(add(1, 5));

// ^ Understanding Side Effects in Functions :-

// & Side Effects means it produces changes something outside of the function.  

let previousResult = 0;

function addMoreNumbers(num1,num2)
{ 
  let sum = num1 + num2;                 // * It is same statement as Pure Function. 
  previousResult = sum;                  // ? <-- It is the statement that produces a change outside the function. 
  return sum;
}

// console.log(previousResult);            
// console.log(addMoreNumbers(5, 5));

// ^ Understanding Impure Functions :-

/*
? An impure function is a function which return value with different outputs even with same inputs. Since, output can vary for same input also.
& Any function that changes the internal state of one of its arguments or the value of some external variable is an impure function . 
* They may have any side effects like network or database calls and it may modify the arguments which are passed to them.
*/

// ? Math.random() is an impure function; it changes the internal state of the Math object so you get different values on successive calls.

// ! Example of Impure Function - 

function addRandom(num1) {
  return num1 + Math.random();
}

// console.log(addRandom(5));

// // ===================================================================================================================================

// ^ Understanding Factory Functions :-

/*
? A factory function is any function which is not a class or constructor that returns a (presumably new) object. 
& In JavaScript, any function can return an object.
* When it does so without the new keyword, it’s a factory function.
*/

// ! Example of Factory Function -

function createTaxCalculator(tax)
{ 
  function calculateTax(amount) {
    return tax * amount;
  }

  return calculateTax;
}

const calculateVATAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// console.log(calculateVATAmount(100));
// console.log(calculateIncomeTaxAmount(200));

// // ===================================================================================================================================

// ^ Understanding Closures :-

/*
& A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
& In other words, a closure gives you access to an outer function’s scope from an inner function. 
? In JavaScript, closures are created every time a function is created, at function creation time.
* To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
~ The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
*/

// ? It is based on Lexical Scoping of Variables and their access.

// ! Example of Closures - 

let userName = 'Max';

function greetUser()
{
  // let name = 'Anna';
  // let name = username;

  // console.log('Hi ' + name);
}

let name = 'Maximilian';
userName = 'Manuel';

greetUser();