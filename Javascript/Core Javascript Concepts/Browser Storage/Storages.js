// TODO:: Types of Browser Storages :-

/*
TODO:: Local Storage API -->   Part of window(browser)
? It is similar to session storage, except that while data stored in localStorage has no expiration time.
* Syntax --> localStorage.setItem(item,value);
//                 ""     .removeItem(item);
//                 ""     .clear();
! It is accessed in Application of chrome dev tools.
*/

// localStorage.clear();
// localStorage.setItem("Homework","Maths");
// localStorage.setItem("Classwork","Science");
// localStorage.removeItem("Classwork");
// var value = localStorage.getItem("Homework");
// console.log(value);

// ! Example of Local Storage API -

// var form = document.querySelector("#task-form");

// ! NOTE: We use "submit" event in the case when we are using "form" tag as it makes the button of the form to submit the applied functions.

// form.addEventListener("submit",(event) =>
// {
//   const task = document.querySelector("#task").value;
//   let tasks;

//   if(localStorage.getItem("tasks") === null)
//     tasks = [];
//   else
//     tasks = JSON.parse(localStorage.getItem("tasks"));  

//   tasks.push(task);  

//   localStorage.setItem("tasks",JSON.stringify(tasks));
//   console.log(task);

//   event.preventDefault();
// })

// const tasks = JSON.parse(localStorage.getItem("tasks"));
// tasks.forEach( function(task) { console.log(task); });

// //------------------------------------------------------------------------------------------------------------------------------------

/*
TODO:: Session Storage API -->
?  Data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed and not when the page reloads. 
* Syntax --> sessionStorage.setItem(item,value);
//                 ""      .removeItem(item);
//                 ""      .clear();
! It is accessed in Application of chrome dev tools.
*/

// sessionStorage.clear();
// sessionStorage.setItem("Homework","English");
// sessionStorage.setItem("Classwork","Social Science");
// sessionStorage.removeItem("Classwork");
// var diff_value = sessionStorage.getItem("Homework");
// console.log(diff_value);

// // -----------------------------------------------------------------------------------------------------------------------------------

/*
TODO:: Cookies API -->
? It is a storage which could be used in both client side and server side.
* More Supportive to Serve Side as it fetches cookies from API'S.
! It is only available when your webpage is served with a real server. So, we can use Serve JS in terminal.

* Syntax --> document.cookie is used to access Cookie API.
? In Cookie, we don't have any specific methods so we have to manually store them in browser storage and then retrieve them.

! Cookies have a expiration time which is by default as session and if we want to set an time then, Example ->>
* document.cookie = `uid=${userId}; max-age=360`; . 
?                 In this, after ";" we wrote max-age = time(in seconds) which is used to set the expiration time of a cookie.
*/

// ! Example of Cookies API -

// const storeBtn = document.querySelector("#store-btn");
// const retrBtn = document.querySelector("#retrieve-btn");

// storeBtn.addEventListener("click", () =>
// {
//   const userId = "u123";
//   const user = { name: "Parth", age: 20 };

//   document.cookie = `uid=${userId}; max-age=360`;
//   document.cookie = `user=${JSON.stringify(user)}`;
// });

// retrBtn.addEventListener("click", () =>
// {
//   console.log(document.cookie);

//   const cookieData = document.cookie.split(";");
//   const data = cookieData.map( i => {
//     return i.trim();
//   });

//   console.log(data[1].split("=")[1]);                                            // ! <-- User Value
// });

// // --------------------------------------------------------------------------------------------------------------------------------------

/*
TODO:: IndexedDB API -->
? It is a is a way for you to persistently store data inside a user's browser. Because it lets you create web applications ....
? .... with rich query abilities regardless of network availability, your applications can work both online and offline.
! It is only available when your webpage is served with a real server. So, we can use Serve JS in terminal.

* Syntax -->  dbRequest = indexedDB.open('Name of Storage Item','Version No');
? It comes with it's own methods like dbRequest.onsuccess(),dbRequest.onerror(),dbRequest.onupgradeneeded() and many more.
! It doesn't come with in built Promise so "IDB.js" Library could be used as comes with Promise which can make API working easy.

// Not Yet Done Completely, Quite Complex and need research on it.
*/

// ! Example of IndexedDB API -

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event)
{
  db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event)
  {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
   
    productsStore.add(
    {
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  };
};

dbRequest.onerror = function (event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () =>
{
  if (!db) {
    return;
  }
  const productsStore = db.transaction('products', 'readwrite').objectStore('products');
  
  productsStore.add(
  {
    id: 'p2',
    title: 'A Second Product',
    price: 122.99,
    tags: ['Expensive', 'Luxury']
  });
});

retrBtn.addEventListener('click', () =>
{
  const productsStore = db.transaction('products', 'readwrite').objectStore('products');
  const request = productsStore.get('p2');

  request.onsuccess = function () {
    console.log(request.result);
  }
});

