// TODO:: Async is an ES7 Method which is by default work as promise.
// TODO:: Await method is performed only when the async process is done.

// * Using Promise for Async :

async function myFunc() 
{
  const promise = new Promise((resolve, reject) => {
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

// TODO -> Using Fetch instead of Promise :

async function getUsers()
{
  // ! Await response of the fetch call ->

  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // ! Only proceed once its resolved ->

  const data = await response.json();

  // ! Only proceed once second promise is resolved ->

  return data;
}

getUsers()
  .then(users => console.log(users));