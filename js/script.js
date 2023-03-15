const addBookBtn = document.getElementById("add-book-btn");
const form = document.getElementById("book-form");
const main = document.getElementById("main");

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
	displayCollection(myLibrary);
	event.preventDefault();
});

function displayCollection(collection) {
	const nmbr = collection.length + 1;
	for (let i = 0; i < collection.length; i++) {
		const card = document.querySelector(".book-card");
		const clone = card.cloneNode(true);
		const clnTitle = clone.querySelector(".title");
		const clnAuthor = clone.querySelector(".author");
		const clnPages = clone.querySelector(".pages");
		clnTitle.textContent = myLibrary[nmbr].title;
		clnAuthor.textContent = myLibrary[nmbr].author;
		clnPages.textContent = myLibrary[nmbr].pages;
		main.appendChild(clone);
	}
}

// addBookBtn.addEventListener("click", function () {
// 	if (form.style.display !== "inline") {
// 		form.style.display = "inline";
// 	} else {
// 		form.style.display = "none";
// 	}
// });
