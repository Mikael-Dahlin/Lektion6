// set variables
const todoForm = document.querySelector("#addTodoForm");
const formInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");
const clearAll = document.querySelector("#clearList");

// set focus on text input
formInput.focus();

// add event listener for submitting form
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addItemToList(formInput.value);
  todoForm.reset();
});

/* add event listener for current delete buttons in the list
todoList.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    removeItemFromList(element);
  });
}); */

// add event listener and functionality of Clear list button
clearAll.addEventListener("click", (event) => {
  event.preventDefault();
  todoList
    .querySelectorAll("button")
    .forEach((element) => removeItemFromList(element));
});

// function for adding items to list
function addItemToList(todo) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todo} <button onclick="removeItemFromList(this)">Delete</button></li>`
  );
}

// function for removing items from list
function removeItemFromList(element) {
  element.parentElement.remove();
  formInput.focus();
}
