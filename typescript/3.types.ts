//types: string - number - boolean - array -
// any(disable type checking) - noImplicitAny (when compiler can't figure the type out it'll be any)
// don't use any!

let myName: string = "Alice";
//you can delete ': string =' ts will figure it out
//but when ts can't understand what will assigned in the future you should declare type like:
let myVar: number;
myVar = 25;

//types
let myString: string = "Alice";
let myNumber: number = 256.3;
let myBool: boolean = true;

//function input types
function greet(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}
function getFavoriteNumber(): number {
	return 26;
}
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// } //not working

const getHello = (s: string): string => {
	return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
	return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
	console.log(errmsg);
}
function handleError(errmsg: string): never {
	throw new Error(errmsg);
}

//objects

const User = {
	name: "hitesh",
	email: "hitesh@lco.dev",
	isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
	return { name: "reactjs", price: 399 };
}
//good way
type User2 = {
	name: string;
	email: string;
	isActive: boolean;
};
function createUser2(user: User2): User2 {
	return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });

type User = {
	readonly _id: string; //can't change
	name: string;
	email: string;
	isActive: boolean;
	credcardDetails?: number;
};

let myUser: User = {
	_id: "1245",
	name: "h",
	email: "h@h.com",
	isActive: false,
};

type cardNumber = {
	cardnumber: string;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber &
	cardDate & {
		cvv: number;
	};

myUser.email = "h@gmail.com";
// myUser._id = "asa" //can't do it

//arrays

const superHeros: string[] = [];
superHeros.push("spiderman");
// const heroPower: number[] = []
const heroPower: Array<number> = [];
heroPower.push(2);

type User3 = {
	name: string;
	isActive: boolean;
};
const allUsers: User3[] = [];
allUsers.push({ name: "", isActive: true });

const MLModels: number[][] = [[255, 255, 255], []];

// union types

let score: number | string = 33;
score = 44;
score = "55";

type User5 = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let hitesh: User5 | Admin = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);

// }
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
	if (typeof id === "string") {
		id.toLowerCase();
	}
}

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" //not accepted

//tuples

// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean];

tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type tUser = [number, string];

const tnewUser: tUser = [112, "example@google.com"];

tnewUser[1] = "hc.com";
tnewUser.push("bgg"); // it is possible so it's not good

// enums

// if add 'const' befor enum, generated js is much simpler but both works
enum SeatChoice {
	AISLE = "aisle",
	MIDDLE = 3,
	WINDOW,
	FOURTH,
}
const hcSeat = SeatChoice.AISLE;

//generic types

const score1: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
	return val;
}
// any output type can be different from input type
function identityTwo(val: any): any {
	return val;
}
//in generic type: if input is number for example then output should be number too
function identityThree<Type>(val: Type): Type {
	return val;
}
// identityThree(true)

//whatever name we want instead of Type
function identityFour<T>(val: T): T {
	return val;
}

interface Bootle {
	brand: string;
	type: number;
}

// identityFour<Bootle>({})

//input is the array of any type and output should be a one index array type as output
function getSearchProducts<T>(products: T[]): T {
	// do some database operations
	const myIndex = 3;
	return products[myIndex];
}
//<T,> is just like <T> but the use ',' in react.js proj to say its a generic not a jsx syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
	//do some database operations
	const myIndex = 4;
	return products[myIndex];
};

interface Database {
	connection: string;
	username: string;
	password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
	return {
		valOne,
		valTwo,
	};
}

// anotherFunction(3, {})

interface Quiz {
	name: string;
	type: string;
}

interface Course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
	}
}

//type narrowing

function detectType(val: number | string) {
	if (typeof val === "string") {
		return val.toLowerCase();
	}
	return val + 3;
}

function provideId(id: string | null) {
	if (!id) {
		console.log("Please provide ID");
		return;
	}
	id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
	if (strs) {
		if (typeof strs === "object") {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === "string") {
			console.log(strs);
		}
	}
}

interface User6 {
	name: string;
	email: string;
}

interface Admin6 {
	name: string;
	email: string;
	isAdmin: boolean;
}

//the 'in' in narrowing
function isAdminAccount(account: User6 | Admin6) {
	if ("isAdmin" in account) {
		return account.isAdmin;
	}
}

//the instanceof and type predictates
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		pet;
		return "fish food";
	} else {
		pet;
		return "bird Food";
	}
}

//Discriminated union & Exhaustiveness checking

interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	side: number;
}

interface Rectangle {
	kind: "rectangle";
	length: number;
	width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius ** 2;
	}
	//return shape.side * shape.side
}

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;

		case "square":
			return shape.side * shape.side;
		case "rectangle":
			return shape.length * shape.width;

		default:
			//this variable is just for if we added an interface but did not implement it in use case it will show error
			const _defaultforshape: never = shape;
			return _defaultforshape;
	}
}
