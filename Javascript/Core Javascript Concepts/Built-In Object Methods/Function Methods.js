// TODO:: Function Object Methods :-

/* 
^ Bind Method Explanation -
? The bind() method creates a new function that, when called, has its this keyword set to the provided value,
? with a given sequence of arguments preceding any provided when the new function is called.
*/

// & bind() method Syntax -
// * function_name.bind(this, arguments related to call function);

// ! Bind Function Method Example :

const module =
{
  x: 42,
  getX: function () {
    return this.x;
  }
}

const unboundGetX = module.getX;
console.log(unboundGetX());                        // ! The function gets invoked at the global scope
// ~ Expected Output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// ~ Expected Output: 42

// ^ =================================================================================================================================

// ^ Call Method Explanation -
// ? The call() method calls a function with a given this value and arguments provided individually.

// ! NOTE :-
/*
* While the syntax of this function is almost identical to that of apply(), 
* the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
*/

// & call() method Syntax -
// * function_name.call(this, arguments related to call function);

// ! Call Function Method Example :

function Product(name, price)
{
  this.name = name;
  this.price = price;
}

function Food(name, price)
{
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// ~ Expected Output: "cheese"

// ^ =============================================================================================================================

// ^ Apply Method Explanation -
// ? The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

// ! NOTE :-
/*
* apply() is very similar to call(), except for the type of arguments it supports. 
* You use an arguments array instead of a list of arguments (parameters). With apply, you can also use an array literal,
* for example, func.apply(this, ['eat', 'bananas']), or an Array object, for example, func.apply(this, new Array('eat', 'bananas')).
*/

// & apply() method Syntax -
// * function_name.apply(this, arguments array's);

// ! Apply Function Method Example :

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// ~ Expected Output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// ~ Expected Output: 2
