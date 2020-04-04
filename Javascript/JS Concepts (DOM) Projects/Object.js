// * Object Based Project
// ? NOTE :- When we create Global Variables for input boxes, it refers only to first inputed value and not the next input value's by user.
// ! So, this problem could be solved using two ways -
// TODO:: First, we can make the class in which we could use "this" keyword to resolve the issue.
// TODO:: Second, we can make the variable in the local scope and keep updating them.

const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") =>
{
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0)
  {
    movieList.classList.remove("visible");
    return;
  }
  else 
    movieList.classList.add("visible");
    
  movieList.innerHTML = "";

  // ! .filter() - It is used to in order to create a new array with filtered values. 

  const filteredMovies = !filter ? movies : movies.filter( (movie) => movie.info.title.includes(filter));

  filteredMovies.forEach ( (movie) =>
  {
    const movieElement = document.createElement("li");
    let text = movie.info.title + " - ";
    
    for (const key in movie.info)
    {
      if (key !== "title") 
        text = text + `${key}: ${movie.info[key]}`;
    }

    movieElement.textContent = text;
    movieList.appendChild(movieElement);
  });
};

const addMovieHandler = () =>
{
  // ! So, here we made variables in Local Scope and updated them. 

  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") 
    return;

  const newMovie =
  {
    info: {
      title,
      [extraName]: extraValue  // ! In this, the extraName becomes the key and extraValue becomes the value using the Dynamic Property of an object.
    },
    id: Math.floor(Math.random() * 100)
  };

  console.log(newMovie);
  
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () =>
{
  const filterTitle = document.getElementById("filter-title").value;
  renderMovies(filterTitle);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
