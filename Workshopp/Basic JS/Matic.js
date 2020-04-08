// ! Version  1

// var user = prompt("Are we there yet");
// while(user!=="yes" && user!=="yeah"){
//     var user = prompt("Are we there yet");
// }
// alert("Yay, we finally made it!");

// TODO::  Version 2

var user = prompt("Are we there yet");

while(user.indexOf("yes") === -1) {
  var user = prompt("Are we there yet");
}

alert("Yay, we finally made it!");
