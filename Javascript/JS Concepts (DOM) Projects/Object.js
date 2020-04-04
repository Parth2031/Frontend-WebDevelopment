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
   
    // let text = movie.info.title + " - ";
    
    // for (const key in movie.info)
    // {
    //   if (key !== "title") 
    //     text = text + `${key}: ${movie.info[key]}`;    // TODO:: <-- In this, movie.info[key] is using Dynamic Properties of Built-In Object.
    // }

    // ! Using Object Destructuring and Spread Operator to implement theabove code -
    
    const { info, ...remainingProperties } = movie;
    console.log(remainingProperties);
    
    // const { title: movieTitle } = info;
    // let text = movieTitle + ' - ';
    // console.log(movieTitle);

    let { getFormattedTitle } = movie;                    // ? Whereas, this function is called like this as by second method.
    // getFormattedTitle = getFormattedTitle.bind(movie);     // ! <-- In this, bind prepares the function for future call.
    let text = getFormattedTitle.call(movie) + ' - ';        // ! <-- Whereas, in this, apply/call immediately calls the function to work. 

    for (const key in info)
    {
      if (key !== 'title' && key !== '_title') 
        text = text + `${key}: ${info[key]}`;      // TODO:: <-- In this, info[key] is using Dynamic Properties of Built-In Object.
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

  // if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") 
  //   return;

  // const newMovie =
  // {
  //   info: {
  //     title,
  // ! In this, the extraName becomes the key and extraValue becomes the value using the Dynamic Property of an object.
  //     [extraName]: extraValue  
  //   },
  //   id: Math.floor(Math.random() * 100)
  // };

  // console.log(newMovie);

  if (extraName.trim() === '' ||  extraValue.trim() === '') 
    return;

  const newMovie =
  {
    info:
    {
      // ! We are Understanding here, Getter and Setter Properties of Object which are used together only.

      set title(val)
      {
        if (val.trim() === '')
        {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },

      [extraName]: extraValue
    },
    
    id: Math.random().toString(),
    
    // ! This function could be write down in two ways in an Object - 
    // ? key_name: function () { }  - It is accessed using object_name.key_name()
    // ? function_name() { } - It is accessed using directly without the reference of object.

    getFormattedTitle()
    {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);
  
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () =>
{
  console.log(this);
  const filterTitle = document.getElementById("filter-title").value;
  renderMovies(filterTitle);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
