let bookShelf = document.querySelector(".book-shelf");
const addBookBtn = document.querySelector("#addBookBtn");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("form");
// let newFuckingBook;
let myLibrary = [
  { title: "The Book", author: "The Author", pages: "The Pages" },
];

function Book(bTitle, bAuthor, bPages) {
  this.title = bTitle;
  this.author = bAuthor;
  this.pages = bPages;
}

function displayBooks(collection) {
  bookShelf.innerHTML = "";
  for (let i = 0; i < collection.length; i++) {
    let newBook = document.createElement("div");
    newBook.className = "book-card";
    newBook.innerHTML = `<div><h2 class="book-title">Title:</h2><span class="title">${collection[i].title}</span></div><div><h2 class="book-author">Author:</h2><span class="author">${collection[i].author}</span></div><div><h2 class="book-no-pages">No. Pages:</h2><span class="no-pages">${collection[i].pages}</span></div>`;
    bookShelf.appendChild(newBook);
  }
}
// displayBooks(myLibrary);

function addBookToLibrary(title, author, pages) {
  nBookToCollection = new Book(title, author, pages);
  myLibrary.push(nBookToCollection);
}

submitBtn.addEventListener("click", function (e) {
  const titleForm = form.querySelector("#title-form");
  const authorForm = form.querySelector("#author-form");
  const pagesForm = form.querySelector("#pages-form");
  addBookToLibrary(titleForm.value, authorForm.value, pagesForm.value);
  form.style.cssText = "display: none";
  displayBooks(myLibrary);
  e.preventDefault();
});
