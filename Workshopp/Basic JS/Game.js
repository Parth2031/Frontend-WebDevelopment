var no = prompt("Guess a no");
var guessed_no = 7;

if(no == guessed_no) {
  alert("You guessed the number correctly");
}
else if(no > guessed_no) {
  alert("Number is too high!!  Try Again");
}
else {
  alert("Number is too low!!  Try Again")
}