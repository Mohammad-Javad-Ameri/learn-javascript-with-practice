//async vs sync
//sync
console.log("1");
console.log("2");
console.log("3");
console.log("4"); //output: 1 2 3 4
//async
console.log("1");
setTimeout(function () {
    console.log("2"); //executes after 3 seconds
}, 3000);
console.log("3");
console.log("4"); //output: 1 3 4 2

//promise ES6 - for asycronize programming and good for preventing callback hell with callback functions
//forexample thing like checking user login from database which takes time we use promises to do that
let myPromise = new Promise((resolve, reject) => {
    //if we do the promise we cal resolve and if we dont we call reject

    setTimeout(() => {
        console.log("Login check !!");
        if (loginFlag) {
            resolve();
        }
    }, 3000);
});
function success() {
    console.log("success :)");
}
function error() {
    console.log("error :(");
}
myPromise.then(success, error);
//or
myPromise
    .then(success)
    .catch(error)
    .finally(() => {
        //this will execute whether promis is resolved or rejected
        console.log("promise is done.");
    });
//another example
let books = [
    { id: 1, name: "Bi Shouri", price: 95000 },
    { id: 2, name: "Bimarefat", price: 56660 },
    { id: 3, name: "pedar", price: 75000 },
];
function addBook(name, price) {
    let newBook = {
        id: books.length + 1,
        name: name,
        price: price,
    };
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (books.push(newBook)) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });
}
addBook("golestan", 90_000).then(() => {
    console.log(books);
});
//in these examples we used timeout because we dont have an api that takes time right now
//phases of promise: pending=no resolve and no reject , fullfilled:resolved , rejected: rejects
//we can have multiple .then and if promise resolved first .then()happens and first .then() returns a value and next then() gets the value from its input

//async & await ES8
//we can make async functions and use await keyword with try catch error handling(if we want) instead of then()catch() in promises
//like:
async function funcName() {
    try {
        let varName = await anotherFunc(); //await means wait for the function to return then execute next code
    } catch (err) {
        //error handle
    }
}

//for better understanding
//here is an example which compares => callback(not good) and promise(good) and asyn await(the better one)

const userLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: username,
                password: password,
                email: "ali@gmail.com",
            });
        }, 4000);
    });
};

const userCourses = (username) => {
    console.log("User username:", username);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 21, title: "Js Expert", price: "Free" },
                { id: 34, title: "Redux Expert", price: "Free" },
            ]);
        }, 3000);
    });
};

const mainCourseInfo = (courseTitle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 34,
                title: "Redux Expert",
                price: "Free",
            });
        }, 2000);
    });
};

console.log("website loaded for user");

//this is callbacks - not good - callback hell problem - note: in this way upper functions are different
/* this is not for upper functions you see
 const loginInfos = userLogin('amin_seaadi', '0101', (userObject) => {
     console.log('user logged in:', userObject);

     userCourses(userObject.username, (userAllCourses) => {
         console.log('User Courses: ', userAllCourses);

         mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
             console.log('Main Course Infos:', mainInfos);
         })
     })
 }) //this is so confusing that even me that wrote this having a hard time to figure out what it was
*/

//this is promise way
userLogin()
    .then((userObject) => userCourses(userObject.username))
    .then((userAllCourses) => mainCourseInfo(userAllCourses[1].title))
    .then((mainInfos) => console.log(mainInfos));

//this is ascyn and await way - we can use try{}catch{} for error handling
async function runUserCodes() {
    let userInfos = await userLogin("alireza", 0101);
    let userAllCOurses = await userCourses(userInfos.username);
    let mainInfos = await mainCourseInfo(userAllCOurses[1].title);

    console.log(mainInfos);
}

runUserCodes();

console.log("user successfully logged in");

//fetch API with then.catch vs async await

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((post, index) => {
            console.log(`Post-${index + 1}: ${post}`);
        });
    });

// Async Await Way with try catch error handling

async function getPosts() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await res.json();

        posts.forEach((post, index) => {
            console.log(`Post-${index + 1}: ${post}`);
        });
    } catch (err) {
        console.log("there is a problem", err);
        alert("check the code one more time");
    }
}

getPosts();
