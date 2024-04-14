//ES6 - OOP = Object Oriented Programming

//classes - we write class names first letters in capital for clean code
class Person {
    //classes has a default constructor(){} which is called automaticaly when creating objects from class
    //we can create a custom constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("person constructor called");
    }
    //methods
    walk() {
        console.log("user has been walked :/");
    }
    getAge() {
        return this.age;
    }
}
//create objects from class
let firstPerson = new Person("Ali", 19);
let secondPerson = new Person("Reza", 25);
//access objects values
firstPerson.age; //19
//access methods
secondPerson.walk();

//inheritance
class Student extends Person {
    constructor(name, age, school) {
        super(name, age); //this will use properties for parent class to initialize
        this.school = school;
    }
    //overwrite parent methods
    walk() {
        console.log(super.getAge()); //using parent method
        console.log("student has been walked :/");
    }

    //static methods only available on class itself like: Student.stMethod();
    static stMethod() {
        //some codes
    }
}
let newStudent = new Student("sara", 18, "schoolName");
newStudent.getAge(); //parent methods are available for inherited classes
