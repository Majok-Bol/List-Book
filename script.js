"use strict";
console.log("Hello World");
//select body element
const body = document.querySelector("body");
//select input element
const input = document.getElementById("txt");

function add() {
  const myButton = document.getElementById("btn1");
  myButton.addEventListener("click", () => {
    // get input element value
    let inputText = document.getElementById("txt");
    const value = inputText.value.trim();
    if (value === "") {
      document.getElementById("paragraph").textContent =
        "Please enter valid input";
    } else {
      document.getElementById("paragraph").textContent = "";
    }
    //create list
    const listItems = document.createElement("li");
    listItems.textContent = value;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      listItems.remove();
    });

    // Append delete button to list item
    listItems.appendChild(deleteButton);
    // append it to the unordered list
    document.getElementById("myList").appendChild(listItems);
    //clear input field
    inputText.value = "";
  });
}

add();
