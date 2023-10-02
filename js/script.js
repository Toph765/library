const myLibrary = [];
const display = document.querySelector(".display");
const main = document.querySelector("main");
const addBook = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog");
const inputDetails = document.querySelectorAll("input");
const isRead = document.querySelector("#read-status");
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
        <div>"${myLibrary[myLibrary.length - 1].title}"</div>
        <div>${myLibrary[myLibrary.length - 1].author}</div>
        <div>${myLibrary[myLibrary.length - 1].pages} page(s)</div>
        <button class="is-read" data-index="${myLibrary[myLibrary.length-1].index}">${myLibrary[myLibrary.length - 1].readStatus}</button>
        <button class="remove" data-index="${myLibrary[myLibrary.length-1].index}">Remove</button>`;
    main.prepend(card);
}

function reset() {
    inputDetails.forEach( input => {
        if (input.getAttribute("id") === "title") {
            title = "";
            input.value = "";
        };
        if (input.getAttribute("id") === "author") {
            author = "";
            input.value = "";
        };
        if (input.getAttribute("id") === "pages") {
            pages = "";
            input.value = "";
        };
    })
}

addBook.addEventListener('click', () => {
    dialog.showModal();
})

//inputs

let title = "";
let author = "";
let pages = "";
let readStatus = isRead.value;
let index = 0;

inputDetails.forEach(input => input.addEventListener("change", () => {
    if (input.getAttribute("id") === "title") {title = input.value};
    if (input.getAttribute("id") === "author") {author = input.value};
    if (input.getAttribute("id") === "pages") {pages = input.value};
}))

isRead.addEventListener("change", () => {
    readStatus = isRead.value;
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (title && author && pages && readStatus) {
        addBookToLibrary(title, author, pages, readStatus, index += 1)
        displayBooks();
        reset();
        dialog.close();
    }
    
})

document.addEventListener("click", (e) => {
    const target = e.target.closest(".is-read");

    if (target) {
        let targetIndex = target.getAttribute("data-index");

        for (let i = 0; i < myLibrary.length; i++) {
            if (targetIndex === myLibrary[i].index) {
                if (myLibrary[i].readStatus === "Finished") {
                    myLibrary[i].readStatus = "Unfinished";
                    target.textContent = myLibrary[i].readStatus;
                } else {
                    myLibrary[i].readStatus = "Finished";
                    target.textContent = myLibrary[i].readStatus;
                }
            }
        }
    }
})

document.addEventListener("click", (e) => {
    const target = e.target.closest(".remove");

    if (target) {
       let targetIndex = target.getAttribute("data-index");
       const card = document.querySelectorAll(".card");

        for (let i = 0; i < myLibrary.length; i++) {
            if (targetIndex === myLibrary[i].index) {
                card.forEach(card => {
                    let cardIndex = card.getAttribute("data-index")
                    if (targetIndex === cardIndex) {
                        card.remove();
                    }});
                return myLibrary.splice(i, 1);
            }
        }
    }
})

