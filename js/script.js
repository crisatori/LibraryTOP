const bookShelf = document.querySelector(".book-shelf");
const addBookBtn = document.querySelector("#addBookBtn");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("form");
let newBook;

const myLibrary = [];

function Book(bTitle, bAuthor, bPages) {
	this.title = bTitle;
	this.author = bAuthor;
	this.pages = bPages;
	//this.id = id;
	this.readStatus = false;
	this.changeReadStatus = function () {
		this.readStatus = !this.readStatus;
	};
}

function addBookToLibrary(title, author, pages) {
	const id = `book${myLibrary.length}`;
	const nBookToCollection = new Book(title, author, pages, id);
	myLibrary.push(nBookToCollection);
	displayBooks(myLibrary);
}

addBookBtn.addEventListener("click", function () {
	if (form.style.display === "none") {
		form.style.display = "block";
	} else {
		form.style.display = "none";
	}
});

form.addEventListener("submit", function (e) {
	const bookTitle = document.querySelector("#title-form").value;
	const bookAuthor = document.querySelector("#title-form").value;
	const bookNoPages = document.querySelector("#title-form").value;
	const newBook = new Book(bookTitle, bookAuthor, bookNoPages);
	myLibrary.push(newBook);
	console.log(myLibrary);
	e.preventDefault();
});
