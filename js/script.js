const myLibrary = [];
const display = document.querySelector(".display");
const main = document.querySelector("main");
const addBook = document.querySelector(".addBook");

function book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = `Title: ${title}, Author: ${author}, Pages: ${pages}, Read status: ${readStatus} `
}

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = new book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.innerHTML = `
            <div>${myLibrary[i].title}</div>
            <div>${myLibrary[i].author}</div>
            <div>${myLibrary[i].pages}</div>
            <div>${myLibrary[i].readStatus}</div>
            <button class="remove">Remove</button>`;
        main.prepend(card);

        /* display.textContent += myLibrary[i].info; */
    }
}

addBookToLibrary('a', 'b', 1, 'yes');
addBookToLibrary('Percy Jackson', 'Rick Riordan', 500, "yes");
addBookToLibrary('lord of the rings', 'jrr tolkien', 1500, 'no');
displayBooks();