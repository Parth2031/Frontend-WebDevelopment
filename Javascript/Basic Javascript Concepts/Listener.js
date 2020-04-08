// TODO:: Understanding DOM Event Properties, Function's,etc.
// ? NOTE :- Event Listener's can have function as ananoymous or whole new function which is called by function name.
// ! Anonymous Function should be used if there are called  multiple times and New Function will be better option.

console.log("Understanding DOM Event Listener Properties, Function's and Many More...");

// * Alternative to Event Listener but should be used only in small programs :-
// ! It has many drawbacks compared to Event Listeners.
// ? .onclick like there are many properties but are avoided.

// const buttonHandler = () => {
//   console.log("Alternative to Event Listener");
// }

// document.querySelector(".btn").onclick = buttonHandler;

// ! Applying Background effect using event -->

// var container = document.querySelector(".container");

// container.addEventListener("mousemove",(event) => 
// {
//   document.body.style.backgroundColor =  `rgb(${event.offsetX},${event.offsetY},200)`;
// })

// TODO:: Explaining event.preventDefault() working ->>

/*
! If a href="" or href="link.." then, if applied a event. 
TODO:: It will redirect to itself or to that link so in order to stop that functionality apply event.preventDefault(); 
* Note: If href="#" then it stops the redirecting process and so no need of this function.
? It is also applied on a "form" as well as it also redirects itself and to stop that, we use event.preventDefault(). 
*/

// const ad = document.querySelector(".clear-tasks");

// const adHandler = (event) =>
// {
//   console.log("refresh");
//   event.preventDefault();
// }

// ad.addEventListener("click",adHandler); 

// TODO:: We can also Remove Event Listeners using variable_name.removeEventListeners("event",function_name); 
// ! In this, first click shows the effect of creation of Event Listener and second click removes the Event Listener.

// setTimeout( () => 
//   ad.removeEventListener("click", adHandler), 2000
// );

// TODO:: In this, we are seeing MouseEvent Properties using this Event Listener ->>>

// const buttonHandler = (event) => {
//   console.log(event);
// }

// document.querySelector(".btn").addEventListener("click", buttonHandler);

// ! DOM Properties -->

// * variable_name.children; -->> It is used to access the HTML Elements.
// * variable_name.firstChild;
// * variable_name.lastChild;
// * variable_name.firstElementChild;  -->> It is different from firstChild as it only accesses the elements of child.
// * variable_name.lastElementChild;   -->> It is different from lastChild as it only accesses the elements of child.
// * variable_name.childElementCount;
// * variable_name.parentElement;
// * variable_name.nextSibling; 
// * variable_name.nextElementSibling;
// * variable_name.previousElementSibling; 

// ! Event Delegation is the technique, Bubbling is what the event itself does, ....
// ! .... and Capturing is a way of using Event Delegation on events that don’t bubble.

// TODO:: Event Bubbling -->
// ! It is bubbling up of an event from child nodes to parent nodes.
// ? When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// * NOTE :-- Almost all events bubble.

// 

// document.querySelector(".card-title").addEventListener("click", () => { console.log("Card Title & Sibling of Row"); });
// document.querySelector(".card-content").addEventListener("click", () => { console.log("Card Content"); });
// document.querySelector(".card").addEventListener("click", () => { console.log("Main Card"); });
// document.querySelector(".col").addEventListener("click", () => { console.log("Column"); });

// TODO:: In order to stop Event Bubbling, we use event.stopPropagation()/event.stopImmediatePropagation().

// document.querySelector(".row").addEventListener("click", (event) =>
// {
//   console.log("Row & Sibling of Card Title but didn't bubble up");
//   event.stopPropagation();
// });

// TODO:: Event Capturing -->
// ? It is used to change the order of Event Bubbling as it calls the ancestor/parent first instead of child nodes.
// ! It is done by adding a second parameter as "true" in .addEventListener().

// document.querySelector(".btn").addEventListener("click", () => {
//   console.log("Button is a child node but still executed first compared to other Parent Event Bubbling Calls.");
// },true);

// TODO:: Event Delegation -->  
// ? It is applying events on parent elements through child nodes.
                          
// document.body.addEventListener("click",deleteItem);

// const deleteItem = (event) =>
// {
//   if(event.target.parentElement.classList.contains("delete-item"))
//    {
//      console.log("delete");
//      event.target.parentElement.parentElement.remove();  
//    }
// }

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
