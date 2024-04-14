//for loop syntax
//goftan i-- i=i+1
for (let i = 0; i < 10; i++) {
  //these codes will be executed for 10 times
}
//example
let myName = "alireza programmer";
for (let i = 0; i < myName.length; i++) {
  console.log(i, " => ", myName[i]);
}

let myName2 = "alireza programmer";
for (let i = myName2.length - 1; i >= 0; i--) {
  console.log(i, " => ", myName2[i]);
}
//break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}

//while loop syntax
i = 0;
while (i < 10) {
  //these codes will be executed for 10 times
  i++;
}
//example
myName = "alireza programmer";
i = 0;
while (i < myName.length) {
  console.log(i, " => ", myName[i]);
  i++;
}

///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//do while
i = 0;
do {
  //these codes will be executed 10 times but it will be executed once whether condition is true or not
  i++;
} while (i < 10);

var i = 0;

do {
  // Codes
  console.log(i);
  i++;
} while (i > 1);

// var j = 0

// while (j > 1) {
// 	console.log(j)
// 	j++
// }

//for of loops ES6
let user = [1, 5, 6, 2, 1];
for (let property of user) {
  //every time one user value is in property till the end
  console.log(property);
}
// used for
//iterable => countable
//likeArray => arguments in functions or list of html elements like li's
//for objects we can use for in loops ES6
let userObj = {
  id: 1,
  name: "ali",
  age: 19,
};
for (let item in userObj) {
  //every time one userObj property is in item
  console.log(item);
}
