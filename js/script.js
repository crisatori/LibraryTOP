const addBookBtn = document.getElementById("add-book-btn");
const form = document.getElementById("book-form");
const main = document.getElementById("main");
const card = document.getElementsByClassName("book-card");
const myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

form.addEventListener("submit", function (event) {
	const arrayForm = [...form];
	const thistitle = arrayForm[0].value;
	const thisauthor = arrayForm[1].value;
	const thispages = arrayForm[2].value;
	function addBookToLibrary() {
		const book = new Book(thistitle, thisauthor, thispages);
		myLibrary.push(book);
	}
	addBookToLibrary();
	event.preventDefault();
});

function displayBooks(collection) {}
