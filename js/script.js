// const removeBook = document.querySelector(".remove-book-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const form = document.querySelector("#book-form");
const main = document.getElementById("main");
const removeBook = document.querySelectorAll(".remove-book-btn");
const allBook = document.querySelectorAll(".book-card");
const myLibrary = [];

function Book(title, author, pages, id) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.id = id;
}

function addBookToLibrary() {
	// do stuff here
}

// const titleFromForm = form.querySelector("#book-title").value;
// const authorFromForm = form.querySelector("#book-author").value;
// const pagesFromForm = form.querySelector("#book-pages").value;

form.addEventListener("submit", function (event) {
	const titleFromForm = form.querySelector("#book-title").value;
	const authorFromForm = form.querySelector("#book-author").value;
	const pagesFromForm = form.querySelector("#book-pages").value;
	createCard(titleFromForm, authorFromForm, pagesFromForm);
	event.preventDefault();
});

function createCard(titleFromForm, authorFromForm, pagesFromForm) {
	const id = Math.floor(Math.random() * 1000);
	const newBookData = new Book(titleFromForm, authorFromForm, pagesFromForm, id);
	myLibrary.push(newBookData);
	const newBookCard = document.createElement("div");
	const divBookTitle = document.createElement("div");
	const divBookAuthor = document.createElement("div");
	const divBookPages = document.createElement("div");
	const titleIntroH4 = document.createElement("h4");
	const titleH4 = document.createElement("h4");
	const authorIntroH4 = document.createElement("h4");
	const authorH4 = document.createElement("h4");
	const pagesIntroH4 = document.createElement("h4");
	const pagesH4 = document.createElement("h4");
	const removerBtn = document.createElement("button");
	newBookCard.className = "book-card";
	newBookCard.id = `${id}`;
	divBookTitle.className = "book-title";
	divBookAuthor.className = "book-author";
	divBookPages.className = "book-pages";
	titleIntroH4.className = "title-intro";
	titleH4.className = "title";
	authorIntroH4.className = "author-intro";
	authorH4.className = "author";
	pagesIntroH4.className = "pages-intro";
	pagesH4.className = "pages";
	removerBtn.classList.add("remove-book-btn", `${id}`);
	main.appendChild(newBookCard);
	newBookCard.appendChild(divBookTitle);
	newBookCard.appendChild(divBookAuthor);
	newBookCard.appendChild(divBookPages);
	newBookCard.appendChild(removerBtn);
	divBookTitle.appendChild(titleIntroH4);
	divBookTitle.appendChild(titleH4);
	divBookAuthor.appendChild(authorIntroH4);
	divBookAuthor.appendChild(authorH4);
	divBookPages.appendChild(pagesIntroH4);
	divBookPages.appendChild(pagesH4);
	titleIntroH4.textContent = "Title:";
	authorIntroH4.textContent = "Author:";
	pagesIntroH4.textContent = "No. Pages:";
	titleH4.textContent = titleFromForm;
	authorH4.textContent = authorFromForm;
	pagesH4.textContent = pagesFromForm;
	updater();
}

addBookBtn.addEventListener("click", function () {
	if (form.style.display === "none") {
		form.style.display = "inline";
	} else {
		form.style.display = "none";
	}
});

function updater() {
	const all = document.querySelectorAll(".book-card");
	console.log(all.length);
}
