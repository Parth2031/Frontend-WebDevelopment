// TODO:: In this, (Error Handling) we create our own error and see all types of error.
// ! The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.

// ^ try,catch and finally Statements Explanation :-

// * try_statements - The statements to be executed.
// & catch_statements - Statements that are executed if an exception is thrown in the try-block.
// ~ finally_statements - Statements that are executed after the try statement completes ........
// ~ ........ These statements execute regardless of whether an exception was thrown or caught.

// ! Creating our own error using Built-in Error Object Methods:
const user = { email: 'jdoe@gmail.com' };

// ^ Types of Error :-

// & Error() - It's an Built - in Object Method Similarly all the below mentioned error are also Built - in Object Methods. 
// ? ReferenceError - Creates an instance representing an error that occurs when de - referencing an invalid reference.
// ? SyntaxError - Creates an instance representing a syntax error that occurs while parsing code in eval().
// ? TypeError - Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
// ? URIError - Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
// ? InternalError - Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown.E.g. "too much recursion".
// ? RangeError - Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.

// ^ Throw statement explanation :- 

/* The throw statement throws a user - defined exception.
  Execution of the current function will stop(the statements after throw won't be executed), and 
  control will be passed to the first catch block in the call stack. 
  If no catch block exists among caller functions, the program will terminate.
*/

try
{
  // ! Producing a ReferenceError -
  // myFunction();

  // ! Producing a TypeError -
  // null.myFunction();

  // ! Producing a SyntaxError -
  // eval('Hello World');

  // ! Producing a URIError -
  // decodeURIComponent('%');

  if (!user.name)
  {
    // ? In this, we are creating a error with message only.
    // throw 'User has no name';

    // ? In this, we are creating a type of error with its message.
    throw new SyntaxError('User has no name');
  }
}

// ^ Catch is used to caught the error and perform actions on it.

// * Properties of error ->
// ? .message - Shows the content of error to be displayed.
// ? .name - Shows the type of error.

catch (err)
{
  console.log(`User Error: ${err.message}`);
  // console.log(err);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof TypeError);
}

finally {
  console.log('Finally runs reguardless of result...');
}

// & try and catch: helps the program continue else if we don't use these if an error occurs, it will terminate as soon as error is found.

console.log('Program continues...');

