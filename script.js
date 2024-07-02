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
    const value = inputText.value;
    if (value.trim() === "") {
      document.getElementById("paragraph").textContent =
        "Please enter valid input";
    } else {
      document.getElementById("paragraph").textContent = inputText.value;
    }
    //create list
    const listItems = document.createElement("li");
    listItems.textContent = value;
    // append it to the unordered list
    document.getElementById("myList").appendChild(listItems);
    //clear input field
    inputText.value = "";
  });
}

function removeFunction() {
  const button2 = document.getElementById("btn2");
  button2.addEventListener("click", () => {
    document.getElementById("myList");
    //check if myList lastchild
    if (myList.lastChild) {
      myList.removeChild(myList.lastChild);
    }
  });
}
add();
removeFunction();
