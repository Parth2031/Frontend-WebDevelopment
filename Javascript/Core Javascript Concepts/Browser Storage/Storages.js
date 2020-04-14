// TODO:: Types of Browser Storages :-

// TODO:: Local Storage API -->   Part of window(browser)
// ? It is similar to session storage, except that while data stored in localStorage has no expiration time.
// * Syntax --> localStorage.setItem(item,value);
// //                 ""     .removeItem(item);
// //                 ""     .clear();
// ! It is accessed in Application of chrome dev tools.

// localStorage.clear();
// localStorage.setItem("Homework","Maths");
// localStorage.setItem("Classwork","Science");
// localStorage.removeItem("Classwork");
// var value = localStorage.getItem("Homework");
// console.log(value);

// //------------------------------------------------------

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

// //------------------------------------------------------

// TODO:: Session Storage API -->
// ?  Data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed. 
// * Syntax --> sessionStorage.setItem(item,value);
// //                 ""      .removeItem(item);
// //                 ""      .clear();
// ! It is accessed in Application of chrome dev tools.

// sessionStorage.clear();
// sessionStorage.setItem("Homework","English");
// sessionStorage.setItem("Classwork","Social Science");
// sessionStorage.removeItem("Classwork");
// var diff_value = sessionStorage.getItem("Homework");
// console.log(diff_value);

// TODO:: Cookies API -->
