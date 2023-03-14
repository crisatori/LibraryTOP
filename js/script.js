const addBookBtn = document.getElementById("add-book-btn");
const form = document.getElementById("book-form");
const myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibrary() {}

addBookBtn.addEventListener("click", function () {
	// formVisibility(form);
	addBookToLibrary();
});

// function formVisibility(thiselement) {
// 	if (thiselement.style.display === "none") {
// 		thiselement.style.display = "inline";
// 	} else {
// 		thiselement.style.display = "none";
// 	}
// }
