// TODO:: Applying Various Event Functionalities on Form & Card.

const form = document.querySelector("#task-form");
const button = document.querySelector(".btn");
const ul = document.querySelector(".collection");
const filter = document.querySelector("#filter");
const clearButton = document.querySelector(".clear-tasks");
const input = document.querySelector("#task");

var inputLength = () => { return input.value.length; }

// ! Loading All Event Listeners at start :-

loadEventListeners();

function loadEventListeners()
{
  insertTask();
  getTask();                          // ! Getting Values from Local Storage(LS) using DOM Event Loader.
  clearTask();
  // filterTask();
}

// TODO ====================================================================================================================================

function insertTask()
{
  // * Alternative --> button.addEventListener("click",function_name);

  // ! Inserting the task in the form by both ways :-
  // TODO:: Note: We use "submit" event in the case when we are using "form" tag as it makes the button of the form to submit the applied functions.

  form.addEventListener("submit",(event) =>
  {
    if(inputLength() > 0)
      create_append();
  
    // event.preventDefault(); 
  }) 

  form.addEventListener("submit",(event) =>
  {
    if(inputLength() > 0 && event.keyCode == 13)
      create_append();

    event.preventDefault();
  })
}

function create_append() 
{
  const li = document.createElement("li");
  li.className = "collection-item";
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class = "fa fa-remove"><\i>';
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(link);
  ul.appendChild(li);

  // ! Store Input Value in Local Storage :-

  storeTaskInLocalStorage(input.value);

  input.value = "";
}

// ! Storing Values in Local Storage :-

function storeTaskInLocalStorage(task)
{
  let Tasks;

  if(localStorage.getItem("Tasks") === null)
    Tasks = [];
  else
    Tasks = JSON.parse(localStorage.getItem("Tasks"));  

  Tasks.push(task);  

  localStorage.setItem("Tasks",JSON.stringify(Tasks));
  console.log(task); 
}

// TODO ====================================================================================================================================

// ! DOM Load Event Listener :-

function getTask()
{
  document.addEventListener("DOMContentLoaded", (event) =>
  {
    let Tasks;

    if(localStorage.getItem("Tasks") === null)
      Tasks = [];
    else
      Tasks = JSON.parse(localStorage.getItem("Tasks"));  

    Tasks.forEach(function(task)
    {
      const li = document.createElement("li");
      li.className = "collection-item";
      const link = document.createElement("a");
      link.className = "delete-item secondary-content";
      link.innerHTML = '<i class = "fa fa-remove"><\i>';
      li.appendChild(document.createTextNode(task));
      li.appendChild(link);
      ul.appendChild(li);
    });    
  })
}

// TODO ====================================================================================================================================

function clearTask()
{
  // ! Clearing Task using the cross icon :-

  ul.addEventListener("click",(event) =>
  {
    if(event.target.parentElement.classList.contains('delete-item'))
      event.target.parentElement.parentElement.remove();

    // ! Removing Input Value from Local Storage :-

    removeTaskFromLocalStorage(event.target.parentElement.parentElement);  
  })

  // ! Clearing Task one by one after each click :-
  
  clearButton.addEventListener("click",(event) =>
  {
    // console.log(event.target.previousElementSibling);
    event.target.previousElementSibling.firstElementChild.remove();

    // ! Removing Input Value from Local Storage :-

    removeTaskFromLocalStorage(event.target.previousElementSibling.firstElementChild);   

    event.preventDefault();
  })
  
  // ! Clearing All Task at one click :- 
  
  // clearButton.addEventListener("click",(event) =>
  // {
  //   // console.log(event.target.previousElementSibling.childElementCount);
  //   var n = event.target.previousElementSibling.childElementCount;
    
  //   for(var i=0;i<n;i++)
  //     event.target.previousElementSibling.firstElementChild.remove();
  
  //   // TODO:: Alternative to above case -->
    
  //   while(ul.firstChild)
  //     ul.removeChild(ul.firstChild);
    
  //   event.preventDefault();  
  // })
  
  // ! Clearing Task using filterTask input :- 
  
  // clearButton.addEventListener("click",(event) =>
  // {
  //   // console.log(event.target.previousElementSibling.previousElementSibling.firstElementChild.value);
  //   // console.log(event.target.previousElementSibling.firstElementChild.innerText);
    
  //   var removingTask = event.target.previousElementSibling.previousElementSibling.firstElementChild.value;
  //   var liTask = event.target.previousElementSibling.firstElementChild.innerText;
    
  //   if(removingTask === liTask)
  //     event.target.previousElementSibling.firstElementChild.remove();
    
  //   event.preventDefault();
  // })  
}

// TODO ====================================================================================================================================

// ! Removing Values from Local Storage :-

function removeTaskFromLocalStorage(taskItem)
{
  let Tasks;

  if(localStorage.getItem("Tasks") === null)
    Tasks = [];
  else
    Tasks = JSON.parse(localStorage.getItem("Tasks"));  

  Tasks.forEach(function(task,index)
  {
    if(taskItem.textContent === task)
      Tasks.splice(index,1); 
  });

  localStorage.setItem("Tasks",JSON.stringify(Tasks));
}

// TODO ====================================================================================================================================

function filterTask()
{
  // ! Filter through Task Input :-

  filter.addEventListener("keyup",(event) =>
  {
    const text = event.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task)
    {
      const item = task.firstChild.textContent;
      console.log(item);
      
      if(item.toLowerCase().indexOf(text) != -1)
        task.style.display = "block";
      else 
        task.style.display = "none";
    });
  })  
}
