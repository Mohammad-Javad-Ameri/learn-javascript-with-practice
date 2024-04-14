// hal tamrin zarb o jam
var number1 = prompt("لطفا عدد اول را وارد نمایید:");
var number2 = prompt("لطفا عدد دوم را وارد نمایید:");

var number1TypeNumber = +number1;
var number2TypeNumber = +number2;

var plusResult = number1TypeNumber + number2TypeNumber;

var minusResult = number1TypeNumber - number2TypeNumber;

var tagsimResult = number1TypeNumber / number2TypeNumber;

var zarbResult = number1TypeNumber * number2TypeNumber;

alert(zarbResult);

//haltamrin avg

var userFirstNumber = Number(prompt("Enter First Number:", 0));
var userSecondNumber = Number(prompt("Enter Second Number:", 0));
var userThirdNumber = Number(prompt("Enter Third Number:", 0));

var average = (userFirstNumber + userSecondNumber + userThirdNumber) / 3;

// "12" + "12" + "12" = "121212"

alert(average);

// hal tamrin sen karbar

var userAge = Number(prompt("Enter Your Age: ", 0)); // 25

// alert(userAge)

if (userAge < 18) {
  // Scope = ناحیه
  alert("شما مجاز به ورود نیستید");
} else {
  alert("شما مجاز به ورود به پنل هستید");
}

//hal tamrin tavan adad aval ba adad dovom

var num1 = prompt("Enter First Number: ", 0);
var num2 = prompt("Enter Second Number: ", 0);

var powerResult = num1 ** num2;

alert("Power Result is: " + powerResult);

//hal tamrin mohasebe age

var userBirthDate = prompt("Enter Your Birth Date, Please: ", 1370);

// alert("Birth Date: " + userBirthDate)

// ali => 1384 | 1400 => ? | 1400 - 1384 = ?

var userAge = 1400 - userBirthDate;

if (isNaN(userAge)) {
  alert("تاریخ تولد وارد شده معتبر نمی باشد");
} else {
  alert("Your Age Is: " + userAge);
}

// hal tamrin tabdil daghighe be saat

var minutes = prompt("Enter your time (minute): ", 0); // 60 => 1H

// 1h = 60m | 120 => 2H | 180 => 3H

var minutesToHours = minutes / 60;

if (isNaN(minutesToHours)) {
  alert("عدد وارد شده معتبر نمی باشد");
} else {
  alert(minutesToHours + " Hours");
}

// hal tamrin amalgar or manteqi

var userAge = prompt("Enter Your Age: ", 18);
var userSex = prompt("Enter Youx Sex (male, female)", "");

if (userSex === "female" || userAge < 18) {
  alert("متاسفانه شما مجاز به ورود نیستید");
} else {
  alert("شما می توانید به پنل خود وارد شوید :)");
}

// hal tamrin mohasebe moadel switch case

var userScore = prompt("Enter your score, please: ", 0);

// == | ===

switch (userScore) {
  case "18":
  case "19":
  case "20":
    alert("A");
    break;
  case "15":
  case "16":
  case "17":
    alert("B");
    break;
  case "12":
  case "13":
  case "14":
    alert("C");
    break;
  default:
    alert("شما مشروط هستین :(");
}

//function declaration
function fName() {
  //these codes will execute if function call anywhere in program
}
//calling function
fName();

function showValue() {
  var num1 = 2;
  var num2 = 8;
  var resultNumber = num1 + num2;
  alert("Result: " + resultNumber);
}

showValue();
showValue();
showValue();

showValue();

//function expression
let fName2 = function () {
  //these codes will execute if function call anywhere in program
};
//calling function
fName2();

//function parameter
function fName(parameterName) {
  //we can get two or more parameter using camma in between
  //these codes will execute if function call anywhere in program
  // we can use parameterName here in codes
}
//calling function
fName("parameterName value here"); //we can send two or more parameter using camma in between
//if we dont send an input varible the varible will be undefined
//we can assign to input variable inside the function

function showText(userText) {
  alert("Your Parameter: " + userText);
}

// showText('SabzLearn :)')

function showTwoNumbers(firstNumber, secondNumber) {
  alert("First Parameter: " + firstNumber);
  alert("Second Parameter: " + secondNumber);
}

showTwoNumbers(34, 18);

//example
function averageCalculator(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  var average = sum / 3;
  alert("Average of your numbers is " + average);
}
averageCalculator(54, 98, 28);

// default value example
function sumValue(num1 = 1, num2 = 2) {
  // if (num1 == undefined) {
  // 	num1 = 1
  // }
  // if (num2 == undefined) {
  // 	num2 = 2
  // }
  var result = num1 + num2;
  alert("Result= " + result);
}

sumValue(10);

// return keyword;
function sumNumbers(num1, num2) {
  var result = num1 + num2;
  // alert("Result = " + result)
  return result;
}

var sumResult = sumNumbers(2, 8);

alert("sumResult = " + sumResult);

/////////////////////////////////////

var number1 = prompt("Enter First Number ...");
var number2 = prompt("Enter Second Number ...");

function showPower(num1, num2) {
  // alert("num1 = " + num1)
  return num1 ** num2;
  // return 10
}

var powerResult = showPower(number1, number2);

alert("powerResult = " + powerResult);

//sakhtar String ha
var userName = "js";

var firstIndex = userName[0];

// alert(firstIndex) // index

// alert(userName.length)

alert(userName[4]);

// String methods
var text = "I Love JavaScript";

console.log(text[0]);
console.log(text.charAt(2));
console.log(text.charCodeAt(0)); // Ascii | اسکی
console.log(text + " & React");
console.log(text.concat(" & React"));
var finalText = text.concat(" & React");
console.log(finalText);
console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.search("react"));
console.log(text.indexOf("Love"));
console.log(text.includes("react")); // bool => true | false

var text2 = "I Love JavaScript & React";

// slice
// substr
// substring

console.log(text2.slice(7, 17));
console.log(text2.substr(7, 10));
console.log(text2.substring(7, 17));

//hal tamrin function zoj o fard
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    alert(number + " Is Even");
  } else {
    alert(number + " Is Odd");
  }
}

isEvenOrOdd(12);
isEvenOrOdd(108);
isEvenOrOdd(108236897);
isEvenOrOdd(119);
isEvenOrOdd(0);
isEvenOrOdd(149);

//hal tamrin gereftan 3 adad va mohasene avg

function averageCalculator(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  var average = sum / 3;
  alert("Average of your numbers is " + average);
}

averageCalculator(54, 98, 28);

//hal tamrin register

var userName = prompt("Enter Your UserName: ");
var password = prompt("Enter Your Password: ");

if (userName.length < 3 || password.length < 8) {
  alert("یوزرنیم حداقل باید 3 کاراکتر و پسورد باید 8 کاراکتر داشته باشه");
} else {
  alert("ثبت نام شما با موفقیت انجام شد :)");
}

//hal tamrin ali

var userName = prompt("Enter Your UserName", "");

if (userName.toUpperCase() == "ALI") {
  alert("لاگین شما موفقیت آمیر بود");
} else {
  alert("شما مجاز به ورود نیستید");
}

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//Math methods
console.log(Math.PI); // PI = 3.14

console.log(2 ** 3); // 2 * 2 *2 = 8

console.log(Math.pow(2, 4));

console.log(Math.sqrt(81)); // 4 * 4 = 16 | 7 * 7 = 49

console.log(Math.abs(-12)); // |-12| = 12

console.log(Math.min(20, 0, 89, 64, 2, 26));
console.log(Math.max(20, 90, 89, 64, 2, 26));

console.log(Math.trunc(12.1));
console.log(Math.floor(12.1));
console.log(Math.round(12.1));
console.log(Math.ceil(12.1));

console.log(Math.random() * 10);


//("use strict");
///////////////////////////////////////
//Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////

//anonymous function
students.some(function (user) {
  // we can not call them //some is a method that reads all variable values send it as user to input of anonymous function
  console.log(user);
  return user.name == "reza";
});

//IIFE functions
(function () {
  //it calls itself
  console.log("IIFE function");
})();

//callback function
function logger(func) {
  console.log("in logger: ", func);
}
function logger2() {
  console.log("hello in logger2");
}
logger(logger2); //when we send function to another function shouldnt use () to prevent executing in intrepeting time

//pure functions
/*
  a pure function should not have different outputs for same inputs in multiple calls
  should not use outside variables in itselfs

*/
//composition function - like neseted use of functions
insertToLi(toLowerCase(trim(todoInputElem.value)));

//HOF => higher order function = a function that gets another function as input like 'logger' or return function like:
function hofExp() {
  return function () {
    console.log("inner function");
  };
}
hofExp(); //returns the function
hofExp()(); //execute the return function
let hofInner = hofExp();
hofInner();

//arrow functions ES6
const pow = (num1, num2) => {
  //codes
  return num1 ** num2;
};
pow(2, 3);
//can delete paranthesis or curlybraces if we have one code
const plusOne = (num1) => num1 + 1;
//examples - numbers is an array
let mapData = numbers.map((number) => number * 2);
//or - btn is a button
btn.addEventListener("click", (event) => {
  console.log(event);
});

// 'arguments' keyword ES6
/*
  arguments in functions contains all inputs of the function
  its a likearray can't be loopover(i just made this word up :| )
  can be converted to an array with Array.from(arguments)
  it can not used in arrow functions
*/
function pow(num1, num2) {
  console.log(arguments); //returns arguments{0:2, 1:3}
}
pow(2, 3);

// rest operator ES6
const sum = (a, ...args) => {
  console.log(...args); //its a real array contains 13 14 15 16
};
sum(12, 13, 14, 15, 16);
