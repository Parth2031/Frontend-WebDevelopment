// * Event Listener Based Project

const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const input = document.querySelector(".guess-input");
const button = document.querySelector("#guess-btn");
const p = document.querySelector(".message");

let min = 0, max = 10;
var check = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(check);
var guessesLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;

button.addEventListener("mousedown", (event) => 
{
  if (event.target.className === "play-again")
    window.location.reload();
})

button.addEventListener("click", evaluate);
// input.addEventListener("keyup", evaluate);

function evaluate()
{
  let inputValue = parseInt(input.value);

  if (isNaN(inputValue) || inputValue < min || inputValue > max)
  {
    setMessage(`Please enter a number between ${min} and ${max}`,"red");
    input.style.borderColor = "red";
    // p.textContent = `Please enter a number between ${min} and ${max}`;
  }
  else
  {
    if (check === inputValue)
      gameOver(true, `${inputValue} is correct, You Win!`);
    else
    {
      guessesLeft--;
      if (guessesLeft === 0)
        gameOver(false, `Sorry,Game over,the correct answer was ${check}.`);
      else
      {
        input.value = "";
        p.textContent = `${inputValue} is not correct,you have ${guessesLeft} guesses left`;  
      }
    }
  }
}

function gameOver(won,msg)
{
  let color;
  won === true ? color = 'green' : color = 'red';

  input.disabled = true;
  input.style.borderColor = color;
  setMessage(msg, color);

  button.value = `Play Again`;
  button.className += "play-again";
}

function setMessage(msg, colour)
{
  p.style.color = colour;
  p.textContent = msg;
}
