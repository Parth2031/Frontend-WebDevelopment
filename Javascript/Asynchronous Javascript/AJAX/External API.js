var getJoke = document.querySelector(".get-jokes");
var jokes = document.querySelector(".jokes");

getJoke.addEventListener("click", getJokes);

function getJokes(event)
{
  const number = document.querySelector('input[type = "number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function ()
  {
    if (this.status === 200)
    {
      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success")
      {
        response.value.forEach(function (jokeSelection) {
          output += `<li>${jokeSelection.joke}</li>`;
        });
      }
      else {
        output += "<li>Something went wrong</li>";
      }

      jokes.innerHTML = output;
    }
  }

  xhr.send();

  event.preventDefault();
}