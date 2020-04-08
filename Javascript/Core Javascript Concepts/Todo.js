var todos = [];

var input = prompt("What would  like to do?");

while (input !== "quit")
{
  if(input==="list")
    listTodos();      
  else if(input==="new")
    addTodos();   
  else if(input==="delete")
    deleteTodos();
    
  input = prompt("What would  like to do?");
}

// ! Ask again for new input :
console.log("Ok, You quit the App");   

function listTodos()
{
  // console.log(todos);
    
  console.log("*****")
  todos.forEach(function (todo, i)
  {
    // TODO:: Here, 'todo' is a placeholder, it is temporary 
    //  * i --> Shows that it is the index of todo array
    
    console.log(i + ": " + todo);
  });
 
  console.log("*****");
}

function addTodos()
{
  // ! Ask for new todo 
  var newTodo = prompt("Enter a new todo");

  // ! Add to todo array
  todos.push(newTodo);        
  
  console.log("Added Todo");    
}

function deleteTodos()
{
  // ! Ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  
  // ! Delete that todo
  todos.splice(index,1);  
  
  console.log("Deleted Todo");
}