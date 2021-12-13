/**
 * Arrow function solve a lot of the issues you often had with 'this' keyword
 */

// Example

// before ES6
function myFnc() {
  // code goes here
}

var myFnc = function () {
  // code goes here
};

function printMyName(name) {
  console.log(name);
}
printMyName(); // Output: undefined
printMyName('Eru'); // Output: 'Eru'

// on ES6
const myFnc = () => {
  // code goes here
};

// arrow function default syntax
const multiply = (number) => {
  return number * 2;
};
console.log(multiply(8)); // Output: 16

// arrow function shorten syntax
const multiply = (number) => number * 2;
console.log(multiply(8)); // Output: 16
