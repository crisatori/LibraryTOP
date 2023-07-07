const addBookBtn = document.querySelector("#add-book-btn");
const form = document.querySelector("#book-form");
const main = document.getElementById("main");

const myLibrary = [];

function Book(title, author, pages, id, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.id = id;
	this.readStatus = readStatus;
	this.changeReadStatus = function () {
		if (this.readStatus === "READ") {
			this.readStatus = "NOT READ";
		} else {
			this.readStatus = "READ";
		}
	};
}

function clear() {
	const allBooks = document.querySelectorAll(".book-card");
	allBooks.forEach((book) => main.removeChild(book));
}

function addBookToLibrary() {
	clear();
	for (let i = 0; i < myLibrary.length; i++) {
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
		const readStatusBtn = document.createElement("button");
		const trash = document.createElement("img");
		trash.src = "./media/trash-bin.png";
		newBookCard.classList.add("book-card", `${i}`);
		newBookCard.id = `${i}`;
		divBookTitle.className = "book-title";
		divBookAuthor.className = "book-author";
		divBookPages.className = "book-pages";
		titleIntroH4.className = "title-intro";
		titleH4.className = "title";
		authorIntroH4.className = "author-intro";
		authorH4.className = "author";
		pagesIntroH4.className = "pages-intro";
		pagesH4.className = "pages";
		removerBtn.classList.add("remove-book-btn");
		readStatusBtn.className = "read-status";
		readStatusBtn.id = `${i}`;
		trash.id = "trash";
		// , `${id}`
		main.appendChild(newBookCard);
		newBookCard.appendChild(divBookTitle);
		newBookCard.appendChild(divBookAuthor);
		newBookCard.appendChild(divBookPages);
		newBookCard.appendChild(removerBtn);
		newBookCard.appendChild(readStatusBtn);
		divBookTitle.appendChild(titleIntroH4);
		divBookTitle.appendChild(titleH4);
		divBookAuthor.appendChild(authorIntroH4);
		divBookAuthor.appendChild(authorH4);
		divBookPages.appendChild(pagesIntroH4);
		divBookPages.appendChild(pagesH4);
		removerBtn.appendChild(trash);
		titleIntroH4.textContent = "Title:";
		authorIntroH4.textContent = "Author:";
		pagesIntroH4.textContent = "No. Pages:";
		titleH4.textContent = myLibrary[i].title;
		authorH4.textContent = myLibrary[i].author;
		pagesH4.textContent = myLibrary[i].pages;
		readStatusBtn.textContent = myLibrary[i].readStatus;
		Updater();
	}
}

form.addEventListener("submit", function (event) {
	const titleFromForm = form.querySelector("#book-title").value;
	const authorFromForm = form.querySelector("#book-author").value;
	const pagesFromForm = form.querySelector("#book-pages").value;
	const id = myLibrary.length - 1 + 1;
	const newBook = new Book(
		titleFromForm,
		authorFromForm,
		pagesFromForm,
		id,
		"READ",
	);
	myLibrary.push(newBook);
	event.preventDefault();
	addBookToLibrary();
	displayHideForm();
});

addBookBtn.addEventListener("click", function () {
	displayHideForm();
});

function displayHideForm() {
	if (form.style.display === "none") {
		form.style.display = "inline";
	} else {
		form.querySelector("#book-title").value = "";
		form.querySelector("#book-author").value = "";
		form.querySelector("#book-pages").value = "";
		form.style.display = "none";
	}
}

function Updater() {
	const allRmvrs = document.querySelectorAll(".remove-book-btn");
	allRmvrs.forEach((btn) => {
		btn.addEventListener("click", function () {
			const thisOne = this.parentElement;
			const dead = myLibrary.indexOf(thisOne.id);
			myLibrary.splice(dead, 1);
			main.removeChild(thisOne);
		});
	});

	const readBtns = document.querySelectorAll(".read-status");
	readBtns.forEach((btn) => {
		btn.style.backgroundColor = "green";
		btn.addEventListener("click", function () {
			myLibrary[btn.id].changeReadStatus();
			btn.textContent = `${myLibrary[btn.id].readStatus}`;
			if (myLibrary[btn.id].readStatus === "NOT READ") {
				btn.style.backgroundColor = "red";
			} else {
				btn.style.backgroundColor = "green";
			}
		});
	});
	// statsUpdater();
}
