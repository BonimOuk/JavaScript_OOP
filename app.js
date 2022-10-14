console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name = "", pets = Number, residence = "", hobbies = []) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {}
  soundOff() {}
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter((savedHobby) => savedHobby !== hobby);
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
  constructor(name = "", pets = Number, residence = "", hobbies = []) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log(`Hello fellow ${this.occupation}`);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const person = new Person("Steve", 2, "California", [
  "Hiking",
  "Gymnastic",
  "Youtube",
  "Basketball",
]);
const coder = new Coder("Michael", 2, "Somebody", [
  "Hiking",
  "Gymnastic",
  "Youtube",
  "Basketball",
]);

console.log(person);
console.log(coder);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
class Calculator {
  constructor(result = 0) {
    this.result = result;
  }
  add(numberOne, numberTwo) {
    this.result = numberOne + numberTwo;
    return this.result;
  }
  subtract(numberOne, numberTwo) {
    this.result = numberOne - numberTwo;
    return this.result;
  }
  multiply(numberOne, numberTwo) {
    this.result = numberOne * numberTwo;
    return this.result;
  }
  divide(numberOne, numberTwo) {
    this.result = parseFloat(numberOne) / numberTwo;
    return this.result;
  }
  displayResult() {
    console.log(this.result);
  }
}

// testing

const calc = new Calculator();

console.log(`Adding 5 and 5: ${calc.add(5, 5)}`);
console.log(`Subtracting 5 and 5: ${calc.subtract(5, 5)}`);
console.log(`Multiplying 5 and 5: ${calc.multiply(5, 5)}`);
console.log(`Dividing 5 and 5: ${calc.divide(5, 5)}`);
