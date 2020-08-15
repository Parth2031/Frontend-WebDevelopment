// TODO:: OOP'S Based Project
// ? NOTE :- When we create Global Variables for input boxes, it refers only to first inputed value and not the next input value's by user.
// ! So, this problem could be solved using two ways -
// ^ First, we can make the class in which we could use "this" keyword to resolve the issue.
// ^ Second, we can make the variable in the local scope and keep updating them.

// * In this, we created Global Variables and used class with "this" keyword to update values.

const container = document.querySelector(".container");
const form = document.querySelector("#book-form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const bookList = document.querySelector("#book-list");

// ! Book Class :-

class Book
{
  constructor(title, author, isbn)
  {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// ! UI Class :-

class UI
{
  // ! Class UI methods :-

  addBooksToList(book)
  {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;

    bookList.appendChild(row);
  }

  showAlert(message, className)
  {
    const box = document.createElement('div');
    box.className = `alert ${className}`;
    box.appendChild(document.createTextNode(message));
    container.insertBefore(box, form);

    setTimeout(() => {
      box.remove();
    }, 2000);
  }

  deleteBook(target)
  {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields()
  {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }
}

const checkUIPrototype = new UI;
console.dir(checkUIPrototype);

// ! Alternative to Class UI Prototype's method :-

// UI.prototype.addBooksToList = (books) =>
// {
//   var row = document.createElement("tr");

//   row.innerHTML = `<td> ${books.title} </td>
//                    <td> ${books.author} </td>
//                    <td> ${books.isbn} </td>
//                    <td><a href = "#" class = "delete">X</a></td> `;  

//   bookList.appendChild(row);
// }

// UI.prototype.clearFields = () =>
// {
//   title.value = "";
//   author.value = "";
//   isbn.value = "";
// }

// UI.prototype.showAlert = (message,className) =>
// {
//   var box = document.createElement("div");
//   box.className = `Alert ${className}`;
//   box.appendChild(document.createTextNode(message));
//   container.insertBefore(box, form);
  
//   setTimeout( () => {
//     box.remove();
//   }, 2000); 
// }

// UI.prototype.deleteBooks = (target) =>
// {
//   if (target.className === "delete")
//     target.parentElement.parentElement.remove();
// }

// ! Local Storage Class :-

class Store
{
  static getBooks()
  {
    let books;

    if (localStorage.getItem('books') === null)
      books = [];
    else 
      books = JSON.parse(localStorage.getItem('books'));

    return books;
  }

  static displayBooks()
  {
    const books = Store.getBooks();

    books.forEach(function(book)   
    {
      const uI = new UI;

      uI.addBooksToList(book);
    });
  }

  static addBooks(book)
  {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
  
  static removeBook(isbn)
  {
    const books = Store.getBooks();

    books.forEach( (book, index) =>
    {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}


// ! DOM Load Event :-

document.addEventListener('DOMContentLoaded', Store.displayBooks);


// ! Event Listener for Add Book :-

form.addEventListener("submit", (event) =>
{
  const titleValue = title.value, authorValue = author.value, isbnValue = isbn.value;

  const book = new Book(titleValue, authorValue, isbnValue);
  console.log(book);

  const uI = new UI();

  console.log(uI);

  uI.clearFields();

  if (book.title.length != 0 && book.author.length != 0 && book.isbn.length != 0)  
  {
    console.log("valid");

    uI.showAlert("Successfully filled the field","success");

    uI.addBooksToList(book);

    Store.addBooks(book);                                          // & <--  Stored books to Local Storage

    // ! Alternate method to crete columns :-

    // var row = document.createElement("tr");
    // bookList.appendChild(row);
    
    // var titleColumn = document.createElement("td");
    // titleColumn.appendChild(document.createTextNode(titleValue));
    // var authorColumn = document.createElement("td");
    // authorColumn.appendChild(document.createTextNode(authorValue));
    // var isbnColumn = document.createElement("td");
    // isbnColumn.appendChild(document.createTextNode(isbnValue));

    // row.appendChild(titleColumn);
    // row.appendChild(authorColumn);    
    // row.appendChild(isbnColumn);
  }
  else {
    uI.showAlert("Please fill your fields","error");
  }  

  event.preventDefault();
});

// ! Event Listener for Delete :-

bookList.addEventListener("click", (event) =>
{
  const uI = new UI();

  uI.deleteBook(event.target);
  uI.showAlert("Book Removed!", "success");

  console.log(event.target.parentElement.previousElementSibling.textContent);
  Store.removeBook(event.target.parentElement.previousElementSibling.innerText);      // & <-- Removed books from Local Storage

  event.preventDefault();
});