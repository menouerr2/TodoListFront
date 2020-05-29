"use strict";

const button = document.querySelector("#submit");
const darkMode = document.querySelector("#buttonDarkMode");
const input = document.querySelector("#userInput");
const ul = document.querySelector("ul");
let li;

function inputLength() {
    return input.value.length;
}

function createNewLi() {
    li = document.createElement("li");
}

function resetInput() {
    input.value = "";
}

function capitalize() {
    return (input.value =
        input.value.charAt(0).toUpperCase() +
        input.value.substr(1).toLocaleLowerCase());
}

function addTextNode() {
    li.appendChild(document.createTextNode(capitalize()));
}

function insertLiToUl() {
    ul.insertAdjacentElement("beforeend", li);
}

function createDeleteLiButton() {
    let deleteLiButton = document.createElement("button");
    let cross = document.createTextNode("\u00D7");
    deleteLiButton.className = "close";
    deleteLiButton.append(cross);
    li.append(deleteLiButton);
}

function deleteLi() {
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.remove();
        };
    }
}

function strikeThrough(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
}

function changeLightModeToDarkMode(ev) {
    if (ev.target.tagName === "BUTTON") {
        document.body.classList.toggle("darkMode");
    }
}

function createListElement() {
    createNewLi();
    addTextNode();
    insertLiToUl();
    resetInput();
    createDeleteLiButton();
    deleteLi();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnterPress(key) {
    if (inputLength() > 0 && key.keyCode === 13) {
        createListElement();
    }
}

ul.addEventListener("click", strikeThrough);

button.addEventListener("click", addListAfterClick);

darkMode.addEventListener("click", changeLightModeToDarkMode);

input.addEventListener("keypress", addListAfterEnterPress);