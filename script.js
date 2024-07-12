// Select input element
const input = document.getElementById("txt");
const myList = document.getElementById("myList");
const paragraph = document.getElementById("paragraph");

// Function to save the list to localStorage
function saveList() {
  const listItems = [];
  myList.querySelectorAll("li").forEach((li) => {
    listItems.push(li.textContent.replace("Delete", "").trim());
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
function addItemToList(value) {
  // Create list item
  const listItem = document.createElement("li");
  listItem.textContent = value;

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
    createTextArea.value = listItem.firstChild.textContent;
    // create new save button
    const newSaveButton = document.createElement("button");
    newSaveButton.textContent = "SAVE";
    // clear existing list
    listItem.textContent = "";
    listItem.appendChild(createTextArea);
    listItem.appendChild(newSaveButton);
    // add event listener
    newSaveButton.addEventListener("click", () => {
      listItem.textContent = createTextArea.value;
      //append buttons back
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
    });
  });
  saveList();
}

// Add event listener to the SAVE button
document.getElementById("btn1").addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") {
    document.getElementById("paragraph").textContent =
      "Please enter valid input";
  } else {
    addItemToList(value);
    saveList();
    input.value = ""; // Clear input field
    paragraph.textContent = "";
  }
});

// Load the list from localStorage when the page loads
loadList();
