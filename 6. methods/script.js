//print
console.log("any variable or value here"); //prints to the console in browser inspect tool
let theName = "methods";
alert(
  "file name: " + theName + "\n" + 'this file contains all "methods" we need'
);

isNaN("value"); //if value is number(int or stringnum): output=false else output=true
prompt("enter your name: "); // get a value from user

//string methods
let text = "alireza is the best";
let firstIndex = text[0]; //0=a 1=l 2=i ... 18=t
let stringLength = text.length; //19

text.charAt(2); //i
text.charCodeAt(2); //i=72 asci code
text.concat(" so true"); //alireza is the best so true
text.trim(); //delete all spaces before and after string not between
text.toLowerCase(); //lowercase all string characters
text.toUpperCase(); //upercase all string characters
text.search("is"); //return the index of start char of 'is' in string
text.indexOf("is"); //like search
text.includes("is"); //true if 'is' exist in string otherwise false
text.startsWith("is");
text.slice(8, 13); //'is the' number of index, to this index
text.substr(8, 6); //'is the' number of index, this number after the first number
text.substring(8, 13); //'is the' number of index, to this index like slice
//ES8
let username = "amin";
username.padStart(6, "*"); //**amin
username.padEnd(6, "*"); //amin**

//math methods
Math.PI(); //p=3.14...
2 ** 3; //8 power
Math.pow(2, 3); //8
Math.sqrt(16); //4
Math.abs(-10); //10 delets negetive |-12|=12
Math.min(20, 90, 56, 5, 56); // 5 minimum
Math.max(20, 90, 56, 5, 56); // 96 maximum
Math.floor(14.6); // 14
Math.trunc(14.6); // 14 like floor
Math.round(12.8); // 13 round the number 12.4=12
Math.ceil(12.8); // 13 allways round to the top 12.4=13
Math.random(); // a random number between 0 to 1
Math.random() * 10; // a random number between 0 to 10

//haltamrin captcha

var firstRandomNumber = Math.random() * 100000;
var finalCaptchaCode = Math.floor(firstRandomNumber);

console.log("Your Captcha Code: ", finalCaptchaCode);

//hal tamrin halgahe for baray zoj o fard

for (var i = 0; i < 100; i += 2) {
  console.log(i);
}

for (var i = 1; i < 100; i += 2) {
  console.log(i);
}

//hal tamrin sabad kharid
var allPrices = 0;

for (var i = 0; i < 5; i++) {
  allPrices = allPrices + Number(prompt("Enter the product price: "));
}

alert("All price of your basket: " + allPrices);

//hal tamrin avg

var userNumber = null;
var sum = 0;

for (var i = 0; i < 5; i++) {
  userNumber = Number(prompt("Enter The " + (i + 1) + " Number:"));

  sum = sum + userNumber;
}

console.log("Average: " + sum / 5);

//hal tamrin sum digits
var userNumber = Number(prompt("Enter The Number: ", 0)); // 142
var sum = 0;

for (var i = 0; userNumber / 10 != 0; i++) {
  // Codes

  sum = sum + (userNumber % 10);
  userNumber = Math.floor(userNumber / 10);
}

console.log("Sum Of Digits: ", sum);

//hal tamirn tedad digits
var userNumber = prompt("Enter The Number: ", 0);
var counter = 0;

if (userNumber == 0) {
  counter = 1;
} else {
  for (var i = 0; userNumber / 10 != 0; i++) {
    counter++;
    userNumber = Math.floor(userNumber / 10);
  }
}

alert("Count of digits: " + counter);

var userNumber = prompt("Enter The Number: ", 0);
var counter = 0;

if (isNaN(userNumber)) {
  alert("Invalid input! Please enter a number.");
} else {
  userNumber = parseInt(userNumber);
  if (userNumber == 0) {
    counter = 1;
  } else {
    while (userNumber / 10 != 0) {
      counter++;
      userNumber = Math.floor(userNumber / 10);
    }
  }
}

alert("Count of digits: " + counter);

//hal tamrin halghe while
var userNumber = Number(prompt("Enter The Number: ", 0));
var sum = 0;
var counter = 0;

while (userNumber / 10 != 0) {
  sum = sum + (userNumber % 10);
  counter++;
  userNumber = Math.floor(userNumber / 10);
}

alert("Sum of digits: " + sum + "\n\n" + "Count of digits: " + counter);

//neshan dadan zoje bein 2 adad
var userFirstNumber = Number(prompt("Enter The First Number: ", 0));
var userSecondNumber = Number(prompt("Enter The Second Number: ", 0));

if (userFirstNumber % 2 === 0) {
  while (userFirstNumber < userSecondNumber) {
    console.log(userFirstNumber);
    userFirstNumber += 2;
  }
} else {
  userFirstNumber++;
  while (userFirstNumber < userSecondNumber) {
    console.log(userFirstNumber);
    userFirstNumber += 2;
  }
}

var userFirstNumber = Number(prompt("Enter The First Number: ", 0));
var userSecondNumber = Number(prompt("Enter The Second Number: ", 0));

if (userFirstNumber % 2 !== 0) {
  while (userFirstNumber < userSecondNumber) {
    console.log(userFirstNumber);
    userFirstNumber += 2;
  }
} else {
  userFirstNumber++;
  while (userFirstNumber < userSecondNumber - 1) {
    console.log(userFirstNumber);
    userFirstNumber += 2;
  }
}

//hal tamrin avg

var userNumber = 0;
var sum = 0;
var counter = 0;

while (userNumber != -1) {
  sum += userNumber;
  userNumber = Number(
    prompt("Enter The Number: \n if you dont have a number, enter -1")
  );
  if (userNumber != -1) {
    counter++;
  }
}

// console.log('Sum: ', sum)
// console.log('Counter: ', counter)

console.log("Average: ", sum / counter);

//hal tamrin 3 halghe

///////////////// For ///////////////////

var userFirstNumber = Number(prompt("Enter The First Number: ", 1)); // 2
var userSecondNumber = Number(prompt("Enter The Second Number: ", 1)); // 3

var power = 1;

// power = 8

for (var i = 0; i < userSecondNumber; i++) {
  power = power * userFirstNumber;
}

alert("Power: " + power);

///////////////// While ///////////////////

var userFirstNumber = Number(prompt("Enter The First Number: ", 1)); // 2
var userSecondNumber = Number(prompt("Enter The Second Number: ", 1)); // 3

var power = 1;

// power = 8
var i = 0;
while (i < userSecondNumber) {
  power = power * userFirstNumber;
  i++;
}

alert("Power: " + power);

///////////////// Do While ///////////////////

var userFirstNumber = Number(prompt("Enter The First Number: ", 1)); // 2
var userSecondNumber = Number(prompt("Enter The Second Number: ", 1)); // 3

var power = 1;

// power = 8
var i = 0;

do {
  power = power * userFirstNumber;
  i++;
} while (i < userSecondNumber);

alert("Power: " + power);

//haltamrin reverse number
function reverse_a_number(num) {
  // Initialize a variable to store the reversed number
  let reversed_num = 0;

  // Continue the loop until the input number becomes 0
  while (num !== 0) {
    // Multiply the current reversed number by 10 and add the last digit of the input number
    reversed_num = reversed_num * 10 + (num % 10);

    // Remove the last digit from the input number
    num = Math.floor(num / 10);
  }

  // Return the reversed number
  return reversed_num;
}

//hal tamrin Accept two integers and display the larger
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return "The larger of " + num1 + " and " + num2 + " is " + num1 + ".";
  } else if (num2 > num1) {
    return "The larger of " + num1 + " and " + num2 + " is " + num2 + ".";
  } else {
    return "The values " + num1 + " and " + num2 + " are equal.";
  }
}

// hal tamrin Find the largest of five numbers
if (a > b && a > c && a > d && a > f) {
  console.log(a);
} else if (b > a && b > c && b > d && b > f) {
  console.log(b);
} else if (c > a && c > b && c > d && c > f) {
  console.log(c);
} else if (d > a && d > c && d > b && d > f) {
  console.log(d);
} else {
  console.log(f);
}

//hal tamrin masahat circle
function calculateCircleArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  return Math.round(area);
}
let radius = 5;
let area = calculateCircleArea(radius);
console.log("Area of the circle with radius", radius, "is:", area);

// hal tamrin Determine if a given number is a power of two.

function isPowerOfTwo(number) {
  if (number <= 0) {
    return false;
  }

  while (number > 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number /= 2;
  }

  return true;
}

//hal tamrin Determine the name of a month based on its number.

function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month number";
  }
}

// hal tamrin  Implement a function that checks if a given number is a prime number.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//haltamrin Create a function that takes a string and a character as input and returns the count of occurrences of that character in the string.
function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Test cases
console.log(countOccurrences("hello", "l")); // Output: 2
console.log(countOccurrences("apple", "p")); // Output: 2

///////////////////////////////////////
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"; //eshare be const
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2024 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2024 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

friends.unshift("John");
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob", 2));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//Object intruduction
var users = ["ali", "mohammad", "amin", "babak"];

var user = {
  name: "amin",
  family: "saeedirad",
  age: 21,
  phone: 8293,
  hairColor: "black",
};

console.log(user);

console.log(user["family"]);
console.log(user.name);

var users = [
  { id: 1, name: "amin", family: "saeediRad", age: 12 },
  { id: 2, name: "babak", family: "hoseyni", age: 19 },
];

console.log(users[1].age);

//bracket vs dot notation
const jonass = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

//----------------------------------------------------------------------------------------------------------
//hal tamrin zakhire adad dar array
var userNumbers = []; // [12, 89, 13, 65, 21, 90]

var userNumber = 0;
var sum = 0;

while (userNumber != -1) {
  userNumber = Number(
    prompt("Enter the number: \n enter -1 if you dont enter any number")
  );
  if (userNumber != -1) {
    userNumbers.push(userNumber);
  }
}

for (var i = 0; i < userNumbers.length; i++) {
  // console.log(userNumbers[i])
  sum += userNumbers[i];
}

console.log(userNumbers);
console.log("Average: ", sum / userNumbers.length);

//hal tamrin sabtenam array
var users = [
  {
    id: 1,
    name: "amin",
    family: "saeedirad",
    age: 21,
    email: "ce01010101it@gmail.com",
  },
  { id: 2, name: "amir", family: "hoyeiny", age: 19, email: "amir@gmail.com" },
  { id: 3, name: "ali", family: "mohammadi", age: 10, email: "ali@gmail.com" },
];

var userName = prompt("Enter Your Name: ");
var userFamily = prompt("Enter Your Family: ");
var userAge = prompt("Enter Your Age: ");
var userEmail = prompt("Enter Your Email: ");

if (userName.length < 3 || userName.length > 10) {
  alert("نام شما حداقل 3 و حداکثر 10 کاراکتر میتواند داشته باشد");
} else if (userFamily.length < 3 || userFamily.length > 15) {
  alert("نام خانوادگی شما حداقل 3 و حداکثر 15 کاراکتر میتواند داشته باشد");
} else if (isNaN(userAge) || userAge.length > 3) {
  alert("لطفا سن را به درستی وارد کنید");
} else {
  var newUser = {
    id: 4,
    name: userName,
    family: userFamily,
    age: userAge,
    email: userEmail,
  };
  users.push(newUser);

  console.log(users);
}

//foreach
var users = ["ali", "amin", "amir", "babak", "sasan"];

users.forEach(function (users) {
  // console.log(user)
});

var scores = [18, 19, 17, 20, 14];

scores.forEach(function (number) {
  console.log(number * 2);
});

// some method
var usersData = [
  { id: 1, name: "Ali", age: 19 },
  { id: 2, name: "Amin", age: 21 },
  { id: 3, name: "Amir", age: 18 },
];

// console.log(usersData.includes({id: 1, name: 'Ali', age: 19}))

var isInUsers = usersData.some(function (user) {
  // Codes
  console.log(user);
  return user.name == "Mohammad";
});

console.log(isInUsers);

//every method
var agess = [19, 13, 28, 32, 22];

var isAll = ages.every(function (age) {
  console.log(age);
  return age > 18;
});

console.log(isAll);

//splice method
var numbers = [10, 18, 19, 22, 20, 90, 87, 54, 32];

numbers.splice(2, 4, 5, 6, 7);

console.log(numbers);

//findindex
var users = ["Ali", "Amin", "Amir", "Babak", "Hasan"];

var userIndex = users.findIndex(function (user) {
  console.log(user);
  return user == "Babak";
});

// console.log(userIndex)

var users = [
  { id: 1, name: "Ali", age: 19 },
  { id: 2, name: "Amin", age: 21 },
  { id: 3, name: "Amir", age: 25 },
  { id: 4, name: "Babak", age: 20 },
];

var userIndex = users.findIndex(function (user) {
  return user.name === "Amin";
});

console.log("Index: ", userIndex);

//hal tamrin foreach

var usersArray = [
  { id: 1, name: "amin", family: "SaeediRad", age: 21 },
  { id: 2, name: "amir", family: "Mohammadi", age: 19 },
  { id: 3, name: "Hasan", family: "Ghorbani", age: 18 },
];

usersArray.forEach(function (user) {
  console.log("Name: " + user.name + " Family: " + user.family);
});

//hal tamrin froshgah online
var allProducts = [
  { id: 1, name: "Laptop", price: 17000000 },
  { id: 2, name: "Phone", price: 7000000 },
  { id: 3, name: "Pen", price: 12000 },
  { id: 4, name: "Pencil", price: 9000 },
  { id: 5, name: "Eraser", price: 6000 },
  { id: 6, name: "Milk", price: 35000 },
];

var userBasket = [
  { id: 1, name: "pen", price: 12000 },
  { id: 2, name: "pencil", price: 9000 },
];

var userProduct = prompt("Enter The Name Of Product: "); // 'Phone'

var requestProduct;

var isInShop = allProducts.some(function (product) {
  if (product.name === userProduct) {
    requestProduct = product;
    return true;
  }
});

if (isInShop === true) {
  var newProduct = {
    id: 3,
    name: requestProduct.name,
    price: requestProduct.price,
  };
  userBasket.push(newProduct);

  var sum = 0;

  userBasket.forEach(function (product) {
    sum = sum + product.price;
  });
  console.log(userBasket);
  alert("Total Price: " + sum);
} else {
  console.log("موجودی نیست");
}

//arrays methods
let scores = [15, 14, 5, 12, 4, 20];

let scores2 = [12, 23];

let students = [
  { name: "ali", last: "ahmadi", age: 22 },
  { name: "reza", last: "alavi", age: 25 },
  { name: "sara", last: "mohseni", age: 20 },
];

scores[2] = 16; //adds the next array value now scores=[15,14,5,12,4,20,16];

scores.push(13, 17, 1); //push values into array scores=[15,14,5,12,4,20,16,13,17,1];

scores.pop(); //pop out the last value from array scores=[15,14,5,12,4,20,16,13,17];

scores.shift(); //delets first element of array scores=[14,5,12,4,20,16,13,17];

scores.unshift(8, 7); //add to first of array scores=[8,7,14,5,12,4,20,16,13,17];

scores.toString(); // make the array into a string

scores.join("/"); //conect all elements together with / between

scores.concat(scores, scores2);

scores.splice(2, 3); //delets arrays element starting from 2 to 3 times after (2,3,other inputs to replace what we deleted)scores=[8,7,20,16,13,17];

scores.slice(2, 5); //returns all element from index 2 to index 5

scores.includes(4); //true if it finds & false if it doesnt find - we can use a second input as sart index

Array.isArray(scores); //checks if the given input is array or not returns true false

scores.indexOf(5); //return the index of given number in array or returns -1 if it doesnt find

scores.lastIndexOf(5); //return the index of given number in array (the last one) or returns -1 if it doesnt find

scores.reverse(); //reverse array elements

theName = "alireza";

theName.split(""); //convert a string to array. input can be a character to seperat with in string

//foreach
students.forEach(function (number) {
  console.log(number.age);
}); //function will execute 0 to 2 times  (array length) and every time one array value goes into function input as number variable + for objects & arrays

//some
let isInUsers = students.some(function (user) {
  //enonymous function
  console.log(user);
  return user.name == "reza";
}); //like forEach but it returns true or false and function codes will execute for every array elements untill it reaches a true then stops

//every
let isAll = ages.every(function (age) {
  console.log(age);
  return age > 18;
}); //like some but it will stop executing when it reaches a false and return true or false

//findindex
let studentIndex = students.findIndex(function (st) {
  return st.age == 25; // 1 returns index of array element which the condition is true. executed loop untill find the element
});

//find
let studentInfo = students.find(function (st) {
  return st.age == 25; // 1 returns all info of array element which the condition is true. executed loop untill gets true
});

//map
let scoresPower = scores.map(function (score) {
  return score ** 2; //do this to every element of array and return it to another array (in scoresPower)
});

//filter
let under15 = scores.filter(function (score) {
  return score < 15; //returns elements that are only less than 15 and store it in under 15 array
});

var userNames = ["Ali", "Amin", "Amir", "roz", "Babak"];

var filteredUserNames = userNames.filter(function (username) {
  return username.length > 3;
});

console.log("filteredUserNames: ", filteredUserNames);

//reduce
let numbers = scores.reduce(function (prevValue, currentValue) {
  //at first array index 0 is prevValue and index 1 is curent value
  console.log(prevValue, currentValue); //outpute in the end: 15 14 | 14 5 | 5 12 | 12 4 | 4 20
  return currentValue; //now index 1 is going to prevValue and currentValue becomes index 2
  //this goes till the end of array
}); // can have a third input that determines default value of prevValue

//////////////////////////////////////////////////////////////////---------------------------------------------------

//function methods
var i = 10;
var timer = setInterval(function () {
  if (i === 0) {
    alert("Game Over");
    clearInterval(timer);
  }
  console.log(i);
  i--;
}, 1000); // function reexecute every 1000ms = 1s
setTimeout(function () {
  console.log("hello");
}, 5000); //function executed after 1000ms = 1s - function can have input and it should send from anothe parameter after 5000

//dates method
let myTime = new Date();
myTime; //returns all time information
myTime.getFullYear(); //Get the year as a four digit number (yyyy)
myTime.getMonth(); //Get the month as a number (0-11)
myTime.getDay(); //Get the day as a number (0-6)
myTime.getHours(); //Get the hour (0-23)
myTime.getMinutes(); //Get the minute (0-59)
myTime.getSeconds(); //Get the second (0-59)
myTime.getMilliseconds(); //Get the millisecond (0-999)
myTime.getTime(); //Get the time (milliseconds since January 1, 1970)
myTime.getDate(); //Get the day in mounth date (1-31)
Date.now(); //Get the time. ECMAScript 5.

//window
window.innerHeight; //returns height of the users window
window.innerWidth;
//more in BOM

//console
let num1 = 2;
let num2 = 3;
console.log(num1 + num2);
console.error("Data is not defined");
console.info("Api response status is 404");
console.warn("Api response status is 404");
console.assert(num1 + num2 < 10, "BIG"); //checks the condition if true print the string
let products = [
  { id: 1, name: "LapTop", price: 12000000 },
  { id: 2, name: "Phone", price: 7000000 },
  { id: 3, name: "SSD Hard", price: 2000000 },
  { id: 4, name: "Cool Pad", price: 500000 },
];
console.table(products); //prints the product in a table
console.time("For loop");
for (let i = 0; i < 1000000; i++) {
  //Codes
}
console.timeEnd("For loop"); //print time of execution of the codes in between
console.group("first logs");
console.log("First log in gp");
console.log("Second log in gp");
console.log("Third log in gp");
console.groupEnd("first logs"); //groups all logs in between
console.log("%cApi reponse status in 200", "color: red;"); //change color of a log

//ES6 sets methods
numberSets.add(20);
numberSets.has(20); //if it finds 20 returns true else false
numberSets.delete(20);
numberSets.clear(); //clear all set values
numberSets.forEach(() => {});
numberSets.size(() => {}); //length of it

//ES6 map methods
userMap.set("id", 1);
userMap.size;
userMap.has("id");
userMap.delete("id");
userMap.get("id");
userMap.clear();
userMap.forEach((value, key) => {}); //valueName is the value and key is the property
let newMap = new Map(Object.entries(anObject)); //converting an object to a map
let newObj = Object.fromEntries(aMap); //converting a map to an object
