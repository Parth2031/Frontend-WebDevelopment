const messageElement = document.getElementById('message');

const randomNumber = getRandomNumber();

console.log('Number:', randomNumber);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// ! Start Recognition and Game :->
recognition.start();

// ! Capture User Speak :->

function onSpeak(event)
{
  const message = event.results[0][0].transcript;

  writeMessage(message);
  checkNumber(message);
}

// ! Write what user speaks :->

function writeMessage(message)
{
  messageElement.innerHTML = `
                               <div>You said: </div>
                               <span class="box">${message}</span>
                             `;
}

// ! Check Message Against Number :->

function checkNumber(message)
{
  const num = parseInt(message);

  // ! Check if Valid Number :

  if (Number.isNaN(num))
  {
    messageElement.innerHTML += '<div>That is not a valid number</div>';
    return;
  }

  // ! Check in Range :
  
  if (num > 100 || num < 1)
  {
    messageElement.innerHTML += '<div>Number must be between 1 and 100</div>';
    return;
  }

  // ! Check Number :

  if (num === randomNumber)
  {
    document.body.innerHTML = `
                                <h2>Congrats! You have guessed the number! <br><br>
                                It was ${num}</h2>
                                <button class="play-again" id="play-again">Play Again</button>
                              `;
  }
  else if (num > randomNumber) 
    messageElement.innerHTML += '<div>GO LOWER</div>';
  
  else 
    messageElement.innerHTML += '<div>GO HIGHER</div>';
}

// ! Generate Random Number :->

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// ! Speak Result :->

recognition.addEventListener('result', onSpeak);

// ! End SpeechRecognition Service :->

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (event) =>
{
  if (event.target.id == 'play-again') {
    window.location.reload();
  }
});
