// TODO:: Promise is a Bulit-In Object.
// ? Promise function works quiet similar to the Callback Function but is used in Fetch API whereas Callback is used in AJAX.

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

const createPost = (post) =>
{
  return new Promise( (resolve, reject) =>
  {
    setTimeout( () =>
    {
      posts.push(post);

      const error = false;

      if (!error) 
        resolve();
      
      else 
        reject('Error: Something went wrong');
      
    }, 2000);
  });
}

const getPosts = () =>
{
  setTimeout( () =>
  {
    let output = '';
  
    posts.forEach( (post) => {
      output += `<li>${post.title}</li>`;
    });
  
    document.body.innerHTML = output;
  
  }, 1000);
}

const experiment = () => {
  console.log("Afer catch method, so if first .then() fails, it will still work");
}  

// * Promise Built-in Object Error Handling -> 

// TODO: NOTE :- Where, .then() works like try{....} and .catch() works like catch() {....}.

// ! In this .then( function () used like in callback fn ) is used to call the Promise function similar to callback function but in callback .... 
// ! .... we don't need to any specific function while calling that function.
// ? Whereas, .catch() is used to call inside functionality of a function using Promise function. 

// * NOTE :- Every .then() can have a .catch() or can also leave it.
// ? Afer catch method, so if first .then() fails, it will still work other remaining .then().

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch((err) => { console.log(err); })
  .then(experiment);

// // ===============================================================================================================================

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'Promise 1');
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'Promise 2');
});

// TODO:: Promise Built-In Object Method :-

// ? Promise.race() - This method returns a promise that fulfills or rejects as soon as one of the promises in an iterable
// ?                  fulfills or rejects, with the value or reason from that promise.

// ! Example of Promise.race() - 

Promise.race([promise1, promise2]).then( function (value)
{
  // ! It will print the Promise result which is faster to load and execute. Which is here, Promise 2.
  // * It is used to load only faster promises.

  console.log(value);
});

/*
? Promise.all() - 
? This method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled
? or when the iterable contains no promises or when the iterable contains promises that have been fulfilled and
? non - promises that have been returned. It rejects with the reason of the first promise that rejects, or with the error caught by the
? first argument if that argument has caught an error inside it using try/catch/throw blocks.

* It is typically used after having started multiple asynchronous tasks to run concurrently and having created promises for their results,
* so that one can wait for all the tasks being finished.
*/

// ! Example of Promise.all() - 

Promise.all([promise1, promise2]).then(function (values)
{
  // ! It will print all the values of Promise result if they don't have any error's.
  // * Used to execute every promise at once for their values. 

  console.log(values); 
});
