const myLibrary = [];
const display = document.querySelector(".display");
const main = document.querySelector("main");
const addBook = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog");
const inputDetails = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submitBtn");

// Object constructor

function book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = `Title: ${title}, Author: ${author}, Pages: ${pages}, Read status: ${readStatus} `
}

//

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = new book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function displayBooks() {
    
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.innerHTML = `
        <div>${myLibrary[myLibrary.length - 1].title}</div>
        <div>${myLibrary[myLibrary.length - 1].author}</div>
        <div>${myLibrary[myLibrary.length - 1].pages}</div>
        <div>${myLibrary[myLibrary.length - 1].readStatus}</div>
        <button class="remove">Remove</button>`;
    main.prepend(card);
}

addBook.addEventListener('click', () => {
    dialog.showModal();
})

//inputs

let title = "";
let author = "";
let pages = "";
let readStatus = "";

inputDetails.forEach(input => input.addEventListener("change", () => {
    if (input.getAttribute("id") === "title") {title = input.value};
    if (input.getAttribute("id") === "author") {author = input.value};
    if (input.getAttribute("id") === "pages") {pages = input.value};
    if (input.getAttribute("id") === "read-status") {readStatus = input.value};
    console.log(title, author, pages, readStatus);
}))

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title, author, pages, readStatus)
    displayBooks();
    dialog.close();
})


/* 
addBookToLibrary('a', 'b', 1, 'yes');
addBookToLibrary('Percy Jackson', 'Rick Riordan', 500, "yes");
addBookToLibrary('lord of the rings', 'jrr tolkien', 1500, 'no'); */
