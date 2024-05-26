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

// music player
const image = document.querySelector("#cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const background = document.getElementById("background");

// Music
const songs = [
  {
    path: "media/html.m4a",
    displayName: "Html Padcast",
    artist: "Ozbi",
    cover:
      "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
  },
  {
    path: "media/kar.m4a",
    displayName: "Developing",
    artist: "Flora Cash",
    cover: "images/peakpx.jpg",
  },
  {
    path: "media/bazar.m4a",
    displayName: "Earn",
    artist: "Linkin Park",
    cover:
      "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
  },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Update DOM
function loadSong(song) {
  console.log(song);
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.path;
  changeCover(song.cover);
}

function changeCover(cover) {
  image.classList.remove("active");
  setTimeout(() => {
    image.src = cover;
    image.classList.add("active");
  }, 100);
  background.src = cover;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = durationMinutes + ":" + durationSeconds;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

// drag and drop events

function dragStartHandler(event) {
  console.log("Drag Start");

  event.dataTransfer.setData("elemId", event.target.id);
}

function dropHandler(event) {
  let targetId = event.dataTransfer.getData("elemId");
  let targetElem = document.getElementById(targetId);

  event.target.append(targetElem);

  console.log("Drop");
}

function dragOverHandler(event) {
  event.preventDefault();
  // console.log('DragOver');
}

// Dragged -> onDragStart onDrag onDragEnd
// Dropped -> onDragEnter onDragOver onDragLeave onDrop

////////////////////////////////////////////////////////////////////////////////

// Local Storage
function insertName() {
  localStorage.setItem("name", "Amin");

  // Key: name    value: 'Amin'
  console.log("Insert Name");
}

function getName() {
  let localName = localStorage.getItem("name");

  console.log(localName);
}

function clearData() {
  localStorage.clear();
}

// dar console

localStorage.setItem("name", "react");
localStorage.setItem("age", 18);
localStorage.setItem("users", ["ali", "amin", "amir"]);
localStorage.getItem("name");
localStorage.getItem("age");
localStorage.getItem("users");

localStorage.setItem("users", JSON.stringify(["ali", "amin", "amir"]));
JSON.parse(localStorage.getItem("users"));

// dark mode

const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", function () {
  // Hint: Add 'dark' class to body :))

  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  // console.log(document.body.className.includes('dark'));  // Boolean
});

window.onload = function () {
  let localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme === "dark") {
    document.body.classList.add("dark");
  }
};

// Local todo list

let $ = document;
const inputElem = $.getElementById("itemInput");
const addButton = $.getElementById("addButton");
const clearButton = $.getElementById("clearButton");
const todoListElem = $.getElementById("todoList");

let todosArray = [];

function addNewTodo() {
  let newTodoTitle = inputElem.value;

  let newTodoObj = {
    id: todosArray.length + 1,
    title: newTodoTitle,
    complete: false,
  };

  inputElem.value = "";

  todosArray.push(newTodoObj);
  setLocalStorage(todosArray);
  todosGenerator(todosArray);

  inputElem.focus();
}

function setLocalStorage(todosList) {
  localStorage.setItem("todos", JSON.stringify(todosList));
}

function todosGenerator(todosList) {
  let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn;

  todoListElem.innerHTML = "";

  todosList.forEach(function (todo) {
    console.log(todo);
    newTodoLiElem = $.createElement("li");
    newTodoLiElem.className = "completed well";

    newTodoLabalElem = $.createElement("label");
    newTodoLabalElem.innerHTML = todo.title;

    newTodoCompleteBtn = $.createElement("button");
    newTodoCompleteBtn.className = "btn btn-success";
    newTodoCompleteBtn.innerHTML = "Complete";
    newTodoCompleteBtn.setAttribute("onclick", "editTodo(" + todo.id + ")");

    newTodoDeleteBtn = $.createElement("button");
    newTodoDeleteBtn.className = "btn btn-danger";
    newTodoDeleteBtn.innerHTML = "Delete";
    newTodoDeleteBtn.setAttribute("onclick", "removeTodo(" + todo.id + ")");

    if (todo.complete) {
      newTodoLiElem.className = "uncompleted well";
      newTodoCompleteBtn.innerHTML = "UnComplete";
    }

    newTodoLiElem.append(
      newTodoLabalElem,
      newTodoCompleteBtn,
      newTodoDeleteBtn
    );

    todoListElem.append(newTodoLiElem);
  });
}

function editTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  todosArray = localStorageTodos;

  todosArray.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.complete = !todo.complete;
    }
  });

  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

function removeTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  todosArray = localStorageTodos;

  let mainTodoIndex = todosArray.findIndex(function (todo) {
    return todo.id === todoId;
  });

  todosArray.splice(mainTodoIndex, 1);

  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

function getLocalStorage() {
  let localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  if (localStorageTodos) {
    todosArray = localStorageTodos;
  } else {
    todosArray = [];
  }

  todosGenerator(todosArray);
}

function clearTodos() {
  todosArray = [];
  todosGenerator(todosArray);
  // localStorage.clear()
  localStorage.removeItem("todos");
}

window.addEventListener("load", getLocalStorage);
addButton.addEventListener("click", addNewTodo);
clearButton.addEventListener("click", clearTodos);
inputElem.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    addNewTodo();
  }
});

// animaiton events

const addAnimationBtn = document.querySelector(".button");
const divElem = document.querySelector(".div");
const pElem = document.querySelector("p");

function setAnimation() {
  // console.log(divElem);

  divElem.style.animation = "move 4s 3";
}

function animationStartHandler(event) {
  console.log("Animation Start");
  pElem.innerHTML = "Animation Start";
  divElem.style.backgroundColor = "pink";
}

function animationRepeatHandler() {
  console.log("Animation Repeat");
  pElem.innerHTML = "Animation Repeat";
  divElem.style.backgroundColor = "green";
}

function animationEndHandler() {
  console.log("Animation End");
  pElem.innerHTML = "Animation End";
  divElem.style.backgroundColor = "lightgray";
}

addAnimationBtn.addEventListener("click", setAnimation);

divElem.addEventListener("animationstart", animationStartHandler);
divElem.addEventListener("animationiteration", animationRepeatHandler);
divElem.addEventListener("animationend", animationEndHandler);

//////////////////////////////////

// get computed style
const boxElem = document.querySelector(".box");

console.log(boxElem.style); // Just for inline styles

let boxElemStyles = getComputedStyle(boxElem);

console.log(boxElemStyles.backgroundColor);

// css text
boxElem.style.cssText = "color: red; background-color: green; font-size: 50px;";

// slider project

let $ = document;
let sliderImgElem = $.querySelector("img");
let prevBtn = $.querySelector(".prev");
let nextBtn = $.querySelector(".next");

let imgSrcArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];

let imgIndex = 0;

function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

function nextImage() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

setInterval(nextImage, 3000);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

// Time in js Date

let myTime = new Date();

console.log(myTime);
console.log(myTime.getFullYear());
console.log(myTime.getMonth());
console.log(myTime.getDate());
console.log(myTime.getHours());
console.log(myTime.getMinutes());
console.log(myTime.getSeconds());

// insertadjacentHtml

const boxElem = document.querySelector(".box");

// boxElem.insertAdjacentHTML('afterbegin', '<li>Courses</li>')
// boxElem.insertAdjacentHTML('beforeend', '<li>Courses</li>')
// boxElem.insertAdjacentHTML('beforebegin', '<li>Courses</li>')
boxElem.insertAdjacentHTML("afterend", "<li>Courses</li>");

// console

let num1 = 2;
let num2 = 3;

// console.log(num1 + num2)
// console.error('Data is not defined')
// console.info('Api response status is 404')
// console.warn('Api response status is 404')
// console.assert(num1 + num2 < 10, 'BIG')

let user = {
  id: 1,
  username: "Amin",
  password: "12345",
  age: 21,
};

let products = [
  { id: 1, name: "LapTop", price: 12000000 },
  { id: 2, name: "Phone", price: 7000000 },
  { id: 3, name: "SSD Hard", price: 2000000 },
  { id: 4, name: "Cool Pad", price: 500000 },
];

// console.table(products)

// console.time('For loop')

// for (let i = 0 ; i < 1000000 ; i++) {
//     // Codes
// }

// console.timeEnd('For loop')

// console.log('قبل از گروه - ابتدا');

// console.group('first logs')
// console.log('First log in gp');
// console.log('Second log in gp');
// console.log('Third log in gp');
// console.groupEnd('first logs')

// console.log('بعد از گروه - انتها');

console.log("%cApi reponse status in 200", "color: red;");

//////////////////////////////////////////////////////////////////

// DOM => Document Object Model
// BOM => Browser Object Model

// window.alert('Alert Notif')

let h1Elem = window.document.getElementById("title");

window.console.log(h1Elem);

window.console.log("Logger");

// DOM => Document Object Model
// BOM => Browser Object Model

let bomElem = document.querySelector(".bom");

console.log("clientWidth:", divElem.clientWidth);
console.log("clientHeigth:", divElem.clientHeight);

////////////////////////////////////

// project scroll bar

let customScroll = document.querySelector("#scroll");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  let documentHeight = document.body.clientHeight;

  let windowHeight = window.innerHeight;

  let scrollPercent = scrollTop / (documentHeight - windowHeight);

  let scrollPercentRounded = Math.round(scrollPercent * 100);

  customScroll.style.width = scrollPercentRounded + "%";

  console.log(scrollPercentRounded);
});
