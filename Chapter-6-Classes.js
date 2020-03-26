// JavaScript offer many programming paradigms -- Object Oriented programming is one of them
// Everything in JS is an object including function
// Mordern JS class support


class Person {
  // similar to RUBY initialize
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`)
  }
}

// Can extend classes (inheritence concept)

class Student extends Person {
  constructor(name, level) {
    super(name); // same as ruby uses the super keyword
    this.level = level;
  }

  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const p1 = new Person("Sandeep"); // instatiates using new key word
const p2 = new Student("Supreeth", '11th grade');
const p3 = new Student("RKT", '12th grade');

p1.greet(); // Hello Sandeep
p2.greet(); // Hello Supreeth from 11th grade
p3.greet(); // Hello RKT from 12th grade

p3.greet = () => console.log('This changes the greet function');

p3.greet(); // This changes the greet function
