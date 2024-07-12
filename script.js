"use strict";
// Select input element
const input = document.getElementById("txt");
const myList = document.getElementById("myList");
const paragraph = document.getElementById("paragraph");

// Function to save the list to localStorage
function saveList() {
  const listItems = [];
  myList.querySelectorAll("li").forEach((li) => {
   // Extract the text content of the list item excluding buttons
   const itemText = li.firstChild.textContent.trim();
   listItems.push(itemText);
  });
  localStorage.setItem("myList", JSON.stringify(listItems));
}

// Function to load the list from localStorage
function loadList() {
  const savedList = JSON.parse(localStorage.getItem("myList"));
  if (savedList) {
    savedList.forEach((item) => {
      addItemToList(item);
    });
  }
}

// Function to add an item to the list
function addItemToList(valueInput) {
  // Create list item
  const listItem = document.createElement("li");
  // listItem.textContent = value;
  // Create text node for list item
  const textNode = document.createTextNode(valueInput);
  listItem.appendChild(textNode);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "aqua";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    listItem.remove();
    saveList();
  });

  // Append delete button to list item
  listItem.appendChild(deleteButton);

  // Append list item to the unordered list
  myList.appendChild(listItem);
  // create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "EDIT";
  listItem.appendChild(editButton);
  //add event listener
  editButton.addEventListener("click", () => {
    const createTextArea = document.createElement("textarea");
    createTextArea.value = textNode.textContent;
    // create new save button
    const newSaveButton = document.createElement("button");
    newSaveButton.textContent = "SAVE";
    // clear existing list
    listItem.textContent = "";
    listItem.appendChild(createTextArea);
    listItem.appendChild(newSaveButton);
    // add event listener
    newSaveButton.addEventListener("click", () => {
      textNode.textContent = createTextArea.value;
      // clear existing list
      listItem.textContent = "";
      listItem.appendChild(textNode);
      //append buttons back
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      saveList();
    });
  });

  // Append list item to the unordered list
  myList.appendChild(listItem);
  saveList();
}

// Add event listener to the SAVE button
document.getElementById("btn1").addEventListener("click", () => {
  const valueInput = input.value.trim();
  if (valueInput === "") {
    document.getElementById("paragraph").textContent =
      "";
  } else {
    addItemToList(valueInput);
    saveList();
    input.value = ""; // Clear input field
    paragraph.textContent = "";
  }
});

// Load the list from localStorage when the page loads
loadList();
