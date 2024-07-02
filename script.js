"use strict";
console.log("Hello World");
//select body element
const body = document.querySelector("body");
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
  });
}
add();

function removeFunction() {
  const button2 = document.getElementById("btn2");
  button2.addEventListener("click", () => {
    document.getElementById("paragraph").textContent = "";
  });
}
removeFunction();
