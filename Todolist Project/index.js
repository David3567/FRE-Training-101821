// selected item
let selectedListItemDiv;

// Invoke on load
setDefaultItems();
enterToAddNewItem();
enterToUpdateItem();
// parseDataToList()
checkIfEmpty();

// Set default todo items
function setDefaultItems() {
  setItem("This is my first todo task.");
  setItem("This is my second todo task.");
}

// Set todo item
function setItem(task) {
  // targeting ul element
  let todoList = document.querySelector("ul.container__todo-items");

  // creating li element for the task
  let listItem = document.createElement("li");

  // creating div element for the task
  let itemDiv = document.createElement("div");
  itemDiv.className = "container__todo-item";

  // creating section element for task text
  let itemTextSection = document.createElement("section");
  itemTextSection.className = "todo-item__text";

  // default task text
  const itemText = document.createTextNode(task);

  // inserting text into the text section
  itemTextSection.appendChild(itemText);

  // creating section element for functions
  let itemFuncSection = document.createElement("section");
  itemFuncSection.className = "todo-item__function";

  // append close button into the function section
  itemFuncSection.appendChild(editButton());
  itemFuncSection.appendChild(closeButton());

  // append two sections into the div element
  itemDiv.appendChild(itemTextSection);
  itemDiv.appendChild(itemFuncSection);

  // append div element into the li element
  listItem.appendChild(itemDiv);

  // add default list item into ul element
  todoList.appendChild(listItem);

  // features
  editItem();
  deleteItem();
  toggleStrike();
}

// Edit button for each list item
function editButton() {
  // create font awesome icon
  let icon = document.createElement("i");
  icon.className = "fas fa-edit";

  // create span element and insert icon into it
  let span = document.createElement("span");
  span.className = "todo-item__edit-button";
  span.setAttribute("onclick", "editItem()");
  span.appendChild(icon);

  return span;
}

// Close button for each list item
function closeButton() {
  // create font awesome icon
  let icon = document.createElement("i");
  icon.className = "fas fa-times-circle";

  // create span element and insert icon into it
  let span = document.createElement("span");
  span.className = "todo-item__close-button";
  span.setAttribute("onclick", "deleteItem()");
  span.appendChild(icon);

  return span;
}

// Edit todo task
function editItem() {
  // get edit item
  let edit = document.getElementsByClassName("todo-item__edit-button");

  // listening clicks
  for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      openModal();

      let listItemSection = this.parentElement; // section element
      let listItemDiv = listItemSection.parentElement; // div element
      selectedListItemDiv = listItemDiv;

      // show current task
      let currentTask = document.querySelector("p.modal__current-task");
      currentTask.innerHTML = selectedListItemDiv.childNodes[0].innerHTML;
    };
  }
}

// Delete todo task
function deleteItem() {
  let close = document.getElementsByClassName("todo-item__close-button");

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let listItemSection = this.parentElement; // section element
      let listItemDiv = listItemSection.parentElement; // div element
      let listItem = listItemDiv.parentElement; // li element
      // listItem.style.display = "none";

      let todoList = document.querySelector("ul.container__todo-items");
      todoList.removeChild(listItem);

      checkIfEmpty();
    };
  }
}

// Toggle strike through text
function toggleStrike() {
  let listItemText = document.getElementsByClassName("todo-item__text");

  for (let i = 0; i < listItemText.length; i++) {
    listItemText[i].onclick = function () {
      let listItem = document.getElementsByTagName("li");
      listItem[i].classList.toggle("complete");
    };
  }
}

// Handle ADD Button
function handleAddButton() {
  let addButton = document.querySelector("button.container__todo-button");
  let todoInput = document.querySelector("input#todoInput");
  let alertText = document.querySelector("p.container__alert");
  let hintText = document.querySelector("p.container__hint");

  hintText.style.visibility = "visible";

  let isExpanded = false;

  // check if input field is expanded
  if (todoInput.style.width === "100%") {
    isExpanded = true;
  } else if (todoInput.style.width === "50px") {
    isExpanded = false;
  }

  // handle button action
  if (isExpanded) {
    todoInput.style.width = "50px";
    todoInput.style.padding = "0";
    todoInput.setAttribute("placeholder", "");
    addButton.style.transform = "rotate(0deg)";
    hintText.style.opacity = "0";
    alertText.style.visibility = "hidden";
    isExpanded = false;
  } else {
    todoInput.style.width = "100%";
    todoInput.style.padding = "0 20px";
    todoInput.setAttribute("placeholder", "Add new todo item...");
    addButton.style.transform = "rotate(-45deg)";
    hintText.style.opacity = "1";
    todoInput.focus();
    isExpanded = true;
  }
}

// Using ENTER to add new item
function enterToAddNewItem() {
  let todoInput = document.querySelector("input#todoInput");

  todoInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      newTodoItem();
    }
  });
}

// Using ENTER to update selected item
function enterToUpdateItem() {
  let modalInput = document.querySelector("input#modalInput");

  modalInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      updateFromModal();
    }
  });
}

// Create a new list item
function newTodoItem() {
  // get todo item info from input
  let todoInputVal = document.querySelector("input#todoInput").value;

  // target the alert text
  let alertText = document.querySelector("p.container__alert");

  if (todoInputVal === "") {
    alertText.style.visibility = "visible";
  } else {
    setItem(todoInputVal);
    checkIfEmpty();
    scrollToBottom(document.querySelector("ul"));
    alertText.style.visibility = "hidden";
  }

  // reset text field
  document.querySelector("input#todoInput").value = "";
}

// scroll to bottom
function scrollToBottom(div) {
  // console.log(div);
  div.scrollTo(0, div.scrollHeight);
}

// check if empty
function checkIfEmpty() {
  // targeting ul element
  let todoList = document.querySelector("ul.container__todo-items");

  // target the no task wrapper
  let noTaskWrapper = document.querySelector("div.container__no-task-wrapper");

  if (todoList.childNodes.length === 0) {
    todoList.style.display = "none";
    noTaskWrapper.style.display = "flex";
  } else {
    todoList.style.display = "block";
    noTaskWrapper.style.display = "none";
  }
}

// ============================ modal ============================
// close modal
function closeModal() {
  let modal = document.querySelector("div.modal");
  modal.style.display = "none";

  // hide the alert text
  let alertText = document.querySelector("p.modal__alert");
  alertText.style.visibility = "hidden";

  // reset text field
  document.querySelector("input#modalInput").value = "";
}

// open modal
function openModal() {
  let modal = document.querySelector("div.modal");
  modal.style.display = "flex";
}

// update from modal
function updateFromModal() {
  // get modal input
  let modalInput = document.querySelector("input#modalInput").value;

  // target the alert text
  let alertText = document.querySelector("p.modal__alert");

  if (modalInput === "") {
    alertText.style.visibility = "visible";
  } else {
    selectedListItemDiv.childNodes[0].innerHTML = modalInput;

    alertText.style.visibility = "hidden";
    closeModal();
  }
}

// ============================ fetch data from api ============================
async function getDataArray() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return data;
}

async function parseDataToList() {
  const dataArray = await getDataArray();

  dataArray.forEach((todoObj) => {
    setItem(todoObj.title);
  });
}
