console.log("Hello World");
// select input element
let input = document.getElementById("txt");
// add event listener
// show focus area
input.addEventListener("focus", () => {
  input.style.backgroundColor = "aqua";
});
// if one selects add button then add inputs into the paragraph
const myButton = document.getElementById("btn1");
myButton.addEventListener("click", function (e) {
  // get input element value
  let inputText = document.getElementById("txt");
  document.getElementById("paragraph").textContent = inputText.value;
});
