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

// oncontextMenu

function clickHandler() {
  console.log("Click");
}

function contextMenuHandler() {
  console.log("Right Click");
}

// clipboard Event

let editorElem = document.getElementById("editor");

editorElem.addEventListener("copy", function copyHandler() {
  console.log("Copy");
});
editorElem.addEventListener("cut", function cutHandler() {
  console.log("Cut");
});
editorElem.addEventListener("paste", function pasteHandler() {
  console.log("Paste");
});

function copyHandler(event) {
  event.preventDefault();
  console.log("Copy");
}

function cutHandler(event) {
  event.preventDefault();
  console.log("Cut");
}

function pasteHandler(event) {
  event.preventDefault();
  console.log("Paste");
}

editorElem.addEventListener("copy", copyHandler);
editorElem.addEventListener("cut", cutHandler);
editorElem.addEventListener("paste", pasteHandler);

// page x page y

function clickHandler(event) {
  console.log(event);
}

function contextHandler(event) {
  console.log(event);
}

// on load

function loadHandler() {
  console.log("Loaded");
}

window.addEventListener("load", loadHandler);

// Dom Content load
window.addEventListener("DOMContentLoaded", function () {
  console.log("Dom Content Loaded");
});

// remove eventlistener
function removeHandler() {
  boxElem.removeEventListener("mousemove", mouseMoveHandler);
  console.log("Event Removed :)");
}

btnElem.addEventListener("click", removeHandler);
boxElem.addEventListener("mousemove", mouseMoveHandler);

// onselect
function selectHandler(event) {
  console.log("Selected :)", event);
}

// note app

let $ = document;

const inputElem = $.querySelector("#input-field");
const btnSaveElem = $.querySelector("#btn-save");
const btnDeleteElem = $.querySelector("#btn-delete");
const colorsBox = $.querySelectorAll(".color-box");
const notesContainer = $.querySelector("#listed");

colorsBox.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
  });
});

function generateNewNote() {
  let newNoteDivElem = $.createElement("div");
  newNoteDivElem.className = "card shadow-sm rounded";
  let inputBg = inputElem.style.backgroundColor;
  newNoteDivElem.style.backgroundColor = inputBg;
  newNoteDivElem.addEventListener("click", removeNote);

  let newNotePElem = $.createElement("p");
  newNotePElem.className = "card-text p-3";
  newNotePElem.innerHTML = inputElem.value;

  newNoteDivElem.append(newNotePElem);

  notesContainer.append(newNoteDivElem);

  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
}

function removeNote(event) {
  event.target.parentElement.remove();
}

btnDeleteElem.addEventListener("click", function () {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
});

inputElem.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (inputElem.value) {
      // 'dsv' '' ' '
      generateNewNote();
    }
  }
});

btnSaveElem.addEventListener("click", generateNewNote);

// onScroll
function scrollHandler(event) {
  console.log(
    document.documentElement.scrollTop,
    document.documentElement.scrollLeft
  );
}

document.addEventListener("scroll", scrollHandler);

//sticky nav

const mainNav = document.getElementById("mainNav");
const logoImg = document.querySelector("img");

document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    logoImg.style.height = "64px";
    mainNav.classList.add("bg-black");
    mainNav.classList.add("txt-white");
  } else {
    logoImg.style.height = "84px";
    mainNav.classList.remove("bg-black");
    mainNav.classList.remove("txt-white");
  }
});

// onscroll & scrollby
function scrollTopHandler() {
  window.scrollTo(0, 0);
}

function scrollByHandler() {
  window.scrollBy(0, 100);
}

// audio methods

let audioElem = document.querySelector("audio");
let timeElem = document.querySelector("#time");

function playHandler() {
  audioElem.play();
  console.log("Play Shod :)");

  setInterval(function () {
    timeElem.innerHTML = "00:" + "0" + Math.floor(audioElem.currentTime);
  }, 1000);
}

function pauseHandler() {
  audioElem.pause();
  console.log("Pause Shod :)");
}

function durationHandler() {
  console.log("Duration:", audioElem.duration);
}

function playBackRateHandler() {
  audioElem.playbackRate = 2;
  console.log("Music Speed: 2X");
}

function currentTimeHandler() {
  console.log("Current Time:", Math.floor(audioElem.currentTime));
}

// audioElem.play()
// audioElem.pause()
// audioElem.duration (مدت زمان) (second) 2 => 120s
// audioElem.currentTime (2) (70s)
// audioElem.playBackRate = 2   1x 1.5x 2x 3x

// simple music player

let audioElem = document.querySelector("audio");

let musicsSrc = ["media/music.mp3", "media/stranger.mp3", "media/Massive.mp3"];

let audioIndex = 0;

function previousMusicHandler() {
  audioIndex--;

  if (audioIndex < 0) {
    audioIndex = 2;
  }

  audioElem.setAttribute("src", musicsSrc[audioIndex]);
  console.log(musicsSrc[audioIndex]);
  playHandler();
}

function playHandler() {
  audioElem.play();
  console.log("Music Played");

  setInterval(function () {
    console.log(audioElem.currentTime);
  }, 1000);
}

function pauseHandler() {
  audioElem.pause();
  console.log("Music Paused");
}

function nextMusicHandler() {
  audioIndex++;

  if (audioIndex > musicsSrc.length - 1) {
    audioIndex = 0;
  }

  audioElem.setAttribute("src", musicsSrc[audioIndex]);
  console.log(musicsSrc[audioIndex]);
  playHandler();
}

function musicSpeedHandler() {
  audioElem.playbackRate = 2;
  console.log("Speed 2X");
}

function timeMinuMusicHandler() {
  audioElem.currentTime -= 5;
}

function timePlusMusicHandler() {
  audioElem.currentTime += 5;
}

// async / defer
console.log(document.getElementsByTagName("h1")[0]);
