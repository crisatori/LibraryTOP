let bookShelf = document.querySelector(".book-shelf");
const addBookBtn = document.querySelector("#addBookBtn");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("form");
let newBook;
// let newFuckingBook;
let myLibrary = [];

function Book(bTitle, bAuthor, bPages, id) {
	this.title = bTitle;
	this.author = bAuthor;
	this.pages = bPages;
	this.id = id;
}

function displayBooks(collection) {
	bookShelf.innerHTML = "";
	for (let i = 0; i < collection.length; i++) {
		newBook = document.createElement("div");
		newBook.className = "book-card";
		newBook.innerHTML = `<div id="${collection[i].id}"><h2 class="book-title">Title:</h2><span class="title">${collection[i].title}</span></div><div><h2 class="book-author">Author:</h2><span class="author">${collection[i].author}</span></div><div><h2 class="book-no-pages">No. Pages:</h2><span class="no-pages">${collection[i].pages}</span><img src="assests/delete.png" /></div>`;
		bookShelf.appendChild(newBook);
	}
}

function addBookToLibrary(title, author, pages) {
	let id = `book${myLibrary.length}`;
	nBookToCollection = new Book(title, author, pages, id);
	myLibrary.push(nBookToCollection);
	displayBooks(myLibrary);
}

addBookToLibrary("El Principito", "Juan PB", 230);
addBookToLibrary("El Gallo", "Soliz", 234);
addBookToLibrary("Carlos Perez", "Ayddd", 230);

submitBtn.addEventListener("click", function (e) {
	const titleForm = form.querySelector("#title-form");
	const authorForm = form.querySelector("#author-form");
	const pagesForm = form.querySelector("#pages-form");
	addBookToLibrary(titleForm.value, authorForm.value, pagesForm.value);
	e.preventDefault();
});

let allBooks = bookShelf.querySelectorAll(".book-card");
allBooks.forEach((book) => {
	book.addEventListener("click", function () {
		let itSink = book.querySelector("div").id;
		let r = myLibrary.findIndex((elemento) => {
			return elemento.id == itSink;
		});
		myLibrary.splice(r, 1);
		bookShelf.removeChild(book);
	});
});
// is this a comment?
