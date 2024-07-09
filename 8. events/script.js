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

// window

// history

// location

//Dynamic Route

let userInfo = document.querySelector("h1");

let users = [
  { id: 1, name: "Amin", age: 21 },
  { id: 2, name: "Amir", age: 23 },
  { id: 3, name: "Ali", age: 24 },
  { id: 4, name: "Hasan", age: 19 },
  { id: 5, name: "Babak", age: 29 },
  { id: 6, name: "Reza", age: 32 },
];

let locationSearch = location.search;

// Bad Way
// location.search.slice(1).split('=')[1]

// Good Way
let locationSearchParams = new URLSearchParams(locationSearch);
let userIDParam = locationSearchParams.get("id");

let mainUser = users.find(function (user) {
  return user.id == userIDParam;
});

if (mainUser) {
  userInfo.innerHTML = "Name: " + mainUser.name + " | Age: " + mainUser.age;
} else {
  userInfo.innerHTML = "User Is Not Defined :(";
}

console.log(mainUser);

// access dom
let textElem = document.getElementsByClassName("text")[0];

title.style.color = "green";

console.log(console);

// event options

const btn = document.querySelector("button");

btn.addEventListener(
  "click",
  function () {
    console.log("Click Shod :)");
  },
  { once: true }
);

// event delegation = event bubbling and event capturing

const divElems = document.querySelectorAll("div");

divElems.forEach(function (div, index) {
  div.addEventListener(
    "click",
    function (event) {
      console.log("Div " + (index + 1));
      event.target.style.backgroundColor = "blue";
    },
    {
      capture: true,
    }
  );
});

// stop event propagation

const divElems = document.querySelectorAll("div");

divElems.forEach(function (div, index) {
  div.addEventListener(
    "click",
    function (event) {
      event.stopPropagation();
      console.log("Div " + (index + 1));
      event.target.style.backgroundColor = "blue";
    },
    {
      capture: true,
    }
  );
});

// usage of the event capture

const listItems = document.querySelectorAll("li");
const inputElem = document.querySelector("input");
const languagesContainer = document.querySelector(".list");

// listItems.forEach(function (listItem) {
//     listItem.addEventListener('click', function (event) {
//         console.log(event.target);
//         event.target.remove()
//     })
// })

languagesContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});

inputElem.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    let newLanguageLi = document.createElement("li");
    newLanguageLi.innerHTML = event.target.value;

    languagesContainer.append(newLanguageLi);

    console.log(listItems);

    inputElem.value = "";
  }
});

// strict mode

("use strict");

// num = 2
// number = 12
// console.log(number, num);

// function showValue (a, a) {
//     // Codes
// }

// NaN = 12
// undefined = 120

// console.log(010 + 020); // Octal

// let eval = 12

// let username = 'Amin'

// delete username

num = 2;
console.log(num);

function showValue() {
  "use strict";

  numberVal = 34;
  console.log(numberVal);
}

showValue();

// callback function

const btn = document.querySelector("button");

// function clickHandler () {
//     console.log('Clicked');
//     //  return undefined
// }

// btn.addEventListener('click', clickHandler)

function logger(callbackFunc) {
  // console.log(func);
  console.log("logged (1)");
  callbackFunc();
}

function logger2() {
  console.log("Logged (2)");
}

// logger(logger2)

let numbers = [1, 2, 3, 4, 5, 6];

numbers.map(function (item) {
  console.log(item);
});

// sync and async

console.log(1);
console.log(2);

setTimeout(function () {
  console.log(3);
}, 5000);

console.log(4);
console.log(5);

// usage of the callback function

function firstLogs() {
  console.log(1);
  console.log(2);
}

function middleLog(callback) {
  setTimeout(function () {
    console.log(3);
    callback();
  }, 5000);
}

function lastLogs() {
  console.log(4);
  console.log(5);
}

firstLogs();
middleLog(lastLogs);

// real usage of callback function
let books = [
  { id: 1, name: "dobare fekr kon", price: 95000 },
  { id: 2, name: "dar bab hekmat zendegi", price: 100000 },
  { id: 3, name: "taamolat", price: 78000 },
];

function addBooks(name, price, callback) {
  let newBook = {
    id: books.length + 1,
    name: name,
    price: price,
  };

  setTimeout(function () {
    books.push(newBook);
    callback();
  }, 4000);
}

function logBooks() {
  console.log(books);
}

addBooks("raftar", 400000, logBooks);

// pure function

let testNumber = 100;

console.log(testNumber);

function pow(num1, num2) {
  // return num1 ** num2

  let testNum = 10;

  // testNumber = 1000

  return num1 ** num2 + testNum;

  // return Math.random() * num1 * num2; // new Date
}

console.log(pow(2, 3)); // 8
console.log(pow(2, 3)); // 8
console.log(pow(2, 3)); // 8
console.log(pow(2, 3)); // 8
console.log(pow(2, 3)); // 8

console.log(testNumber);

// high order function
function addNewBook(callbackFunc) {
  // Codes callbackFunc()
}

// Higher Order Function

function hofExp() {
  return function () {
    console.log("I am inner Function :)");
  };
}

// hofExp()()

let hofInner = hofExp();
hofInner();

let numbers = [1, 2, 3, 4, 5];

numbers.map(function () {});

// Spread Syntax

let numbers = [1, 3, 2, 5, 4, 34];

// console.log(numbers[0], numbers[1], numbers[2], numbers[3]);

// numbers.forEach(number => console.log(number))

// console.log(...numbers);

// let copyNumbers = numbers

// copyNumbers.push(90)

// console.log('number:', numbers);
// console.log('Copy number:', copyNumbers);

let copyNumbers = [...numbers];

copyNumbers.push(90);

// console.log('number:', numbers);
// console.log('Copy number:', copyNumbers);

let nums1 = [1, 2, 3, 4];
let nums2 = [5, 6, 7, 8];

let allNumbers = [...nums1, 100, ...nums2];

console.log(allNumbers);

// mesal digar Spread Syntax Es6

// let nums = [2, 4, 1]

// function sum (a, b, c) {
//     console.log('a: ', a);
//     console.log('b: ', b);
//     console.log('c: ', c);
//     return a + b + c
// }

// // console.log(sum(2, 4, 1 ));
// console.log(sum(...nums))

/////////////////////////////////////////////////////////////////////

// Spread Syntax Es9 in objects

let user = {
  id: 1,
  name: "Ali",
  age: 22,
};

let newUser = { ...user };

newUser.age = 24;

console.log("User", user);
console.log("New User", newUser);

// arguments

function sum(a, b, c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log(arguments);
  return a + b + c;
}

console.log(sum(2, 1, 4, 5, 2, 10));

function sum(a, b, c) {
  // console.log('a', a);
  // console.log('b', b);
  // console.log('c', c);
  // console.log(arguments);

  let sumAllArgs = 0;

  let arrayArgs = Array.from(arguments);

  arrayArgs.forEach((item) => (sumAllArgs += item));

  return sumAllArgs;
}

console.log(sum(2, 1, 4, 5, 2, 10));

// Rest Operator

const sum = (a, ...args) => {
  console.log("a", a);
  // console.log('b', b);
  // console.log('c', c);
  console.log("args", args);
  // console.log(arguments);

  let sumAllArgs = 0;

  args.forEach((item) => (sumAllArgs += item));

  return sumAllArgs;
};

console.log(sum(2, 1, 4, 5, 2, 10));

// goftan inke rest bayad akharin parameter bashe
// goftan tafavot rest va spread

/////////////////////////////////////////////////////////////////////

// Array Destructuring

let user = [1, "Ali", 12];
//old way
// let userID = user[0]
// let userName = user[1]
// let userAge = user[2]

let [userID, userName, userAge] = user;

// console.log('userID', userID);
// console.log('userName', userName);
// console.log('userAge', userAge);

// const showNumbers = () => [1, 3, 4, 2, 7, 8];
let num = [1, 3, 4, 2, 7, 8];

let [firstNum, , , secondNum, thirdNum] = num;

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);

// mesal digar az array destructuring

// let user = [1, 'ali', 21, 'Tehran']

// let [userID, userName, userAge, userCity = 'Tabriz'] = user

// console.log(userID);
// console.log(userName);
// console.log(userAge);
// console.log(userCity);

/////////////////////////////////////////////////////////////////////
// objects destructuring

let user = {
  id: 1,
  // name: 'Ali',
  age: 22,
};

// let id = user.id
// let name = user.name
// let age = user.age

// tartib nadashtan object destructuring
let { age, name = "amin", id: userID } = user;

console.log(userID);
console.log(name);
console.log(age);

/////////////////////////////////////////////////////

let users = [
  { id: 1, name: "ali", age: 22, email: "ali@gmail.com" },
  { id: 2, name: "amin", age: 20, email: "amin@gmail.com" },
  { id: 3, name: "qadir", age: 18, email: "qadir@gmail.com" },
  { id: 4, name: "sasan", age: 32, email: "sasan@gmail.com" },
];

const getUser = (userID) => {
  let mainUser = users.find((user) => user.id == userID);

  return mainUser;
};

// let {name: userName, email: userEmail} = getUser(4)

// console.log("UserName:", userName);
// console.log("UserEmail:", userEmail);

/////////////////////////////////////////////////////////////////////

const userIDInput = document.querySelector("#user-id");

userIDInput.addEventListener("keypress", (event) => {
  let { keyCode, target: input } = event;

  if (keyCode === 13) {
    let { name, email } = getUser(input.value);

    console.log("UserName:", name);
    console.log("UserEmail:", email);
  }
});
///////////////////////////////////////////////////////////////
// For of

let numbers = [1, 3, 2, 5, 4];
let userName = "ali";

// Iterable => قابل پیمایش - قابل شمارش

// for (let item of numbers) {
//     console.log(item);
// }

let userName = "ali";

// for (let str of userName) {
//     console.log(str);
// }

let user = {
  id: 1,
  name: "Ali",
  age: 19,
};

// for (let property of user) {
//     console.log(property);
// }

////////////////////////////////////////////////////////////

// mesal digar az for of

// Iterable => قابل پیمایش - قابل شمارش
// Like-Array

function sum() {
  console.log(arguments);
  // arguments.forEach()

  let allArgsSum = 0;

  for (let arg of arguments) {
    allArgsSum += arg;
  }

  return allArgsSum;
}

// console.log('Sum: ', sum(1, 2, 3, 4));

/////////////////////////////////////////////////////////

let liElems = document.getElementsByTagName("li");

// liElems.forEach()

for (let li of liElems) {
  console.log(li);
  li.addEventListener("click", (e) => e.target.remove());
}

// console.log(liElems);

// for in for objects

let user = {
  id: 1,
  name: "Ali",
  age: 19,
};

for (let item in user) {
  // console.log(item)
  console.log(`user.${item}: ${user[item]}`);
}

// modular app.js

const users = [
  { id: 18, name: "Ali", age: 22 },
  { id: 29, name: "Amin", age: 23 },
  { id: 36, name: "Amir", age: 19 },
  { id: 41, name: "Sasan", age: 28 },
  { id: 54, name: "Qadir", age: 20 },
];

function isLogin(userID) {
  let isUserInUsers = users.some((user) => user.id === userID);

  return isUserInUsers;
}
console.log(isLogin(12));

// sakht func.js dar kenar app.js
// import kardan islogin from './func.js'

///////////////////////////////////////////////////////////

// file nahayi app.js

import { isLogin, userRegister, usersCount as usersLength } from "./funcs.js";

let newUserName = prompt("Enter User Name: ");
let newUserAge = prompt("Enter User Age: ");

console.log("Users Count:", usersLength);

// console.log(userRegister(newUserName, newUserAge));

console.log(isLogin(41));

// file nahayi func.js

const users = [
  { id: 18, name: "Ali", age: 22 },
  { id: 29, name: "Amin", age: 23 },
  { id: 36, name: "Amir", age: 19 },
  { id: 41, name: "Sasan", age: 28 },
  { id: 54, name: "Qadir", age: 20 },
];

export let usersCount = users.length;

export function isLogin(userID) {
  let isUserInUsers = users.some((user) => user.id === userID);

  return isUserInUsers;
}

export function userRegister(name, age) {
  let newUserObj = {
    id: Math.floor(Math.random() * 100),
    name: name,
    age: age,
  };

  users.push(newUserObj);

  return users;
}

// export { isLogin, userRegister, usersCount }

//////////////////////////////////////////////////////////////////////
// export default

// app.js

// import mohammad from './funcs.js'
import * as funcs from "./funcs.js";

console.log(funcs.isLogin(29));

// console.log('Users Count:', mohammad);

// funcs.js mesl qabl faqat

export { isLogin, userRegister, usersCount };
// export default usersCount

// type coercion

// Type Coercion (Implicit = اجباری و زوری - Explicit = صریح و واضح)

// let userAge = Number(prompt('Enter Your Age: ', 18))

// console.log('User Age:', userAge);
// console.log('User Age Type:', typeof userAge);

true + false;
true + true;
12 / "3";

// Regex

// let regexCode = /amin/
// let regexCode = /a.m/
let regexCode = /a.+n/;

let text = "I afsmbokfsmbosfikbn, Web Developer";

console.log(regexCode.test(text));

// a()m
// a()()()()()()n

// Regex Email example

let emailRegEx = /.+@.+.com/;

let userEmail = prompt("Plz Enter Your Email: ");

console.log(emailRegEx.test(userEmail));

// amin@gmail.com  babak@gmail.com  amir_amiri@gmail.com

//////////////////////////////////////////////////////////////////

// This Keyword

function removeListItem(el) {
  el.remove();

  console.log(el);
}

// /////////////////////////////////////////////////////

function sumNumbers() {
  let sum = 0;

  for (let arg of arguments) {
    sum += arg;
  }

  console.log("This in function:", this);

  return sum;
}

// console.log('Sum:', sumNumbers(2, 5, 3));

// /////////////////////////////////////////////////////

let user = {
  id: 1,
  name: "Amin",
  age: 22,

  walk: function () {
    console.log("User Walked");
  },

  showThis: function () {
    console.log(this); // this user object
  },

  setName: function (newName) {
    this.name = newName;
  },

  setAge: function (newAge) {
    this.age = newAge;
  },
};

user.setName("Ali");
user.setAge(25);

console.log(user);

/////////////////////////////// Call Apply Bind

let user = {
  id: 1,
  username: "Amin",
  age: 22,
};

let user2 = {
  id: 2,
  username: "Ali",
  age: 19,
};

function showUser(score, city) {
  console.log(
    this.username + " Is " + this.age + " Years Old :) => Score:",
    score,
    "City: " + city
  );
}

// showUser.call(user, 20, 'Tabriz')
// showUser.call(user2, 14, 'Tehran')

// showUser.apply(user, [20, 'Tabriz'])
// showUser.apply(user2, [14, 'Tehran'])

showUser.bind(user, 20, "Tabriz")();
let bindingFunc = showUser.bind(user2, 14, "Tehran");
bindingFunc();

//////////////////////// Usage of call bind and apply

let user = {
  id: 1,
  username: "Amin",
  age: 22,

  walk: function () {
    console.log(this.username);
  },

  // aboutUser: function () {
  //     console.log('this in aboutUser', this);

  //     setTimeout(function () {

  //         console.log('this in setTimeout', this);
  //         console.log(this.username + ' is ' + this.age + ' years old');

  //     }.bind(user), 3000);
  // }

  aboutUser: function () {
    console.log("this in aboutUser", this);

    setTimeout(() => {
      console.log("this in setTimeout", this);
      console.log(this.username + " is " + this.age + " years old");
    }, 3000);
  },
};

let user2 = {
  id: 2,
  username: "Ali",
  age: 19,
};

user.aboutUser();

// DRY => Don't ...

///////////////////////Constractor Function

// DRY => Don't ...

// function Animal () {
//     this.name = 'dog'
//     this.color = 'brown'
//     this.canFly = false
//     this.footsCount = 4
// }

// let dogAnimal = new Animal()

// let dogAnimal2 = new Animal()

// console.log(dogAnimal2);

///////////////////////////////////////////////////////////////

function Person(personID, personUserName, personAge, personJob, personType) {
  this.id = personID;
  this.username = personUserName;
  this.age = personAge;
  this.job = personJob;
  this.type = personType;
}

let userAli = new Person(1, "Ali", 19, "Digital Marketing", "user");
let userAmin = new Person(2, "Amin", 22, "Js Developer", "Admin");

console.log(userAmin);

///////////////////////// Nullish Coalescing Operator

// let port = NaN

// let developingPort = port || 3003 // falsy value => Truthy value

// console.log(developingPort);

///////////////////////  Nullish Operator (null, undefined)  ///////////////////////////////

let port = undefined;
let testPort = 0;

let developingPort = (testPort || port) ?? 3000;

console.log(developingPort);

///////////////////////////// optional chaining

let user = {
  id: 1,
  username: "Amin",
  age: 22,

  address: {
    country: "Iran",
  },
};

// let userStreet = user.address.city ? user.address.city.street : undefined

let userStreet = user.address.city?.street;

console.log(userStreet);

/////////////////////////////// Entries

let person = {
  id: 1,
  firstName: "Amin",
  lastName: "Saeedi Rad",
  age: 22,
  job: "Web Developer",
};

let entriesPerson = Object.entries(person);

for (let userProps of entriesPerson) {
  console.log(`${userProps[0]} : ${userProps[1]}`);
}

console.log(entriesPerson);

//////////////////////////////// Set

// let scores = [
//     12,
//     17,
//     89,
//     90,
//     43,
//     21,
//     17,
//     12,
//     21
// ]

let user = {
  id: 1,
  username: "Amin",
  age: 22,
};

// Set, Map

// //////////////////////////////////////////////////////

let numbers = new Set();

numbers.add(20);
numbers.add(12);
numbers.add(20);
numbers.add(12);
numbers.add(10);
numbers.add(90);
numbers.add(100);

// console.log('Before Delete', numbers, ' && Size =>', numbers.size);

// numbers.delete(20)

// console.log('After Delete', numbers, ' && Size =>', numbers.size);

// numbers.clear()

// console.log('After Clear', numbers, ' && Size =>', numbers.size);

// console.log(numbers.has(12));

// numbers.forEach(number => console.log(number))

/////////// tabdil array be set

// let scores = [
//     12,
//     17,
//     89,
//     90,
//     43,
//     21,
//     17,
//     12,
//     21
// ]
// let setScores = new Set(scores)
// let setScores = new Set([1, 5, 2, 1, 2, 5, 6])

// console.log('Scores Array:', scores);
// console.log('Scores Set:', setScores);

//////////// tabdil set be array

let numbers = new Set();

numbers.add(20);
numbers.add(12);
numbers.add(20);
numbers.add(12);
numbers.add(10);
numbers.add(90);
numbers.add(100);

let arrayNumbers = [...numbers];

// console.log(numbers, typeof numbers);
// console.log(arrayNumbers);

for (let number of numbers) {
  console.log(number);
}

// set 2

// let userName = 'Mohammad Amin' // Iterable

// let setUserName = new Set(userName)

// console.log(setUserName);

///////////////////////////////////////////

let itemOne = { id: 1 };
let itemTwo = { id: 2 };
let itemThree = { id: 3 };

let setItemsData = new Set();

setItemsData.add(22);
setItemsData.add(itemOne);
console.log(setItemsData.has(22)); //true
console.log(setItemsData.has({ id: 1 })); // false

///////////////////////// Map

// Map

// let user = {
//     id: 1,
//     firstName: 'ali',
//     lastName: 'saeedi',
//     age: 20
// }

// for (let userProp of user) {
//     // Codes ...
// }

// console.log(user);

let userMap = new Map();

userMap.set("id", 1);
userMap.set("firstName", "ali");
userMap.set("lastName", "saeedi");
userMap.set("age", 20);

// console.log('UserMap Before Delete', userMap, '&& Size:', userMap.size);

// userMap.delete('age')

// console.log('UserMap After Delete', userMap, '&& Size:', userMap.size);

// console.log(userMap.get('firstName'));

// userMap.clear()

// console.log('UserMap After Clear:', userMap);

// console.log(userMap.has('lastName'));

// userMap.forEach((value, key) => console.log(`${key}: ${value}`))

///////////////////////////////////////////

// tabdil object be map

// let user = {
//     id: 1,
//     firstName: 'ali',
//     lastName: 'saeedi',
//     age: 20
// }

// let userMap = new Map(Object.entries(user))

// console.log(user);
// console.log(userMap);

// tabdil map be object
let userMap = new Map();

userMap.set("id", 1);
userMap.set("firstName", "ali");
userMap.set("lastName", "saeedi");
userMap.set("age", 20);

let userObj = Object.fromEntries(userMap);

console.log(userObj);

console.log(userMap);

////////////////////////////////// CRUD - Proxy

let user = {
  id: 1,
  firstName: "ali",
  lastName: "Saeedi",
  age: 22,
};

// user.job = 'Web Developer'

// console.log(user.firstName) // Read

// console.log(user);

let userProxy = new Proxy(user, {});

console.log("User:", user.firstName);
console.log("Proxy User:", userProxy.firstName);

console.log(user.email); // undefined

// CRUD - Proxy (Get Trap) || (in)

let user = {
  id: 1,
  firstName: "ali",
  lastName: "Saaedi",
  age: 22,
};

user = new Proxy(user, {
  get: function (target, property) {
    console.log("Target:", target);
    console.log("Property:", property);

    // return target[property] ? target[property] : 'Amin'
    return property in target ? target[property] : null;
  },
});

// console.log('User Object:', user.phone);
console.log("User Proxy:", user.id);

// CRUD - Proxy (Set Trap) || (in)

let user = {
  id: 1,
  firstName: "ali",
  lastName: "Saaedi",
};

user = new Proxy(user, {
  get: function (target, property) {
    console.log("Target:", target);
    console.log("Property:", property);

    // return target[property] ? target[property] : 'Amin'
    return property in target ? target[property] : null;
  },

  set: function (target, property, value) {
    console.log("target:", target);
    console.log("property:", property);
    console.log("value:", value);

    if (property === "age" && value < 18) {
      throw new Error("This Value Is Not Valid");
    }
  },
});

user.age = 33;

console.log(user.age);

// tahghigh dar rabete ba symbel ha

// callback hell and promises

//async vs sync
//sync
console.log("1");
console.log("2");
console.log("3");
console.log("4"); //output: 1 2 3 4
//async
console.log("1");
setTimeout(function () {
  console.log("2"); //executes after 3 seconds
}, 3000);
console.log("3");
console.log("4"); //output: 1 3 4 2

let books = [
  { id: 1, name: "Bi Shouri", price: 95000 },
  { id: 2, name: "Bimarefat", price: 56660 },
  { id: 3, name: "pedar", price: 75000 },
];

function addBook(name, price, callback) {
  let newBook = {
    id: books.length + 1,
    name: name,
    price: price,
  };

  setTimeout(function () {
    books.push(newBook);
    callback();
  }, 4000);
}

function logBooks() {
  console.log(books);
}
addBook("golestan", 90_000, logBooks);

let myPromise = new Promise(() => {
  setTimeout(() => {
    console.log("Login check !!");
  }, 3000);
});

myPromise();

//promise ES6 - for asycronize programming and good for preventing callback hell with callback functions
//forexample thing like checking user login from database which takes time we use promises to do that
let myPromisee = new Promise((resolve, reject) => {
  //if we do the promise we cal resolve and if we dont we call reject
  let loginFlag = true;
  setTimeout(() => {
    console.log("Login check !!");
    if (loginFlag) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});
function success() {
  console.log("success :)");
}
function error() {
  console.log("error :(");
}
myPromise.then(success, error);
//or
myPromise
  .then(success)
  .catch(error)
  .finally(() => {
    //this will execute whether promis is resolved or rejected
    console.log("promise is done.");
  });
//another example
let books = [
  { id: 1, name: "Bi Shouri", price: 95000 },
  { id: 2, name: "Bimarefat", price: 56660 },
  { id: 3, name: "pedar", price: 75000 },
];
function addBook(name, price) {
  let newBook = {
    id: books.length + 1,
    name: name,
    price: price,
  };
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (books.push(newBook)) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });
}
addBook("golestan", 90_000)
  .then(() => {
    console.log("success", books);
  })
  .catch(() => {
    console.log("error");
  });
//in these examples we used timeout because we dont have an api that takes time right now
//phases of promise: pending=no resolve and no reject , fullfilled:resolved , rejected: rejects
//we can have multiple .then and if promise resolved first .then()happens and first .then() returns a value and next then() gets the value from its input

// ersal parameter be promise
if (books.push(newBook)) {
  resolve("mitavanid sabt konid");
} else {
  reject(new Error("book not found"));
}
addBook("golestan", 90_000)
  .then((success) => {
    console.log(success, books);
  })
  .catch((err) => {
    console.log(err);
  });

// goftan finally in promise
myPromise
  .then(success)
  .catch(error)
  .finally(() => {
    //this will execute whether promis is resolved or rejected
    console.log("promise is done.");
  });

// chaining handling in promise
let wordPromise = new Promise((resolve, reject) => {
  let text = "hello";
  if (text) {
    resolve(text);
  } else {
    reject(new Error("text not found"));
  }
});

wordPromise
  .then((text) => {
    console.log(text);
    return text.split("");
  })
  .then((text2) => {
    console.log(text2);
    return text2.reverse();
  })
  .then((text3) => {
    console.log(text3);
    return text3.join("");
  })
  .then((text4) => {
    console.log(text4);
  })
  .catch((err) => {
    console.log(err);
  });
// make it in one line
wordPromise
  .then((text) => text.split(""))
  .then((text2) => text2.reverse())
  .then((text3) => text3.join(""))
  .then((text4) => console.log(text4))
  .catch((err) => console.log(err));

// ajax
// api
// http method

//json
let users = [
  {
    id: 1,
    username: "Amin",
    password: 1010,
  },
  {
    id: 2,
    username: "Amir",
    password: 0000,
  },
  {
    id: 1,
    username: "Ali",
    password: 1122,
  },
];

let jsonData =
  '[{"id":1,"username":"Amin","password":1010},{"id":2,"username":"Amir","password":0},{"id":1,"username":"Ali","password":1122}]';

console.log(JSON.parse(jsonData));

// fetch (get)

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/", {
    method: "GET",
  }) // Get
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return new Error("Error :/");
    })
    .then((data) => {
      console.log("Data:", data.results[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

// fetch (post)

const $ = document;

const firstname = $.querySelector(".firstname");
const lastname = $.querySelector(".lastname");
const password = $.querySelector(".password");
const button = $.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let userData = {
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
  };

  fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => console.log(res));
});

// firstname - lastname - password
// Get - Post
// localhost:3000/api/users

// fetch all users
const usersContainer = document.querySelector("#wrap-users");

window.addEventListener("load", () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((user) => {
        usersContainer.insertAdjacentHTML(
          "beforeend",
          `
                <div class="user">
                <div class="user-profile-wrap">
                    <img class="user-profile" src="${user.picture.large}" alt="user-image">
                    <div class="user-profile-description">
                        <h1 class="user-profile-name">${user.name.first} - ${user.name.last}<span class="user-age">${user.dob.age}</span> </h1>
                        <h3 class="user-explanations">Pass: ${user.login.password}</h3>
                    </div>
                </div>
                <div class="btn-groups-column">
                    <button class="delete-user-btn">delete</button>
                    <button class="edit-user-btn">edit</button>
                </div>
            </div>
                `
        );
      });
    });
});

// delete user

function deleteUser() {
  fetch(`http://localhost:3000/api/users/${userID}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  closeModal();
}

// update user

function updateUser() {
  let userData = {
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
  };

  fetch(`http://localhost:3000/api/users/${userID}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((res) => console.log(res));

  closeEditModal();
  getAllUsers();
}

// JsonPlaceHolder

// window.addEventListener('load', () => {
//     fetch('https://jsonplaceholder.typicode.com/posts') // Get
//         .then(res => res.json())
//         .then(data => {
//             data.forEach(post => console.log(post))
//         })
// })

//////////////////////////////////////////////////////////////////

let url = "https://jsonplaceholder.typicode.com/posts/";

let postID = prompt("Enter The PostID That you want: ");

fetch(`${url}${postID}`)
  .then((res) => res.json())
  .then((mainPost) => console.log(mainPost));

// wheatehr project

const inputElem = document.querySelector("input");

let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "26c4d8ad14b57209671494df9bd9fcb9",
};

function fetchData() {
  let countryValue = inputElem.value;

  fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      showData(data);
    });
}

function showData(data) {
  let cityElem = document.querySelector(".city");
  cityElem.innerHTML = `${data.name}, ${data.sys.country}`;

  let dateElem = document.querySelector(".date");
  dateElem.innerHTML = showDate();

  let tempElem = document.querySelector(".temp");
  tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;

  let weatherElem = document.querySelector(".weather");
  weatherElem.innerHTML = `${data.weather[0].main}`;

  let tempsElem = document.querySelector(".hi-low");
  tempsElem.innerHTML = `${Math.floor(
    data.main.temp_min - 273.15
  )}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`;
}

function showDate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();

  return `${day} ${date} ${month} ${year}`;
}

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});

// crud operation

// Fetch all items and populate the table on page load
window.onload = function () {
  getAllItems().then(function (items) {
    populateTable(items);
  });
};

// Function to fetch all items
function getAllItems() {
  return fetch("http://localhost:5000/items")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("Error fetching items:", error);
      return [];
    });
}

// Function to create a new item
function createItem(item) {
  return fetch("http://localhost:5000/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("Error creating item:", error);
      return null;
    });
}

// Function to update an item by ID
function updateItem(id, updatedItem) {
  return fetch(`http://localhost:5000/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("Error updating item:", error);
      return null;
    });
}

// Function to delete an item by ID
function deleteItem(id) {
  return fetch(`http://localhost:5000/items/${id}`, {
    method: "DELETE",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Refresh the table after deleting the item
      return getAllItems().then(function (items) {
        populateTable(items);
        return data;
      });
    })
    .catch(function (error) {
      console.error("Error deleting item:", error);
      return null;
    });
}

// Function to populate the table with items
function populateTable(items) {
  const table = document.getElementById("mytable");
  table.innerHTML = ""; // Clear the table first

  items.forEach(function (item, index) {
    const row = table.insertRow();

    const idCell = row.insertCell(0);
    idCell.textContent = index + 1;

    const nameCell = row.insertCell(1);
    nameCell.textContent = item.name;

    const quantityCell = row.insertCell(2);
    quantityCell.textContent = item.quantity;

    const priceCell = row.insertCell(3);
    priceCell.textContent = item.price;

    const actionCell = row.insertCell(4);
    actionCell.innerHTML = `
      <button class="btn btn-warning" onclick="editItem('${item._id}', '${item.name}', ${item.quantity}, ${item.price})">Edit</button>
      <button class="btn btn-danger" onclick="deleteItem('${item._id}')">Delete</button>
    `;
  });
}

// Function to handle form submission
document
  .getElementById("itemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("itemName").value;
    const quantity = document.getElementById("itemQuantity").value;
    const price = document.getElementById("itemPrice").value;

    const item = {
      name: name,
      quantity: quantity,
      price: price,
    };

    if (this.dataset.id) {
      // Update existing item
      updateItem(this.dataset.id, item).then(function () {
        delete document.getElementById("itemForm").dataset.id;
        document.getElementById("submitBtn").textContent = "Add Item";
        // Refresh the table
        getAllItems().then(function (items) {
          populateTable(items);
        });
      });
    } else {
      // Create new item
      createItem(item).then(function () {
        // Refresh the table
        getAllItems().then(function (items) {
          populateTable(items);
        });
      });
    }

    // Clear the form
    this.reset();
  });

// Function to populate the form for editing
function editItem(id, name, quantity, price) {
  const form = document.getElementById("itemForm");
  form.dataset.id = id;
  document.getElementById("itemName").value = name;
  document.getElementById("itemQuantity").value = quantity;
  document.getElementById("itemPrice").value = price;
  document.getElementById("submitBtn").textContent = "Update Item";
}

/// html proje bala

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <title>Items Table</title>
//     <link href="style.css" rel="stylesheet" />
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
//       crossorigin="anonymous"
//     />
//   </head>
//   <body>
//     <div class="container mt-5">
//       <h2 class="mb-4 text-center">Items</h2>

//       <!-- Form for creating/updating items -->
//       <form id="itemForm" class="border p-4 mb-4 bg-light rounded">
//         <div class="mb-3">
//           <label for="itemName" class="form-label">Name</label>
//           <input type="text" class="form-control" id="itemName" required />
//         </div>
//         <div class="mb-3">
//           <label for="itemQuantity" class="form-label">Quantity</label>
//           <input
//             type="number"
//             class="form-control"
//             id="itemQuantity"
//             required
//           />
//         </div>
//         <div class="mb-3">
//           <label for="itemPrice" class="form-label">Price</label>
//           <input type="number" class="form-control" id="itemPrice" required />
//         </div>
//         <button type="submit" class="btn btn-primary w-100" id="submitBtn">
//           Add Item
//         </button>
//       </form>

//       <div class="table-responsive">
//         <table class="table table-striped table-hover">
//           <thead class="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Price</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody id="mytable">
//             <!-- Table rows will be dynamically populated -->
//           </tbody>
//         </table>
//       </div>
//     </div>

//     <script src="script.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>

/////////////////////////////////////////////////////////////////////////////////

//call back for learn async await

const userLogin = (username, password, callback) => {
  setTimeout(() => {
    callback({
      username: username,
      password: password,
      email: "amin@gmail.com",
    });
  }, 4000);
};

const userCourses = (username, callback) => {
  setTimeout(() => {
    callback([
      { id: 21, title: "Js Expert", price: "Free" },
      { id: 34, title: "Redux Expert", price: "Free" },
    ]);
  }, 3000);
};

const mainCourseInfo = (courseTitle, callback) => {
  setTimeout(() => {
    callback({
      id: 34,
      title: "Redux Expert",
      price: "Free",
      teacher: "Saeedi rad",
      student: 2291,
    });
  }, 2000);
};

console.log("سایت برای کاربر لود شد");

const loginInfos = userLogin("amin_seaadi", "0101", (userObject) => {
  console.log("کاربر لاگین شد:", userObject);

  userCourses(userObject.username, (userAllCourses) => {
    console.log("User Courses: ", userAllCourses);

    mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
      console.log("Main Course Infos:", mainInfos);
    });
  });
});

console.log("کاربر با موفقیت لاگین شد");

// async await with promise

const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: username,
        password: password,
        email: "amin@gmail.com",
      });
    }, 4000);
  });
};

const userCourses = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 21, title: "Js Expert", price: "Free" },
        { id: 34, title: "Redux Expert", price: "Free" },
      ]);
    }, 3000);
  });
};

const mainCourseInfo = (courseTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 34,
        title: "Redux Expert",
        price: "Free",
        teacher: "Saeedi rad",
        student: 2291,
      });
    }, 2000);
  });
};

console.log("سایت برای کاربر لود شد");

// const loginInfos = userLogin('amin_seaadi', '0101', (userObject) => {
//     console.log('کاربر لاگین شد:', userObject);

//     userCourses(userObject.username, (userAllCourses) => {
//         console.log('User Courses: ', userAllCourses);

//         mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
//             console.log('Main Course Infos:', mainInfos);
//         })
//     })
// })

userLogin()
  .then((userObject) => userCourses(userObject.username))
  .then((userAllCourses) => mainCourseInfo(userAllCourses[1].title))
  .then((mainInfos) => console.log(mainInfos));

console.log("کاربر با موفقیت لاگین شد");

// async await with async await

const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: username,
        password: password,
        email: "amin@gmail.com",
      });
    }, 4000);
  });
};

const userCourses = (username) => {
  console.log("User username:", username);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 21, title: "Js Expert", price: "Free" },
        { id: 34, title: "Redux Expert", price: "Free" },
      ]);
    }, 3000);
  });
};

const mainCourseInfo = (courseTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 34,
        title: "Redux Expert",
        price: "Free",
        teacher: "Saeedi rad",
        student: 2291,
      });
    }, 2000);
  });
};

console.log("سایت برای کاربر لود شد");

// const loginInfos = userLogin('amin_seaadi', '0101', (userObject) => {
//     console.log('کاربر لاگین شد:', userObject);

//     userCourses(userObject.username, (userAllCourses) => {
//         console.log('User Courses: ', userAllCourses);

//         mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
//             console.log('Main Course Infos:', mainInfos);
//         })
//     })
// })

// userLogin()
//     .then(userObject => userCourses(userObject.username))
//     .then(userAllCourses => mainCourseInfo(userAllCourses[1].title))
//     .then(mainInfos => console.log(mainInfos))

async function runUserCodes() {
  let userInfos = await userLogin("amin_saeedi", 0101);
  let userAllCOurses = await userCourses(userInfos.username);
  let mainInfos = await mainCourseInfo(userAllCOurses[1].title);

  console.log(mainInfos);
}

runUserCodes();

console.log("کاربر با موفقیت لاگین شد");

// error handeling with async await

const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: username,
        password: password,
        email: "amin@gmail.com",
      });
    }, 4000);
  });
};

const userCourses = (username) => {
  console.log("User username:", username);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([
      //     { id: 21, title: 'Js Expert', price: 'Free' },
      //     { id: 34, title: 'Redux Expert', price: 'Free' },
      // ])

      reject("Error :/");
    }, 3000);
  });
};

const mainCourseInfo = (courseTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 34,
        title: "Redux Expert",
        price: "Free",
        teacher: "Saeedi rad",
        student: 2291,
      });
    }, 2000);
  });
};

console.log("سایت برای کاربر لود شد");

// const loginInfos = userLogin('amin_seaadi', '0101', (userObject) => {
//     console.log('کاربر لاگین شد:', userObject);

//     userCourses(userObject.username, (userAllCourses) => {
//         console.log('User Courses: ', userAllCourses);

//         mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
//             console.log('Main Course Infos:', mainInfos);
//         })
//     })
// })

// userLogin()
//     .then(userObject => userCourses(userObject.username))
//     .then(userAllCourses => mainCourseInfo(userAllCourses[1].title))
//     .then(mainInfos => console.log(mainInfos))

async function runUserCodes() {
  try {
    let userInfos = await userLogin("amin_saeedi", 0101);
    let userAllCOurses = await userCourses(userInfos.username);
    let mainInfos = await mainCourseInfo(userAllCOurses[1].title);

    console.log(mainInfos);
  } catch (err) {
    console.log("مشکلی وجود دارد:", err);
    alert("لطفا دوباره سعی کنید");
  }
}

runUserCodes();

console.log("کاربر با موفقیت لاگین شد");

// async await with the fake api

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((post, index) => {
//             console.log(`Post-${index + 1}: ${post}`);
//         })
//     })

// Async Await Way

async function getPosts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await res.json();

    posts.forEach((post, index) => {
      console.log(`Post-${index + 1}: ${post}`);
    });
  } catch (err) {
    console.log("یه خطایی وجود داره انگار:", err);
    alert("لطفا یبار دیگه کد رو چک بکن");
  }
}

getPosts();

///////////////////////////////////////////////////////// crud operation with async await

// Fetch all items and populate the table on page load
window.onload = async function () {
  const items = await getAllItems();
  populateTable(items);
};

// Function to fetch all items
async function getAllItems() {
  try {
    const response = await fetch("http://localhost:5000/items");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

// Function to create a new item
async function createItem(item) {
  try {
    const response = await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating item:", error);
    return null;
  }
}

// Function to update an item by ID
async function updateItem(id, updatedItem) {
  try {
    const response = await fetch(`http://localhost:5000/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating item:", error);
    return null;
  }
}

// Function to delete an item by ID
async function deleteItem(id) {
  try {
    const response = await fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    // Refresh the table after deleting the item
    const items = await getAllItems();
    populateTable(items);
    return data;
  } catch (error) {
    console.error("Error deleting item:", error);
    return null;
  }
}

// Function to populate the table with items
function populateTable(items) {
  const table = document.getElementById("mytable");
  table.innerHTML = ""; // Clear the table first

  items.forEach((item, index) => {
    const row = table.insertRow();

    const idCell = row.insertCell(0);
    idCell.textContent = index + 1;

    const nameCell = row.insertCell(1);
    nameCell.textContent = item.name;

    const quantityCell = row.insertCell(2);
    quantityCell.textContent = item.quantity;

    const priceCell = row.insertCell(3);
    priceCell.textContent = item.price;

    const actionCell = row.insertCell(4);
    actionCell.innerHTML = `
      <button class="btn btn-warning" onclick="editItem('${item._id}', '${item.name}', ${item.quantity}, ${item.price})">Edit</button>
      <button class="btn btn-danger" onclick="deleteItem('${item._id}')">Delete</button>
    `;
  });
}

// Function to handle form submission
document
  .getElementById("itemForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("itemName").value;
    const quantity = document.getElementById("itemQuantity").value;
    const price = document.getElementById("itemPrice").value;

    const item = {
      name,
      quantity,
      price,
    };

    if (this.dataset.id) {
      // Update existing item
      await updateItem(this.dataset.id, item);
      delete this.dataset.id;
      document.getElementById("submitBtn").textContent = "Add Item";
    } else {
      // Create new item
      await createItem(item);
    }

    // Refresh the table
    const items = await getAllItems();
    populateTable(items);

    // Clear the form
    this.reset();
  });

// Function to populate the form for editing
function editItem(id, name, quantity, price) {
  const form = document.getElementById("itemForm");
  form.dataset.id = id;
  document.getElementById("itemName").value = name;
  document.getElementById("itemQuantity").value = quantity;
  document.getElementById("itemPrice").value = price;
  document.getElementById("submitBtn").textContent = "Update Item";
}

/////////////////////////////////////////////////////////////////class
function User(username, userAge, userJob) {
  this.name = username;
  this.age = userAge;
  this.job = userJob;

  this.getName = function () {
    return this.name;
  };

  this.getAge = function () {
    return this.age;
  };

  this.getJob = function () {
    return this.job;
  };

  this.setName = function (newName) {
    this.name = newName;
  };

  this.setAge = function (newAge) {
    this.age = newAge;
  };

  this.setJob = function (newJob) {
    this.job = newJob;
  };
}

let userAli = new User("Ali", 19, "Android Developer");
let userAmir = new User("Amir", 22, "Web Developer");

userAli.setAge(24);

// console.log(userAmir.getJob());

// Es6 - Class (setter getter extends ... )

class Person {
  constructor(personname, personAge, personJob, personAddress) {
    // console.log('نمونه از روی نقشه (کلاس) ساخته شد ---> ', personname, personAge, personJob, personAddress);

    this.username = personname;
    this.personAge = personAge;
    this.personJob = personJob;
    this.personAddress = personAddress;
  }
}

let personAli = new Person("Ali", 19, "Android Developer", "Tehran"); // Call
let personAmir = new Person("Amir", 22, "Web Developer", "Tabriz"); // Call
let personMohammad = new Person("Mohammad", 21, "Seo", "Shiraz"); // Call

// console.log(personAli);
// console.log(personAmir);
// console.log(personMohammad);

console.log(personAli.personJob);

// MEthod in class

// Es6 - Class (setter getter extends ... )

class Person {
  constructor(personname, personAge, personJob, personAddress) {
    this.username = personname;
    this.personAge = personAge;
    this.personJob = personJob;
    this.personAddress = personAddress;
  }

  startDev = () => {
    console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
  };
}

let personAli = new Person("Ali", 19, "Android Developer", "Tehran"); // Call
let personAmir = new Person("Amir", 22, "Web Developer", "Tabriz"); // Call
let personMohammad = new Person("Mohammad", 21, "Seo", "Shiraz"); // Call

personAmir.startDev(); // Call

// console.log(Person.username);

// console.log(personAli);
// console.log(personAmir);
// console.log(personMohammad);

////////////////////////////////////////////// inheritence

// Es6 - Class (setter getter extends ... )

class Person {
  constructor(personname, personAge, personJob, personAddress) {
    // console.log('نمونه از روی نقشه (کلاس) ساخته شد ---> ', personname, personAge, personJob, personAddress);

    this.personname = personname;
    this.personAge = personAge;
    this.personJob = personJob;
    this.personAddress = personAddress;
  }

  // startDev () {
  //     console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
  // }

  startDev() {
    console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
  }

  getAge() {
    return this.personAge;
  }
}

class Prefessor extends Person {
  constructor(
    personname,
    personAge,
    personJob,
    personAddress,
    personLesson,
    yearsOfjob
  ) {
    super(personname, personAge, personJob, personAddress);

    this.personLesson = personLesson;
    this.yearsOfjob = yearsOfjob;
  }

  startDev() {
    console.log(super.getAge());
    console.log(`استاد ${this.personname} تدریسش رو شروع کرد`);
  }
}

// Todo - Booklist (id, title, isDoing) Exercise

// DRY => Don't Repeat Yourself

let prefessorRamin = new Prefessor(
  "Ramin",
  32,
  "Prefessor",
  "Tabriz",
  "C++",
  8
);

console.log(prefessorRamin.startDev());

let personAli = new Person("Ali", 19, "Android Developer", "Tehran"); // Call
let personAmir = new Person("Amir", 22, "Web Developer", "Tabriz"); // Call
let personMohammad = new Person("Mohammad", 21, "Seo", "Shiraz"); // Call

// personAmir.startDev() // Call

// console.log(Person.username);

// console.log(personAli);
// console.log(personAmir);
// console.log(personMohammad);

////////////////////////////////////////////////////Navigator

const button = document.querySelector(".wrapper");

// button.addEventListener('click', () => {
//     let copyText = 'متن جدید کپی شده است'

//     if (window.navigator.clipboard) {
//         window.navigator.clipboard.writeText(copyText)
//         alert('متن در کلیپ بورد شما کپی شد')
//     } else {
//         alert('لطفا از مرورگر کروم استفاده بکنید')
//     }

// })

button.addEventListener("click", () => {
  if (window.navigator.clipboard) {
    window.navigator.clipboard
      .readText()
      .then((res) => console.log("Clipboard Text:", res));
  }
});

// charge

const button = document.querySelector(".wrapper");

button.addEventListener("click", () => {
  if (navigator.getBattery) {
    window.navigator.getBattery().then((batteryInfo) => {
      console.log(batteryInfo); // Object

      batteryInfo.addEventListener("levelchange", () => {
        console.log("شارژ کاربر تغییر پیدا کرد");
      });

      batteryInfo.addEventListener("chargingchange", () => {
        console.log("دیوایس به شارژ وصل شد | از شارژ درش آورد");
      });
    });
  }
});

// user browser

window.addEventListener("load", () => {
  let userAgent = navigator.userAgent;
  let userBrowser = null;

  if (userAgent.match(/edg/i)) {
    userBrowser = "edge";
  } else if (userAgent.match(/firefox/i)) {
    userBrowser = "firefox";
  } else if (userAgent.match(/opr/i)) {
    userBrowser = "opera";
  } else if (userAgent.match(/chrome/i)) {
    userBrowser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    userBrowser = "safari";
  }

  console.log("Your Browser:", userBrowser);

  let userBrowserImageElem = document.querySelector(`.${userBrowser}`);

  if (userBrowserImageElem) {
    userBrowserImageElem.style.opacity = "1";
  }
});

////////// set Cookie

const setCookieBtn = document.querySelector("button");

setCookieBtn.addEventListener("click", () => {
  console.log(document.cookie); // show all cookies

  const now = new Date();

  console.log(now);

  let expireDay = now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);

  console.log(now);

  document.cookie = `username=amin-saeedi;path=/;expires=${now}`;
});

/// get cookie

const setCookieBtn = document.querySelector("button");
const getCookieBtn = document.querySelector("#get-cookie");

setCookieBtn.addEventListener("click", () => {
  console.log(document.cookie); // show all cookies

  const now = new Date();

  console.log(now);

  let expireDay = now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);

  console.log(now);

  document.cookie = `userage=22;path=/;expires=${now}`;
});

getCookieBtn.addEventListener("click", () => {
  let mainCookieName = prompt("Enter the cookie main:");

  let cookiesArray = document.cookie.split(";");

  let mainCookie = null;

  cookiesArray.some((cookie) => {
    if (cookie.includes(mainCookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });

  console.log(mainCookie);
});

/// delete cookie

const setCookieBtn = document.querySelector("button");
const getCookieBtn = document.querySelector("#get-cookie");
const removeCookieBtn = document.querySelector("#remove-cookie");

removeCookieBtn.addEventListener("click", () => {
  let mainCookieName = prompt("Enter the main cookie name:");

  const now = new Date();

  console.log(now);

  now.setTime(now.getTime() - 2 * 24 * 60 * 60 * 1000);

  console.log(now);

  document.cookie = `${mainCookieName}=22;path=/;expires=${now}`;
});

// login cookie project

const $ = document;
const usernameInput = $.querySelector("#username");
const passwordInput = $.querySelector("#password");
const rememberMeCheckbox = $.querySelector(".ck");
const loginBtn = $.querySelector("button");

function setCookie(cookieName, cookieValue, exDay) {
  const now = new Date();

  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
}

function getCookie(cookieName) {
  let cookiesArray = document.cookie.split(";");

  let mainCookie = null;

  cookiesArray.some((cookie) => {
    if (cookie.includes(cookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });

  return mainCookie;
}

function clearInput() {
  usernameInput.value = "";
  passwordInput.value = "";
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (rememberMeCheckbox.checked) {
    setCookie("login-token", usernameInput.value, 10);
  }

  clearInput();
});

// is login cookie project index file

function getCookie(cookieName) {
  let cookiesArray = document.cookie.split(";");

  let mainCookie = null;

  cookiesArray.some((cookie) => {
    if (cookie.includes(cookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });

  return mainCookie;
}

window.addEventListener("load", () => {
  let isLogin = getCookie("login-token");

  if (!isLogin) {
    location.href = "http://localhost/login.html";
  }
});

////// is login cookie login file

const $ = document;
const usernameInput = $.querySelector("#username");
const passwordInput = $.querySelector("#password");
const rememberMeCheckbox = $.querySelector(".ck");
const loginBtn = $.querySelector("button");

function setCookie(cookieName, cookieValue, exDay) {
  const now = new Date();

  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
}

function clearInput() {
  usernameInput.value = "";
  passwordInput.value = "";
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (rememberMeCheckbox.checked) {
    setCookie("login-token", usernameInput.value, 10);
  }

  clearInput();
});
