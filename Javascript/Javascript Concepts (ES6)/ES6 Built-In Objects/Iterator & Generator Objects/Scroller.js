const profileDisplay = document.querySelector("#profileDisplay");
const imageDisplay = document.querySelector("#imageDisplay");

const data =
[
  {
    name: 'John Trump',
    age: 27,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
];

const profiles = profileIterator(data);

// ! Call first profile:
nextProfile();

// ! Next Event:
document.querySelector('#next').addEventListener('click', nextProfile);

// ! Next Profile Display :-

function nextProfile()
{
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined)
  {
    profileDisplay.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    imageDisplay.innerHTML = `<img src="${currentProfile.image}">`;
  }
  else
  {
    // ! No more profiles:
    window.location.reload();
  }
}

// ! Profile Iterator :-

function profileIterator(profiles)
{
  let nextIndex = 0;

  return {
    next: function ()
    {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}
