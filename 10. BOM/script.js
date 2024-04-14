// Browser Object Model
//everything is under window like:
window.console.log("hello");
window.alert("HELLO"); //but we don't write window cause its global

//width and height
window.innerHeight; //only height of where webpage is shown - no scrollbar no border not consol not...
window.innerWidth;
document.documentElement.clientHeight; //just like inner but includes the scroll bar too
document.documentElement.clientWidth;
window.outerHeight; //all of height of the browser include border or consol or scrollbar or top ...
window.outerWidth;
window.screenLeft; //pixels of left of the browser to the left of the desktop
window.screenTop;
let htmlElement;
htmlElement.clientHeight; //height of an element size in document plus its padding
htmlElement.clientWidth;

console.log(screen); //data about screen
screen.availHeight; //height of the users device availible not sth like task bar included
screen.availWidth;
screen.width; //height of the users device availible also task bar included
screen.height;

console.log(history); //data about user history
history.length; //how many web pages user went in a tab
history.back(); //turn back on history back
history.forward(); //go forward on history
history.go(-2); //two page back in history
history.go(0); //refresh the page

console.log(location); //data about user location
location.protocol;
location.hostname;
location.pathname;
location.search;
location.hash;
location.href;
location.href = "redirect to this URL";
location.reload();
//to get a data rely on a data in url search
let locationSearchParam = new URLSearchParams(location.search);
let userIDParam = locationSearchParam.get("id"); //returns the value of id in search like ?id=3 returns 3
