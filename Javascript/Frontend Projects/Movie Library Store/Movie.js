// ! Global Variables :-

const addMovieModal = document.querySelector("#add_modal");
const deleteMovieModal = document.querySelector("#delete-modal");

const startAddMovieButton = document.querySelector("header button");
const backdrop = document.querySelector("#backdrop");
const cancelAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = document.querySelectorAll("input");
const entryTextSection = document.querySelector("#entry-text");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const updateUI = () =>
{
  if (movies.length === 0) 
    entryTextSection.style.display = "block";
  else 
    entryTextSection.style.display = "none";
};

const closeMovieDeletionModal = () =>
{
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const onDeleteMovie = movieId =>
{
  let movieIndex = 0;

  for (const movie of movies)
  {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  movies.splice(movieIndex, 1);
  
  const listRoot = document.getElementById("movie-list");
  
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);

  closeMovieDeletionModal();
  updateUI();
};

const onStartDeleteMovie = movieId =>
{
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // ! replaceWith() is used to replace the child nodes. 
  // ! .cloneNode(true) is used to a existing node to another node to get the exact same value of the previous defined node.

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener("click",onDeleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) =>
{
  const newMovieElement = document.createElement("li");

  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  newMovieElement.addEventListener("click",onStartDeleteMovie.bind(null, id));
  
  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () =>
{
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () =>
{
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const onCancelAddMovie = () =>
{
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const onAddMovie = () =>
{
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // ! .trim() is an String Method.
  // ! parseInt() can also be written as "+variable".

  if (titleValue.trim() === ""|| imageUrlValue.trim() === ""|| ratingValue.trim() === ""|| parseInt(ratingValue) < 1 || parseInt(ratingValue) > 5)
  {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie =
  {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(newMovie.id,newMovie.title,newMovie.image,newMovie.rating);
  updateUI();
};

const onBackdropClick = () =>
{
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

// ! Event Listeners :-

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", onBackdropClick);
cancelAddMovieButton.addEventListener("click", onCancelAddMovie);
confirmAddMovieButton.addEventListener("click", onAddMovie);
