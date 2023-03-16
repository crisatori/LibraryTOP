const addBookBtn = document.querySelector("#add-book-btn");
const form = document.querySelector("#book-form");
const main = document.getElementById("main");

const myLibrary = [
	{
		title: "The Little Prince",
		author: "Antoine de Saint-Exupéry",
		pages: "250",
	},
];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibrary(collection) {
	const title = form.querySelector("#book-title").value;
	const author = form.querySelector("#book-author").value;
	const pages = form.querySelector("#book-pages").value;
	const newBook = new Book(title, author, pages);
	collection.push(newBook);
}

form.addEventListener("submit", function (event) {
	addBookToLibrary(myLibrary);
	event.preventDefault();
	const card = document.querySelector(".book-card");
	const clone = card.cloneNode(true);
	clone.querySelector(".title").textContent = myLibrary[myLibrary.length - 1].title;
	clone.querySelector(".author").textContent = myLibrary[myLibrary.length - 1].author;
	clone.querySelector(".pages").textContent = myLibrary[myLibrary.length - 1].pages;
	main.appendChild(clone);
	DisplayIt(form);
});

function DisplayIt(element) {
	if (element.style.display === "none") {
		element.style.display = "inline";
	} else {
		element.style.display = "none";
	}
}

addBookBtn.addEventListener("click", function () {
	DisplayIt(form);
});
