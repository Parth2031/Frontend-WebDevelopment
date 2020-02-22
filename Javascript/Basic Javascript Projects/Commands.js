var firstName = prompt("What is your first name");
var lastName = prompt("What is your last name");
var yoursAge = prompt("What is your age");
var fullName = firstName + " " + lastName;

// alert("User's name: " + firstName + " " + lastName);
// alert("User's age: " + yoursAge); 
// console.log("User's name: " + fullName);
// console.log("User's age: " + yoursAge + "years old"); 


// TODO:: Instead of using this syntax of string, We can use template string
//  ? Syntax of Template String --> `TEXT.... ${variablename}`;

alert(`User's Name: ${firstName} ${lastName}`);
alert(`User's age: ${yoursAge}`);
console.log(`User's name: ${fullName}`);
console.log(`User's age: ${yoursAge} years old`);