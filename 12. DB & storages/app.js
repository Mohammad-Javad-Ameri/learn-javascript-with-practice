//local storage
localStorage.setItem("keyName", "value"); //adds to inspect application tab -> local storage
localStorage.getItem("keyName"); //gets the value
localStorage.removeItem("keyName"); //removes this key in local storage
localStorage.clear(); //clear all user's browser local storage
localStorage.setItem("keyName", JSON.stringify(["ali", "amin", "amir"])); //make every other typeofs into string
JSON.parse(localStorage.getItem("keyName")); //make every string value to its real typeof

//DB => database to store data's in backend - DB's like mySql mongoDb etc...
//CRUD => Create - Read - Update - Delete

//indexDB - its a local database which you can see on inspect - not so useful
let db = null;
let objectStore = null;

window.addEventListener("load", () => {
    let DBOpenReq = indexedDB.open("DBname", 1); //everytime we change these code we should change version
    DBOpenReq.addEventListener("error", (err) => {
        console.warn("Error", err);
    });
    DBOpenReq.addEventListener("success", (event) => {
        db = event.target.result; //to be able to use db in register form event
        console.log("success", event.target.result);
    });
    DBOpenReq.addEventListener("upgradeneeded", (event) => {
        //it will execute when first version of database or version changed
        db = event.target.result;
        console.log("upgrade", event);
        if (!db.objectStoreNames.contains("users"))
            objectStore = db.creatObjectStore("users");
        if (db.objectStoreNames.contains("courses")) {
            db.deletObjectStore("courses");
        }
    });
});
// if we want to create a table data to store new users of a form to indexDb
registerForm.addEventListener("submit", (event) => {
    //registerForm contains the html form
    event.preventDefault(); //to prevent refreshing the page while clicking submit btn

    let newUser = {
        userID: Math.floor(Math.random() * 9999),
        name: nameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
    };

    let tx = db.transaction("users", "readwrite"); // "tableName","type"=> can be readwrite or readonly

    tx.addEventListener("error", (err) => {
        console.warn("Tx Error:", err);
    });

    tx.addEventListener("Success", (event) => {
        console.log("tx", event);
    });

    let store = tx.objectStore("users");
    let request = store.add(newUser);
    //let request = store.getAll(newUser);//for readonly the data of a table - it'll be in event.target.result as an array
    //let tx = creatTX('user',readwrite);

    request.addEventListener("error", (err) => {
        console.warn("Request Error:", err);
    });

    request.addEventListener("Success", (event) => {
        console.log("Request", event);
    });
});
