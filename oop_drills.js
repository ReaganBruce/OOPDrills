// class MyFriend {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     femaleGreeting(){
//         alert(`Her name is ${this.firstName} ${this.lastName} and her age is ${this.age}`);
//     }

//     maleGreeting(){
//         alert(`His name is ${this.firstName} ${this.lastName} and his age is ${this.age}`);
//     }

//     finishedGreeting(){
//         alert(`${this.firstName} ${this.lastName} finished their greeting!`);
//     }
// }


// let friend1 = new MyFriend('Rebecca', 'Munkachy', 30);
// let friendFinished1 = new MyFriend('Rebecca', 'Munkachy',)
// let friend2 = new MyFriend('Jake', 'Lovett', 26);
// let friendFinished2 = new MyFriend('Jake', 'Lovett');
// friend1.femaleGreeting();
// friendFinished1.finishedGreeting();
// friend2.maleGreeting();
// friendFinished2.finishedGreeting();


// function MyFriend(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }


// MyFriend.prototype.femaleGreeting = function(){
//     alert(`Hello, this is my friend ${this.firstName} ${this.lastName}, and she is ${this.age} years old.`);
// }

// MyFriend.prototype.maleGreeting = function(){
//     alert(`Hello, this is my friend ${this.firstName} ${this.lastName}, and he is ${this.age} years old.`);
// }

// MyFriend.prototype.finishedGreeting = function(){
//     alert(`${this.firstName} ${this.lastName} has finished their greeting`);
// }

// class Person {
//   constructor(name, age) {
//     this.firstName = name;
//     this.age = age;
//   }

//   greet() {
//     alert(`Hello my name is ${this.firstName} and I am ${this.age}.`);
//   }
// }


// class Teacher extends Person {
//   constructor(name, age, dept) {
//     super(name, age);
//     this.dept = dept;
//   }
  
//   greet(){
//       alert(`Hello! My name is ${this.firstName} and I am ${this.age}! My department at school is ${this.dept}`)
//   }
// }


// class Student extends Person {
//     constructor(name, age, major){
//         super(name, age);
//         this.major = major;
//     }

//     greet(){
//         alert(`Hello my name is ${this.firstName}! My age is ${this.age} and my major is ${this.major}. Pretty sweet, huh?`);
//     }
// }

// let person1 = new Person('Reagan', 25);
// let teacher1 = new Teacher('Rebecca', 30, 'Art History');
// let student1 = new Student('Jake', 26, 'Political Science');

// person1.greet();
// teacher1.greet();
// student1.greet();


let person1 = {
 name: 'Reagan',
 sayHello: function(){
     console.log(`Hello my name is ${person1.name}.`);
 }
}

let person2 = {
    name: 'Spencer',
    sayHello: function(){
        console.log(`Hello my name is ${person2.name}.`);
    }
}


let person3 = {
    name: 'Marshia',
    sayHello: function(){
        console.log(`Hello my name is ${person3.name}.`);
    }
}

let person4 = {
    name: 'Neal',
    sayHello: function(){
        console.log(`Hello my name is ${person4.name}.`);
    }
}

let person5 = {
    name: 'Soren',
    sayHello: function(){
        console.log(`Hello my name is ${person5.name}.`);
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();



//ES5 SYNTAX:
function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

Person.prototype.greetFunction = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
}

let newPerson1= new Person('Reagan', 25, 'Birmingham');
newPerson1.greetFunction();

let newPerson2 = new Person('Spencer', 30, 'Birmingham');
newPerson2.greetFunction();

let newPerson3 = new Person('Marshia', 59, 'Birmingham');
newPerson3.greetFunction();

let newPerson4 = new Person('Neal', 60, 'Birmingham');
newPerson4.greetFunction();

let newPerson5 = new Person('Soren', 9, 'Birmingham');
newPerson5.greetFunction();


//ES6 SYNTAX:
class thisPerson {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }


    greetingFunction(){
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
    }
}

let thisPerson1 =  new thisPerson('Reagan', 25, 'Birmingham');
thisPerson1.greetingFunction();

let thisPerson2 = new thisPerson('Spencer', 30, 'Birmingham');
thisPerson2.greetingFunction();

let thisPerson3 = new thisPerson('Marshia', 59, 'Birmingam');
thisPerson3.greetingFunction();

let thisPerson4 = new Person('Neal', 60, 'Birmingham');
thisPerson4.greetFunction();

let thisPerson5 = new Person('Soren', 9, 'Birmingham');
thisPerson5.greetFunction();






class Vehicle  {
    constructor(manufacturer, type, wheels){
       this.manufacturer = manufacturer;
       this.type = type
       this.wheels = wheels;
    }

    aboutVehicle(){
        console.log(`${this.manufacturer} manufactured the ${this.type}, which has ${this.wheels}`);
    }
}

class Truck extends Vehicle{
    constructor(manufacturer, type, wheels, amountOfDoors, truckBed){
        super(manufacturer, type, wheels);
        this.amountOfDoors = amountOfDoors;
        this.truckBed = truckBed;
    }
    aboutTruck(){
        if(this.truckBed === true){
            console.log(`${this.manufacturer} manufactured the ${this.type}, which has ${this.wheels} wheels and ${this.amountOfDoors} doors and a ${this.truckBed}`)
        } else {
            console.log(`${this.manufacturer} manufactured the ${this.type}, which has ${this.wheels} wheels and ${this.amountOfDoors} doors and does not have a truckbed.`)
        }
    }
}

class Sedan extends Vehicle{
    constructor(manufacturer, type, wheels, size, mpg){
        super(manufacturer, type, wheels)
        this.size = size;
        this.mpg = mpg;

    }
    aboutSedan(){
        console.log(`${this.manufacturer} manufactured the ${this.type}, which has ${this.wheels} wheels. The size is ${this.size} and the mpg is ${this.mpg}mpg`)
    }
}

class Motorcyle extends Vehicle{
    constructor(manufacturer, type, wheels, handlebars, doors){
        super(manufacturer, type, wheels)
        this.handlebars = handlebars;
        this.doors = doors;
    }
    aboutMotorcyle(){
        if(this.doors === !true){
            console.log(`${this.manufacturer} manufactured the ${this.type}, which has ${this.wheels} wheels and not ${this.doors}`);
        } else {
            console.log(`${this.manufacturer} manufactured the ${this.type}, which has ${this.wheels} wheels and big ${this.handlebars}.`);
        }
    }
}

let truck1 = new Truck('Ford', 'Raptor', 4, 4, true);
let truck2 = new Truck('Ford', 'f150', 4, 4, false);
truck1.aboutTruck();

let sedan1 = new Sedan('Honda', 'Fit', 4, 'small', 120);
sedan1.aboutSedan();

let motorcyle1 = new Motorcyle('Razor', 'Street-Sweeper', 2, 'handlebars');
motorcyle1.aboutMotorcyle();

