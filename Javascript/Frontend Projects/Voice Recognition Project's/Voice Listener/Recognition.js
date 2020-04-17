const button = document.querySelector(".talk");  
const content = document.querySelector(".content");  

// ! This is Alexa will reply :

const greetings =
[
  "I am good",
  "How are you",
  "Doing good homeboi",
  "I am Great!",
  "You tell?"
];

const jokes =
[
  "Never trust math teachers who use graph.. They're always plotting something.. Hahahaha, I used to breed rabbits.",
  "Thank you for asking"
];

// ! Activating Speech Recognition :

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition;

// ! On click, what should it reply :

recognition.onstart = () => {
  console.log("Voice is activated, You can speak to Alexa!");
};

// ! What will be the result of our click :

recognition.onresult = (event) =>
{
  var current = event.resultIndex;
  
  // TODO:: Storing our words in a variable :
    
  var transcript = event.results[current][0].transcript; 
  content.textContent = transcript;
  
  // TODO:: Transcript is a method in speechRecognition :
  readOutLoud(transcript);  
};

// ! Adding the listener to the button :

button.addEventListener("click", () => {
  recognition.start();
});

// ! JS is talking to us :

function readOutLoud(message)
{
  // TODO:: Built-in function which help JS to talk to us
  var speech = new SpeechSynthesisUtterance(); 
  
  // TODO:: Default speech
  speech.text = "Pardon"; 
  
  if (message.includes("how are you doing"))
  {
    var final= greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = final;  
  }
  else if (message.includes("jokes"))
  {
    var final = jokes[Math.floor(Math.random() * jokes.length)];
    speech.text = final; 
  }
  else if(message.includes("your name")){
    speech.text = "My name is Alexa"
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 2;

  // ! Now, Alexa will speak :
  window.speechSynthesis.speak(speech);
}
