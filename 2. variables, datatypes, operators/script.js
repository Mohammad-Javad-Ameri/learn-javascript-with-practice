//varaiables are for store data in a place so we can use that data later in our program

// how to declare variables
var time = 12; // no scoping, can be defined multiple times with the same name, can be defined after assignment etc #not_good
let name = "alireza"; // has scoping, can not defined multiple times with the same name or after assignment #good
const age = 24; // can not be changed during program also should have value in the first place
//always use let and const

console.log(name); //to show variable we can use alert but better option is console.log
console.log(age); //consol.log shows in console section in browser inspect tool

//data types//////////////////////////////////////////////////////////////////////////

let myName = "alireza"; //string between " " or ' '
let myAge = 22; //number
let isMale = true; //boolean  only true or false
let noseSize = null; //null  means empty variable
let feetSize; //undefined means varible has no values
let myCars = ["bmw", "benz", "porshe"]; //arrays can store more than one value can be number, string, boolean & ...
let aCar = ["bmw", 2500, true]; //arrays can contain any of variable type
let Ali = { name: "ali", last: "ahmadi", age: 22 }; //objects
Ali.age; //22
let students = [
  { name: "ali", last: "ahmadi", age: 22 },
  { name: "reza", last: "alavi", age: 25 },
]; //arrays of objects
students[1].age; //25

//ES6 new datatypes
//set
let numberSets = new Set(); //this is like arrays but no same values added
numberSets.add(20);
numberSets.add(7);
let numberSets2 = new Set([1, 2, 3]);
let numberSets3 = new Set(anArray); //change an array to a set
let newArray = [...numberSets]; //change a set to an array //you will find out the reason of [... name ] syntax later
//map
let mapUser = new Map(); //creat an object like set but map has property and value structure - these has object length but objects dont
userMap.set("id", 1);
//WeakSet and WeakMap
//instead if set and map write WeakSet and WeakMap
//weakset has no size method - just store objects - it will delete the object from memory if we delete it later in our program (good for perfomance)

console.log(typeof myAge); // typeof shows the type of the variable
/*truthy and falsy values:
falsy: zero number, empty charachter, undefined,NaN,empty array
truthy: other than falsy values
*/

//get input from user and store it in a variable
let userName;
userName = prompt("Enter your name: "); //gets input chiziz ke barmegardone string hast

//data type conversion
let ageString = "22";
console.log(+ageString); //22 number
console.log(Number(ageString)); //22 number
console.log(Number("   123   ")); // 123 number
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

let value = true; // boolean
value = String(value); // string
console.log(Boolean(1)); // true hame adad be joz sefr true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true tamam string ha true hastan
console.log(Boolean("")); // false

//operators////////////////////////////////////////////////////////////////////////
let a = 2,
  b = 5;

let plus = a + b; //7
let minus = a - b; //-3
let multiplication = a * b; //10
let devision = b / a; //2
let remain = a % b; //1
let exponentiation = a ** b; //32
a++; //a=3
b--; //b=4
a = a + 5; //or a+=5; or any operator instead of +
let c = 2;
let d;
d = c++; //d=2
c = 2;
d = ++c; //d=3

/*primitive variable vs reference data types

primitive: number bigInt boolean symbol null undefined string

a=b    '=' means we make copy of 'b' to 'a' when we change 'b' or 'a' later the other one will not change

reference: objects array function

a=b    '=' means 'a' is equal to 'b' and whenever we change 'a' or 'b' the other one will change too!
*/

//spread syntax ES6
//we know array1 = array2 means both are the same and if we change array1, array2 is going to change too
//but we can use ES6 spread syntax to fix this
array1 = [...array2];
//now two arrays are not one and we can change one of them without changing another
//or
array1 = [...array2, 100, ...array3]; //it concats all of them and send it to the array1
//Can be used for objects too
newObj = { ...oldObj };
//useful  when we want to change an array or object somewhere in our program but dont want to change the real array we had

//array desk ES6
let student = [1, "Ali", 12, 15];
//instead of create a variable for each by typing multiple lines:
let [studentId, studentName, , userAge] = student;
/* now values are
  studentId=1
  studentName='Ali'
  userAge=15
*/
//can be used for objects too
let user = {
  id1: 1,
  name1: "ali",
  age1: 22,
};
// instead of let id = user.id etc...
let { name1, age1, id1: userId } = user;
/* now values are
  name1="ali"
  age1=22
  userId=1
*/

//Template String or String Literal - ES6
//instead of:
let type = "fake";
let txt = "Lorem Ipsum is " + type;
let names = "ali reza ahmad";
//use this:
let type2 = "fake";
let txt2 = `Lorem Ipsum is ${type} and 2 plus 2 is ${2 + 2}`;
let names2 = `ali
reza 
ahmad
`; //we can use newLine and it print out just like this

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
