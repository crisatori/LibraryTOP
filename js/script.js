const main = document.querySelector(".main-library");
const bookAdderBtn = document.querySelector(".bookadder");
// const bookProfile = document.createElement("div");

const myLibrary = [
	{
		title: "The Little Prince",
		author: "Antoine de Saint-Exupéry",
		pages: "120",
	},
	{
		title: "Snow White",
		author: " James Finn Garner",
		pages: "216",
	},
	{
		title: "Sherlock Holmes",
		author: "Arthur Conan Doyle",
		pages: "200",
	},
];

function Book() {
	// the constructor...
}

function addBookToLibrary() {
	// do stuff here
}

// function displayBooks(arrayObjs) {
// 	for (let i = 0; i < arrayObjs.length; i++) {
// 		const bookProfile = document.createElement("div");
// 		bookProfile.style.cssText =
// 			"width: 175px;height: 250px;border-radius: 25px;border: 5px solid rgb(125, 39, 24);background-color: rgba(206, 118, 70, 0.5);";
// 		bookProfile.className = "cardi";
// 		bookProfile.textContent = arrayObjs[i].title;
// 		main.appendChild(bookProfile);
// 	}
// }
// displayBooks(myLibrary);

bookAdderBtn.addEventListener("click", function () {});
