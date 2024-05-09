//add onclick="funcName()"  attribute to html element
//oneclick is an event and the function will execute if user click on this element
function funcName() {
  alert("you clicked the button");
}

let h1Elem = document.getElementById("title");

function clickFunc() {
  // alert('Click Shod :)')
  h1Elem.style.color = "red";
}

function keyLog() {
  console.log("Type Shod");
}

let h1Elemmm = document.querySelector(".title");

h1Elem.addEventListener("click", function () {
  console.log("Clicked");
});

h1Elem.addEventListener("click", clickEvent);

function clickEvent() {
  console.log("Clicked On H1 Elem");
}

theElem.addEventListener("click", function () {
  alert("you clicked the button");
});

function usernameFocus() {
  console.log("Focus username");
}

function usernameBlur() {
  console.log("Blur username");
}

function passwordFocus() {
  console.log("Focus password");
}

function passwordBlur() {
  console.log("Blur password");
}

let h1Elemm = document.getElementById("title");

h1Elem.addEventListener("click", function () {
  // h1Elem.setAttribute('class', 'red')

  // h1Elem.classList.add('red')
  // h1Elem.classList.remove('sm-font')

  // toggle

  h1Elem.classList.toggle("red");
});

// onChange ('input' - 'select')

let countriesSelectBox = document.getElementById("countries");

function changeHandler() {
  // console.log('Changed')
  console.log(countriesSelectBox.value);
}

let countriesData = {
  Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
  Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
  US: ["Los Angles", "San Diego", "Chicago"],
};

let mainCountryCities = countriesData[mainCountryName];

//event happens only once
let btn = document.querySelector("button");
btn.addEventListener(
  "click",
  function () {
    console.log("hello");
  },
  { once: true }
);
/*

other parameters like 'once: true':
//when we have nested element with same event when event happens for inner element after that it happens for upper elements (bubbling) default
capture:true //this makes it first event happen for upper element then inner elements
//we can prevent bubbling by adding 'even.stopPropagation()'


*/

//remove events
theElem.removeEventListener("click", funcName);

//events
/*
    
    other events:

    onkeypress //just keys that are characters or numbers that can be typed
    onkeydown  // almost all keys
    onkeyup    
    
    focus  //when an input are clicked and active
    blur   //when we get out of an input

    onchange    //when value of an element changes
    onsubmit //when user click the form submit button sets for input type=submit

    oncopy
    oncut
    onpaste
    
    onload  //when an element loaded
    DOMContentLoaded //like onload but here just after dom loaded not css js etc...
    onunload //when page is closed
    onbeforonload

    onclick
    ondblclick  //when double click on an element
    oncontextmenu //when right click on elemen //can prevent right click with return false instead of function call

    onmousmove
    onselect //when a text selected just for input and textarea
    onscroll //can use with some properties like document.documentElement.scrollTop/left
    onmousedown
    onmousup
    onmousenter //like hovering on sth
    onmousleave //oposit of enter
    onmousehover//like enter
    onmouseout  //like leave

    ontouchstart
    ontouchmove
    ontouchend
    ontouchcancel

    //drag and drops events
    //for dragged element
    draggable="true" // to make an element draggable
    ondragstart
    ondrag
    ondragend
    //for the element that we want to drop in
    ondrop // make it droppable in :|
    ondragenter
    ondragover // for the element that we want to drag into
    ondragleave
    //to get an alement and drag in elsewhere
    event.dataTransfer.setData('idname',event.target.id)
    event.dataTransfer.getData('thatidname')

    //animations
    //first set an animation to an element with css
    onanimationstart
    onanimationiteration
    onanimationend

    //resize window.
    onresize //apply to window


    ononline //when user becomes online
    onoffline
    
*/

// Arrow Function

// function sum (num1, num2) {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// const sum = (num1, num2) => {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// const pow = (num1, num2) => {
//     return num1 ** num2
// }

const pow = (num1, num2) => num1 ** num2;

const logger = (val) => console.log(val);

const generateUser = (id, name, age = 18) => ({ id: id, name: name, age: age });

// console.log(sum(8, 12)) // 20
// console.log(pow(3, 2)); // 9
// logger('Test Text')

console.log(generateUser(1, "Ali", 22));

//Example for Arrow Function

let numbers = [1, 4, 2, 8, 76, 32, 99, 34];

// numbers.forEach(number => console.log(number))

let mapDatas = numbers.map((number) => number * 2);

console.log(mapDatas);

// //////////////////////////////////////

const btns = document.querySelector("button");

btns.addEventListener("click", (event) => {
  console.log(event);
});

//OnSubmit
let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", function () {
  console.log("سابمیت شد");
});

let usernameInput = document.getElementById("username");

//prevent an event default behaviour
event.preventDefault(); // just for element that event.cancelable is true

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
});

usernameInput.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event);
});

//Event Object
let logBtn = document.getElementById("btn");
let usernameInput = document.getElementById("username");

logBtn.addEventListener("click", function (event) {
  console.log(event);
});

usernameInput.addEventListener("keydown", function (event) {
  console.log(event);
  // if (event.key === 'Enter') {
  if (event.keyCode === 13) {
    console.log("اینتر فشار داده شد");
  }
});

//nodes in js
let h1Elems = document.getElementById("title"); // make a h1

// console.log(h1Elem.nodeName)
// console.log(h1Elem.nodeType)

// siblings

let head1 = document.getElementById("head1");
let head2 = document.getElementById("head2");
let head3 = document.getElementById("head3");
let head4 = document.getElementById("head4");
let head5 = document.getElementById("head5");
let head6 = document.getElementById("head6");

let listItems = document.getElementsByClassName("list-item");
let list = document.getElementById("list");

// console.log(head3.parentNode);
// console.log(head1.parentElement);

// console.log(head3.previousElementSibling.previousElementSibling);
// console.log(head3.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(listItems[2].nextSibling.nextSibling);
// console.log(listItems[2].previousSibling.previousSibling.previousSibling.previousSibling);
// console.log(listItems[2].previousElementSibling);

// console.log(list.childElementCount);
// console.log(list.children[2]);
// console.log(list.childNodes);
// console.log(list.hasChildNodes()); // Boolean
// console.log(list.firstChild);
// console.log(list.lastChild);
console.log(list.firstElementChild);
console.log((list.lastElementChild.firstElementChild.style.color = "red"));

// remove elem

// let btn = document.querySelector('button')
// let h1Elem = document.getElementById('title')
// let h1TextElem = document.getElementsByClassName('text')

// btn.addEventListener('click', function () {
//     // console.log('Click');
//     // h1Elem.remove()
//     h1TextElem[0].remove()
// })

//////////////////////////////////////

let listItems = document.querySelectorAll(".list-item");

// console.log(listItems)

listItems.forEach(function (li) {
  li.addEventListener("click", function (event) {
    // event.target.remove()
    event.target.parentElement.remove();
  });
});

// tamrin todo list

let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoUlElem = $.querySelector(".todos");

function addNewTodo(newTodoValue) {
  let newTodoLi = $.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = newTodoValue;

  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";

  newTodoTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newTodoLi.append(newTodoTitleSpan, newTodoTrash);

  todoUlElem.append(newTodoLi);

  console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = "";
      addNewTodo(newTodoValue);
    }
  }
});
