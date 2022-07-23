// default array
let library;
const myLibrary = [
    { title: "The India Story", author: "Bimal Jalal", pages: "150", status: "Read"}
  ];

const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $pages = document.querySelector('#pages');
const $status = document.querySelector('#status');
const $table = document.querySelector('#table');
const $form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
  clear();
});

// Constructor function for Book objects
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}  

// Add Input Values to the Book object
function addBookToLibrary() {
  const newBook = new Book($title.value, $author.value, $pages.value, $status.value);
  library.push(newBook);
}

// To show default object
function defaultObject() {
  library = myLibrary;
}
 
// delete table
function deleteRow(current) {
  current.parentElement.parentElement.remove();
}

// clear Input values
function clear() {
  $title.value = "";
  $author.value = "";
  $pages.value = "";
  $status.value = "";
}

// show the input value in table
function render() {
  defaultObject();
  $table.innerHTML = "";
  library.forEach((book) => {
    const html = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.status}</td>
        <td><button class="btn btn-primary btntwo" type="button" onclick="deleteRow(this)"><i class="fas fa-trash fadelete"></i></button></td>
      </tr>
      `;
    $table.insertAdjacentHTML("beforeend", html);
  });
}
render();