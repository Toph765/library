const myLibrary = [];
const display = document.querySelector(".display");
const main = document.querySelector("main");
const addBook = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog");
const inputDetails = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submitBtn");

// Object constructor

function book(title, author, pages, readStatus, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = `Title: ${title}, Author: ${author}, Pages: ${pages}, Read status: ${readStatus} `;
    this.index = `index${index}`;
}

//

function addBookToLibrary(title, author, pages, readStatus, index) {
    let newBook = new book(title, author, pages, readStatus, index);
    myLibrary.push(newBook);
}

function displayBooks() {
    
    let card = document.createElement('div');
    card.setAttribute("class", "card ");
    card.setAttribute("data-index", `${myLibrary[myLibrary.length-1].index}`)
    card.innerHTML = `
        <div>${myLibrary[myLibrary.length - 1].title}</div>
        <div>${myLibrary[myLibrary.length - 1].author}</div>
        <div>${myLibrary[myLibrary.length - 1].pages}</div>
        <div>${myLibrary[myLibrary.length - 1].readStatus}</div>
        <button class="remove" data-index="${myLibrary[myLibrary.length-1].index}">Remove</button>`;
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
let index = 0;

inputDetails.forEach(input => input.addEventListener("change", () => {
    if (input.getAttribute("id") === "title") {title = input.value};
    if (input.getAttribute("id") === "author") {author = input.value};
    if (input.getAttribute("id") === "pages") {pages = input.value};
    if (input.getAttribute("id") === "read-status") {readStatus = input.value};
    console.log(title, author, pages, readStatus);
}))

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title, author, pages, readStatus, index += 1)
    displayBooks();
    dialog.close();
    console.log(myLibrary)
})

document.addEventListener("click", (e) => {
    const target = e.target.closest(".remove");

    if (target) {
       let targetIndex = target.getAttribute("data-index");
       const card = document.querySelectorAll(".card");

        for (let i = 0; i < myLibrary.length; i++) {
            if (targetIndex === myLibrary[i].index) {
                card.forEach(card => {
                    if (targetIndex === card.getAttribute("data-index")) {
                        card.remove();
                    }
                })
            return myLibrary.splice(i, 1);
            }
        }
    }
})

/* 
addBookToLibrary('a', 'b', 1, 'yes');
addBookToLibrary('Percy Jackson', 'Rick Riordan', 500, "yes");
addBookToLibrary('lord of the rings', 'jrr tolkien', 1500, 'no'); */
