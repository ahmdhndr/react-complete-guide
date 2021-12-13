/**
 * - 'let' and 'const' are two different ways of creating variables in JS
 * - before ES6 there is 'var' to create variable
 * - 'var' still works but highly encourage to use 'let' and 'const'
 */

// Example
var myName = 'Eru';
console.log(myName); // Output: 'Eru'

myName = 'Devs';
console.log(myName); // Output: 'Devs';

let myName = 'Eru';
console.log(myName); // Output: 'Eru'

myName = 'Devs';
console.log(myName); // Output: 'Devs';

const myName = 'Eru';
console.log(myName); // Output: 'Eru'

myName = 'Devs';
console.log(myName); // Output: 'TypeError: Assignment to constant variable';
