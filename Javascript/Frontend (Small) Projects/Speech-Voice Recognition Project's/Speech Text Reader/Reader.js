const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readButton = document.getElementById('read');
const toggleButton = document.getElementById('toggle');
const closeButton = document.getElementById('close');

const data =
[
  {
    image: './Images/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './Images/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './Images/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './Images/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './Images/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './Images/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './Images/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './Images/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './Images/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './Images/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './Images/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './Images/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

data.forEach(createBox);

// ! Create Speech Boxes :->

function createBox(item)
{
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');

  box.innerHTML = `
                    <img src="${image}" alt="${text}" />
                    <p class="info">${text}</p>
                  `;

  box.addEventListener('click', () =>
  {
    setTextMessage(text);
    speakText();

    // ! Add Active Effect :

    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

// ! Initialize Speech Synthesis :->

const message = new SpeechSynthesisUtterance();

// ! Store Voices :->

let voices = [];

function getVoices()
{
  voices = speechSynthesis.getVoices();

  voices.forEach( voice =>
  {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// ! Set Text :->

function setTextMessage(text) {
  message.text = text;
}

// ! Speak Text :->

function speakText() {
  speechSynthesis.speak(message);
}

// ! Set Voice :->

function setVoice(event) {
  message.voice = voices.find(voice => voice.name === event.target.value);
}

// ! Voices Changed :->

speechSynthesis.addEventListener('voiceschanged', getVoices);

// ! Toggle Text Box :->

toggleButton.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

// ! Close Button :->

closeButton.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);

// ! Change Voice :->

voicesSelect.addEventListener('change', setVoice);

// ! Read Text Button :->

readButton.addEventListener('click', () =>
{
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
