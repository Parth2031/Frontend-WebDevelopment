// var userAge = prompt("Enter your age:");
// var yearDays = 365;
// var aliveDays = 365.25 * userAge;

// console.log("Days you've been alive: " + aliveDays);
// alert("Days you've been alive: " + aliveDays);

// ^ Instead of using this syntax of string, We can use template string/literals -
//  ? Syntax of Template String/Literals --> `TEXT.... ${variablename}`;

// console.log(`Days you've been alive: ${aliveDays}`);
// alert(`Days you've been alive ${aliveDays}`);


// & We also have Tagged Template which are useful to add template strings as parameter to a function -

function productDescription(strings, productName, productPrice)
{
  console.log(strings);
  console.log(productName);
  console.log(productPrice);

  let priceCategory = 'pretty cheap regarding its price';

  if (productPrice > 20) 
    priceCategory = 'fairly priced';
  
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
  //   strings[2]
  // }`;
  
  return { name: productName, price: productPrice };
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

// ! This is the use of tagged template as it sends the string as parameters to the function. 

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

// ^ ===================================================================================================================================

var todos = [];

var input = prompt("What would  like to do?");

while (input !== "quit")
{
  if(input === "list")
    listTodos();      
  else if(input === "new")
    addTodos();   
  else if(input === "delete")
    deleteTodos();
    
  input = prompt("What would  like to do?");
}

// ! Ask again for new input :
// console.log("Ok, You quit the App");   

function listTodos()
{
  // console.log(todos);
    
  console.log("*****")
  todos.forEach(function (todo, i)
  {
    // ~ Here, 'todo' is a placeholder, it is temporary 
    //  * i --> Shows that it is the index of todo array
    
    // console.log(i + ": " + todo);
  });
 
  // console.log("*****");
}

function addTodos()
{
  // ! Ask for new todo 
  var newTodo = prompt("Enter a new todo");

  // ! Add to todo array
  todos.push(newTodo);        
  
  // console.log("Added Todo");    
}

function deleteTodos()
{
  // ! Ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  
  // ! Delete that todo
  todos.splice(index,1);  
  
  // console.log("Deleted Todo");
}


