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
  deleteButton.style.backgroundColor = "#DC3545";
  deleteButton.style.width = "60px";
  deleteButton.style.borderRadius = "1rem";
  deleteButton.style.padding = "6px";
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
  editButton.style.backgroundColor = "  #fcb3c7";
  editButton.style.borderRadius = "1rem";
  editButton.style.width = "60px";
  editButton.style.padding = "6px";
  editButton.style.cursor = "pointer";
  listItem.appendChild(editButton);
  //add event listener
  editButton.addEventListener("click", () => {
    const createTextArea = document.createElement("textarea");
    createTextArea.value = textNode.textContent;
    // create new save button
    const newSaveButton = document.createElement("button");
    newSaveButton.textContent = "SAVE";
    newSaveButton.style.textAlign = "center";
    newSaveButton.style.borderRadius = "1rem";
    newSaveButton.style.borderColor = "black";
    newSaveButton.style.backgroundColor = "#20c997";
    newSaveButton.style.padding = "6px";
    newSaveButton.style.width = "60px";
    newSaveButton.style.cursor = "pointer";
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
    document.getElementById("paragraph").textContent = "";
  } else {
    addItemToList(valueInput);
    saveList();
    input.value = ""; // Clear input field
    paragraph.textContent = "";
  }
});

// Load the list from localStorage when the page loads
loadList();
