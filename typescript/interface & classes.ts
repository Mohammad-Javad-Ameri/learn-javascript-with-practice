//interface

interface iUser {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	// startTrail: () => string
	startTrail(): string;
	getCoupon(couponname: string, value: number): number;
}

interface iUser {
	githubToken: string;
}

interface iAdmin extends iUser {
	role: "admin" | "ta" | "learner";
}

const ihitesh: iAdmin = {
	dbId: 22,
	email: "h@h.com",
	userId: 2211,
	role: "admin",
	githubToken: "github",
	startTrail: () => {
		return "trail started";
	},
	getCoupon: (name: "hitesh10", off: 10) => {
		return 10;
	},
};
ihitesh.email = "h@hc.com";
// ihitesh.dbId = 33

//classes

// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }
class cUser {
	protected _courseCount = 1; //protected is only available to the class and its inherited childs
	readonly city: string = "Jaipur"; //available everywhere but readonly

	constructor(
		public email: string, //available everywhere
		public name: string,
		private userId: string //private is only available in the class
	) {}
	private deleteToken() {
		console.log("Token deleted");
	}

	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get courseCount(): number {
		return this._courseCount;
	}

	set courseCount(courseNum) {
		if (courseNum <= 1) {
			throw new Error("Course count should be more than 1");
		}
		this._courseCount = courseNum;
	}
}

class SubUser extends cUser {
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}

const chitesh = new cUser("h@h.com", "hitesh", "5252");
// hitesh.name

// interface and classes
interface TakePhoto {
	cameraMode: string;
	filter: string;
	burst: number;
}

interface Story {
	createStory(): void;
}

class Instagram implements TakePhoto {
	constructor(public cameraMode: string, public filter: string, public burst: number) {}
}

class Youtube implements TakePhoto, Story {
	constructor(public cameraMode: string, public filter: string, public burst: number, public short: string) {}

	createStory(): void {
		console.log("Story was created");
	}
}

//abstract classes

abstract class TakePhoto1 {
	constructor(public cameraMode: string, public filter: string) {}

	abstract getSepia(): void;
	getReelTime(): number {
		//some complex calculation
		return 8;
	}
}

class Instagram1 extends TakePhoto1 {
	constructor(public cameraMode: string, public filter: string, public burst: number) {
		super(cameraMode, filter);
	}

	getSepia(): void {
		console.log("Sepia");
	}
}

const hc = new Instagram1("test", "Test", 3);

hc.getReelTime();
