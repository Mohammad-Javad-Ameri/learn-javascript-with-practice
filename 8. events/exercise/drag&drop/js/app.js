let addTodo = document.getElementById("add_btn");
let modal = document.getElementById("todo_form");
let divStatus = document.getElementsByClassName("status");
let overlay = document.getElementById("overlay");
// Modal item
let closeModal = document.getElementsByClassName("close-modal");
let todoInput = document.getElementById("todo_input");
let todosubmit = document.getElementById("todo_submit");
let noStatusColumn = document.getElementById("no_status");
let todoIdCounter = 0;

addTodo.addEventListener("click", function () {
  modal.classList.add("active");
  overlay.classList.add("active");
});

closeModal[0].addEventListener("click", function () {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

todosubmit.addEventListener("click", function (e) {
  e.preventDefault();
  addNewTodo();
});

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addNewTodo();
  }
});

function addNewTodo() {
  let todoInputValue = todoInput.value.trim();
  if (todoInputValue !== "") {
    let newDivElem = document.createElement("div");
    newDivElem.className = "todo";
    newDivElem.innerHTML = `${todoInputValue}<span class="close">&times;</span>`;
    newDivElem.setAttribute("draggable", "true");
    newDivElem.id = `todo-${todoIdCounter++}`;

    let closeSpan = newDivElem.querySelector(".close");
    closeSpan.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });

    noStatusColumn.appendChild(newDivElem);

    newDivElem.addEventListener("dragstart", dragStart);
    todoInput.value = "";
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

let statusElems = document.querySelectorAll(".status");

statusElems.forEach(function (statusElem) {
  statusElem.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  statusElem.addEventListener("drop", function (event) {
    event.preventDefault();
    let todoId = event.dataTransfer.getData("text/plain");
    let targetElem = document.getElementById(todoId);
    if (event.target.classList.contains("status")) {
      event.target.appendChild(targetElem);
    }
  });
});
