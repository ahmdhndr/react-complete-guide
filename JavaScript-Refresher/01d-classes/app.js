/**
 * Classes
 * Classes are blueprint for object
 * Using 'new' keyword to call Classes
 * support inheritance -> class Person extends Human ...
 * property are variable attached to classes
 * method are function attached to classes
 */

class Person {
  constructor() {
    this.name = 'Eru';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // Output: 'Eru'

// Inheritance
class Human {
  constructor() {
    this.age = 26;
  }

  printMyAge() {
    console.log(this.age);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Eru';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // Output: 'Eru'
person.printMyAge(); // if no 'super()' constructor keyword in derived class will output: 'ReferenceError: Must call super constructor in derived ...
// after adding super() method
person.printMyAge(); // Output: 26
