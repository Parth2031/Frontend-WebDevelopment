// TODO:: Async is an ES7 Method which is by default work as promise.
// ! Await method is performed only when the async process is done.

// ? Async function explanation :-

/* 
* The async function declaration defines an asynchronous function — a function that returns an AsyncFunction object.
* Asynchronous functions operate in a separate order than the rest of the code via the event loop, returning an implicit Promise as its result.
* But the syntax and structure of code using async functions looks like standard synchronous functions.
*/

// ? Await keyword explanation :-

/* 
& An async function can contain an await expression that pauses the execution of the async function ....
& .... to wait for the passed Promise's resolution, then resumes the async function's execution and evaluates as the resolved value.
& Await works like .then() as in Promise Built-In Object working.
& The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.
*/

// ^ Using Promise for Async :

async function myFunc() 
{
  const promise = new Promise((resolve, reject) =>
  {
    // ! setTimeout() with zero millisecond doesn't mean that it will immediately execute as zero means minimum time and not exact/guaranteed time. 
    // setTimeout(() => {
    //   console.log("Hello!");
    // }, 0);

    setTimeout(() => resolve('Hello'), 1000);
});

  const error = false;

  if (!error)
  {
    const res = await promise;                                       //  ! Wait until promise is resolved
    return res;
  }
  
  else 
    await Promise.reject(new Error('Something went wrong'));
}

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// ^ Using Fetch instead of Promise :

async function getUsers()
{
  // ! Await response of the fetch call ->

  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // & Only proceed once its resolved ->

  const data = await response.json();

  // ~ Only proceed once second promise is resolved ->

  return data;
}

getUsers()
  .then(users => console.log(users));