// hal tamrin
var number1 = prompt("لطفا عدد اول را وارد نمایید:");
var number2 = prompt("لطفا عدد دوم را وارد نمایید:");

var number1TypeNumber = +number1;
var number2TypeNumber = +number2;

var plusResult = number1TypeNumber + number2TypeNumber;

var minusResult = number1TypeNumber - number2TypeNumber;

var tagsimResult = number1TypeNumber / number2TypeNumber;

var zarbResult = number1TypeNumber * number2TypeNumber;

alert(zarbResult);

//logical operators
let a = 3,
  b = 4;

console.log(a == b); //is equal?  false
console.log(a != b); //is not equal? true
console.log(a > b); //is a greater than b? false
console.log(a < b); //is a less than b? true
console.log(a >= b); //is a greater than b? false
console.log(a <= b); //is a less than b? true
console.log(a === b); //is the value and the typeof of a and b the same? true

if (a == b) {
  //these codes will execute if (a==b) is true
} else {
  //these codes will execute if (a==b) is false
}

if (a < b) {
  //these codes will execute if (a<b) is true
}

//hal tamrin odd va even bodan adad
var userNumber = prompt("Enter Your Number:", 0);

if (userNumber % 2 == 0) {
  alert("the number is even ");
} else {
  alert("the number is odd ");
}

//if else

var num1 = 12;
var num2 = 4;
var num3 = 3;

if (num2 * num3 === 10) {
  alert("ضربشون برابره با 10");
} else if (num2 * num3 === 11) {
  alert("ضربشون برابره با 11");
} else if (num2 * num3 === 13) {
  alert("ضربشون برابره با 12");
} else {
  alert("ضربشون برابر با هیچکدوم نیست :|");
}

if (a == b) {
  //these codes will execute if (a==b) is true
} else if (a > b) {
  //these codes will execute if (a==b) is true
}
//  multiple else if can be writen here
else {
  //these codes will execute if (a==b) is false
}

//bitwise operator
/*
  a=3 || b=0   //OR: atleast one of them should be true so the statement be true
  a=3 && b=0   //AND: both of themshould be true so the statement be true
*/

// Bitwise Operator

var num1 = 12;
var num2 = 4;
var num3 = 3;

if (num1 * num3 === 10 || num1 * num3 === 11) {
  alert("ضربشون 10 یا 11 هست");
} else if (num2 * num3 === 14 || num2 * num3 === 12) {
  alert("ضربشون 14 یا 12 میشه");
} else if (num2 * num3 === 13 || num1 * num3 === 15) {
  alert("ضربشون 13 یا 15 میشه");
}

// OR || یا
// true || true => true
// true || false => true
// false || false => false

var num2 = 4;
var num3 = 3;

if (num2 === 3 && num2 * num3 === 12) {
  alert("نام2 برابره با 3 و ضربشون میشه 12");
} else if (num3 === 3 && num2 * num3 === 12) {
  alert("نام3 برابره با 4 و ضربشون میشه 12");
} else {
  alert("هیچ کدوم از شرطا درست نیستن :(");
}

// OR یا ||
// AND و &&

// true && true => true
// true && false => false
// false && false => false

///////////////////////////////////////////////////////// عملگر نقیض

var myBool1 = true;

alert("myBool1 = " + myBool1);

alert("!myBoo1 = " + !myBool1);

alert("!!myBool1 = " + !!myBool1);

//ternary conditions
var num2 = 4;
var num3 = 3;

if (num2 * num3 === 12) {
  alert("بله، ضربشون 12 هست :)");
} else {
  alert("نه، برابر 12 نیست :(");
}

// Ternary Condition | شرط تک خطی | شرط خطی

num2 * num3 === 19
  ? alert("بله، ضربشون 12 هست :)")
  : alert("نه، برابر 19 نیست :(");

let result;
result = a == b ? true : false; //result becomes false - we can put other codes instead of true or false
result = a == b ? true : a == 12 ? true : false; //we can use as many ? as we want like elseif

//switch case
let c = 2 + 2;

switch (c) {
  case 3:
    alert("Too small");

  case 4:
    alert("Exactly!"); //this code executes

  case 5:
    alert("Too big");

  default:
    alert("I don't know such values");
}

var num1 = 3;
var num2 = 4;

var num3 = num1 * num2;

switch (num3) {
  case 10:
    alert("نام3 برابره با 10");
    break;
  case 11:
    alert("نام3 برابره با 11");
    break;
  case 12: // true
  case 15:
    alert("نام3 برابره با 12 یا 15");
    break;
  case 13:
    alert("نام3 برابره با 13");
    break;
  case 14:
    alert("نام3 برابره با 14");
    break;
  default:
    alert("نام3 برابر با هیچکدومش نیست :(");
    break;
}

//bitwise operator conditions in one line
userAge = 12;
userAge > 18 && alert("you logged in");
userAge < 18 && alert("you are no eligible"); //when first condition is false second condition is not even checked
let isSet = userAge || 18; // if userAge is true it assigned to isSet if not 18 will assigned to it cause 18 is true
//in ES11 we can use ?? instead of ||
isSet = userAge ?? 18; // this just ignore if its 'null or undefined' but in '||' it ignores all falsy values
isSet = (userAge || 12) ?? 18; //if in parantesis becomes null or undefined it will ignore it and if its other falsy it will be assigned to variable

//object entries
let person = {
  id: 1,
  firstName: "alireza",
  lastName: "tayebi",
  age: 22,
  job: "web Developer",
};
let entriesPerson = Object.entries(person); //it will return an array of 5 value each has two value first property second its value
//its useful to convert objects that are made by databases like firebase for better use
