var userAge = prompt("Enter your age:");
var yearDays = 365;
var aliveDays = 365.25 * userAge; 

// console.log("Days you've been alive: " + aliveDays);
// alert("Days you've been alive: " + aliveDays);

// TODO:: Instead of using this syntax of string, We can use template string
//  ? Syntax of Template String --> `TEXT.... ${variablename}`;

console.log(`Days you've been alive: ${aliveDays}`);
alert(`Days you've been alive ${aliveDays}`);