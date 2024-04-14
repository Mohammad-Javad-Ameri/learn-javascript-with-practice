//we write all functions in this file and export them to be used all over the program fils

const users = [
    { id: 18, name: "Ali", age: 22 },
    { id: 29, name: "Amin", age: 23 },
    { id: 36, name: "Amir", age: 19 },
    { id: 41, name: "Sasan", age: 28 },
    { id: 54, name: "Qadir", age: 20 },
];

let usersCount = users.length;

function isLogin(userID) {
    let isUserInUsers = users.some((user) => user.id === userID);

    return isUserInUsers;
}

export function userRegister(name, age) {
    let newUserObj = {
        id: Math.floor(Math.random() * 100),
        name: name,
        age: age,
    };
    ``;

    users.push(newUserObj);

    return users;
}

export { isLogin, usersCount }; //this is the better normal way to export

export default usersCount; // we can only have one default export in a file - no curlybraces
