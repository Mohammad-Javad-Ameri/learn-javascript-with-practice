import { isLogin, userRegister, usersCount as usersLength } from "./funcs.js"; // we import functions from funcs file to this file to use them
import usersCountNewName from "./funcs.js"; //we imported from default export in funcs.js
import * as funcs from "./funcs.js"; // we imported all exports with *

let newUserName = prompt("Enter User Name: ");
let newUserAge = prompt("Enter User Age: ");

console.log("Users Count:", usersLength);

console.log(userRegister(newUserName, newUserAge));

console.log(isLogin(41));

console.log(funcs.userRegister(newUserName, newUserAge)); // we used imported funcs with *
