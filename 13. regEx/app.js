//RegEx ES6
let txt = "i am alireza ,web developer";
let regexCode = /alireza/; //finds 'alireza' pattern in a string
regexCode = /a.m/; //first letter 'a' second enything third 'm' can be /a..m/ for four letters etc...
regexCode = /a.+n/; //first 'a' between and letter for any long and last one should be 'n'
let emailVerification = /.+@.+.com/; // email true pattern
console.log(regexCode.test(text)); //true or false
