const myLibrary = [];
const display = document.querySelector(".display");

function book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = `Title: ${title}, Author: ${author}, Pages: ${pages}, Read status: ${readStatus} `
}