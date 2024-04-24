//hal tamrin soal
var allQuestions = [
  { id: 1, title: "2 + 2", answer: "4" },
  { id: 2, title: "2 * 4", answer: "8" },
  { id: 3, title: "7 ** 2", answer: "49" },
  { id: 4, title: "12 / 4", answer: "3" },
  { id: 5, title: "100 / 25", answer: "4" },
  { id: 6, title: "100 * 2", answer: "200" },
  { id: 7, title: "Cpaital Of Iran?", answer: "tehran" },
];

var score = 0;

var mainAnswer = "";

allQuestions.forEach(function (question) {
  mainAnswer = prompt(question.title + " ?");

  if (mainAnswer === question.answer) {
    score++;
  }
});

alert("Your Final Score: " + score);

//hal tamrin time
var minute = +prompt("Enter The Minute: "); // 1
var second = +prompt("Enter The Second: "); // 12

var timer = setInterval(function () {
  // codes

  if (second === -1) {
    minute--;
    second = 59;
  }

  if (minute === 0 && second === 0) {
    clearInterval(timer);
  }

  console.log("Timer: " + minute + " : " + second);
  second--;
}, 1000);

// Document Object Model
// with DOM we can minipulate web page document elements

// get elements
let h1Elem = document.getElementById("title");
console.log(h1Elem);

let liElems = document.getElementsByClassName("list-item");
console.log(liElems);

let listItems = document.getElementsByTagName("li");
console.log(listItems);

let firstListItem = document.querySelector("#box");
console.log(firstListItem);

let ulItems = document.querySelectorAll(".list-item");
console.log(ulItems);

let inputElement = document.getElementById("input");
console.log(inputElement);

//get & set attribute
let h1Elem = document.getElementById("title");
console.log(h1Elem.getAttribute("align"));
console.log(h1Elem.getAttribute("id"));

h1Elem.setAttribute("class", "js-text");
let liElems = document.getElementsByClassName("list-item");
console.log(liElems[0].setAttribute("id", "about"));

//get attribute with .
h1Elem.id; //gets only reall html attribue/object property //can get a setted propert for html element directly in js like the code bellow //but for class we should use .className
h1Elem.NewProperty = "new attribute";
//check or remove attribute
h1Elem.removeAttribute("placeholder"); //removes a specific attribute
h1Elem.hasAttribute("href"); //checks if an element has a specific attribute or not / true or false

//get & set css style
let h1Elem = document.getElementById("title");

h1Elem.style.color = "red";
h1Elem.style.fontSize = "60px";

let liItems = document.getElementsByClassName("list-item");

liItems[3].style.color = "blue";
liItems[3].style.fontWeight = "bold";

console.log(liItems);

// let allnonInlineStyles = getComputedStyle(boxElem); //for external or internal (not inline!) styles
// allnonInlineStyles.backgroundColor;
h1Elem.style.cssText = "color: red; background-color:blue;"; //write exacly the css properties
document.documentElement.style.setProperty("--varName", "value"); //for setting or changing css variables
document.documentElement.style.getPropertyValue("--varName"); //returns the variable value

//get and change inside of html tags
liElems[2].innerHTML; //all three show the value of element
liElems[2].innerText;
liElems[2].textContent;
liElems[2].innerHTML = "home"; //for all elements
inputElement.value = "react"; //for forms and input

let h1Elem = document.getElementById("title");

let liItems = document.querySelectorAll(".list-item");

let input = document.getElementById("input");

let selectBox = document.getElementById("select");

// console.log(liItems[2].innerHTML)
// console.log(liItems[2].innerText)
// console.log(liItems[0].textContent)
liItems[0].innerHTML = "درباره ما";

selectBox.value = "tehran";

input.value = "vue js";

console.log(selectBox.value);

//create element and send it to html

let userName = prompt("Enter The Name: ");

let newDivElem = document.createElement("div");

newDivElem.innerHTML = userName;

newDivElem.setAttribute("id", "username");

newDivElem.setAttribute("class", "title");

newDivElem.style.color = "green";

console.log(newDivElem);

let ulElem = document.querySelector("ul");
let newLiItem = document.createElement("li");
newLiItem.innerHtml = "products";
newLiItem.setAttribute("class", "list-item");
ulElem.append(newLiItem); //this //can be any string or node //can have multiple inputes //can not return anything in a variable
ulElem.appendChild(newLiItem); //or this //just add Node (html element) // just one input //can return nodes to a variable
// ulElem.insertAdjacentHTML(position, "html code"); //positons: beforbegin - afterbegin - beforend - afterend

//remove elements from DOM
ulElem.remove(); //just remove a single element not array

//add or remove css classes
h1Elem.classList.add("classname"); //adds class
h1Elem.classList.remove("classname"); //removes class
h1Elem.classList.toggle("classname"); //adds class if it doesnt exist removes class if it exist

//event minipulation
h1Elem.addEventListener("submit", function (event) {
  console.log(event); //it logs all element event properties which can be used to minipulate the element and user interaction
  event.target; // an example of a proprty that returns the element
  //other properties can be seen in console.log(event)
});

//Nodes
h1Elem.nodeName; //name of the node
h1Elem.nodeType; //type number of node

//siblings minipulation
head3.parentNode; // node can be enything like comments texts etc...
head1.parentElement; // parent element

head3.previousElementSibling.previousElementSibling; //two previous sibling element
head3.nextElementSibling.nextElementSibling.nextElementSibling; //three next sibling element
listItems[2].nextSibling.nextSibling; //this one returns not just a element but any next node like comments newLine etc...
listItems[2].previousSibling.previousSibling.previousSibling.previousSibling;
listItems[2].previousElementSibling;

list.childElementCount; //number of child elements
list.children[2]; //choose which child element of an element
list.childNodes; //returns all element child plus every other nodes like comment newline etc...
list.hasChildNodes(); // Boolean wheater has a child or not
list.firstChild;
list.lastChild;
list.firstElementChild; //just elementNode
list.lastElementChild.firstElementChild.style.color = "red";

//scroll
window.scrollTo(x, y); //scroll x & y of page
window.scrollBy(x, y); //scroll x & y of where we are now

//datasets //we can add custom attributes to html elements and access with dataset
//add data-anyName="value" to html elements
//can be accessed in js like:
h1Elem.dataset.anyName;

//access html audio or video properties
audvidElem.play();
audvidElem.pause();
audvidElem.duration(); //returns in seconds
audvidElem.currentTime(); //in seconds
audvidElem.playBackRate(); //set speed of play

//fragment - important for website performance
//instead of create an html element in a foreach and connect and sent multiple times to the browser which takes time
let elemFragment = document.createDocumentFragment(); //create a fragment to store elements that we created
let newElem = document.createElement("li"); //create elements
elemFragment.appendChild(newElem); //send them to fragment
//when all elements added to fragment then we connect once to browser and send all of them
liElems.appendChild(elemFragment);
