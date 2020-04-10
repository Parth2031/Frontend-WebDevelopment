// TODO:: Understanding Synchronous Javascript :-

/*
? Javascript is a single threaded language which means that every statement/expression execution takes place one by one.
* So, it means it has one call stack and one memory heap. 
* As expected, it executes code in order and must finish executing a piece code before moving onto the next. 
! Synchronous Programming means blocking code, that means taking more time by fetching the code only after the entire file, screen or function is loaded.
*/

// ? It has major two cmponents which work on Synchronous Program ->> Execution Context & Call Stack.

// ! Example of Synchronous Program ->

const second = () => {
  console.log('Hello there!');
}

const first = () =>
{
  console.log('Hi there!');
  second();
  console.log('The End');
}

first();

// TODO:: Undestanding Asynchronous Javascript :-

/*
? Asynchronous Programming helps ro make the Javscript as multi threaded language means that multiple code is loaded at same time.
* It makes the program faster as it is not a blocking code.
! So, it helps in fetching the api or http request to be loaded quickly with all code loading. 
*/

// TODO: Asynchronous Methods -
// ? Callback Method
// ? Promise Built-in Object and method
// ? Async and Await Method (ES6)

// ! Example of Asynchronous Program ->

const button = document.querySelector("button");

const getPosition = opts =>
{
  const promise = new Promise((resolve, reject) =>
  {
    navigator.geolocation.getCurrentPosition (
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });

  return promise;
};

const setTimer = duration =>
{
  const promise = new Promise((resolve, reject) =>
  {
    setTimeout( () => {
      resolve('Done!');
    }, duration);
  });

  return promise;
};

async function trackUserHandler()
{
  let positionData;
  let posData;
  let timerData;
  
  try
  {
    posData = await getPosition();
    timerData = await setTimer(2000);
  }
  catch (error) {
    console.log(error);
  }
  
  console.log(timerData, posData);

  setTimer(1000).then( () => {
    console.log('Timer done!');
  });
  
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);
