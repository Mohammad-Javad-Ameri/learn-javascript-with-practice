//add onclick="funcName()"  attribute to html element
//oneclick is an event and the function will execute if user click on this element
function funcName() {
    alert("you clicked the button");
}

//better way to use events directly in javascript
let theElem = document.querySelector(".btn");
theElem.addEventListener("click", funcName);
//here onclick becomes click
/* or with function expression

theElem.addEventListener('click',function(){
        alert("you clicked the button");
});

*/
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

//prevent an event default behaviour
event.preventDefault(); // just for element that event.cancelable is true
