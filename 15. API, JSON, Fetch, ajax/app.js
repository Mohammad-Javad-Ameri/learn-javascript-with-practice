//AJAX - Asynchronous Javascript And XML
/*
to get data from backend without refreshing webpage
like creating an onblur event on an input to check availability of a username
with connecting to server and database without refreshing the page
*/

//API - Application programming interface
/*
api is how two application communicates to eachother with requests
like requesting to backend from frontend to get list of users or products or any data.

http methods:
C -> Create -> Post
R -> Read -> Get
U -> Update -> Put
D -> Delete -> Delete

example: 
backend programmer create an api with address of: serverURL/api/users
frontend programmer use this api to get users from backend

*/

//JSON - JavaScript Object Notation
/*
this is an open data interchange format that is both human and machine-readable.
Despite the name JavaScript Object Notation, JSON is independent of any programming language
and is a common API output in a wide variety of applications.

when we get and send data between frontend and backend with API these datas should be in JSON

must create a name.json file like in this folder
in json we can use: strings, objects, array, number, bool and null

watch user.json file to see how it is written
*/
let users = [
    {
        id: 1,
        username: "Amin",
        password: 1010,
    },
    {
        id: 2,
        username: "Amir",
        password: 0000,
    },
    {
        id: 1,
        username: "Ali",
        password: 1122,
    },
];

JSON.stringify(users); //this code change the users array to a JSON code - we do this before sending this data to serverside with help of api

let aJsonData =
    '[{"id": 1,"username": "ali","password": 1212},{"id": 2,"username": "amin","password": 1212}]';

JSON.parse(aJsonData); //now with this we change json to javascript readable data

//fetch method - when we want to send data to server using api
//we use this api: https://randomuser.me/api/ for practice - it gets a random user information
//backend developer should explain how to use the api that he/she wrote
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    //fetch has two parameters ('api', method) default method is 'get' and fetch output is always a promise
    fetch("https://randomuser.me/api/")
        .then((res) => {
            if (res.status === 200) {
                //requst recieved succesfully
                return res.json();
            }
            return new Error("Error:(");
        })
        .then((data) => {
            console.log("data: ", data);
        })
        .catch((err) => {
            console.log(err);
        });
});
//methods with an example
//fetch method: post - to send data through API
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let userData = {
        //values of inputs to send
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
        //names should be the same as what beckend developer says
    };
    fetch("an api address to send to server", {
        method: "POST",
        headers: {
            //what kind of data are that we are sending
            "Content-type": "application/json",
        },
        //data's to send
        body: JSON.stringify(userData),
    }).then((res) => console.log(res));
});
//fetch method: GET - to read data from backend through api
btn.addEventListener("click", (e) => {
    fetch("an api address to get from server")
        .then((res) => res.json())
        .then((data) => console.log(data));
    //instead of log we can forexamle write foreach to do sth for every user
});
//fetch method: DELETE - to delete data from backend through api
function deleteUser() {
    fetch(`an api address with custom id to delete from server (database)`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}
//fetch method: PUT - to Update data through API
function updateUser() {
    let userData = {
        //values of inputs to update
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
        //names should be the same as what beckend developer says
    };
    fetch("an api address to send to server", {
        method: "PUT",
        headers: {
            //what kind of data are that we are updating
            "Content-type": "application/json",
        },
        //data's to update
        body: JSON.stringify(userData),
    }).then((res) => console.log(res));
}
