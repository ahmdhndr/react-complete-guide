/**
 * Reference & Primitive Types
 * Primitive Types:
 * numbers, strings, booleans
 * - whenever reassign or store a variable in another variable, it'll copy the value
 *
 * Reference Types:
 * objects, arrays
 * - not actually copied the value inside the object or arrays
 * - the object or array value is stored in memory and in the variable we store a pointer to that place in memory
 * - whenever reassign them, you're copying the pointer not the value
 */

// Ex
// primitive type
let number = 2;
let num2 = number;
console.log(num2); // 2;
number = 4;
console.log(num2); // 2;

// reference type
const person = {
  name: 'Eru',
};

const person2 = person;
console.log(person2); // [object Object] { name: 'Eru' }
person.name = 'Dev';
console.log(person2); // [object Object] { name: 'Dev' }

const copyPerson = {
  ...person,
};
console.log(copyPerson); // [object Object] { name: 'Eru' }
person.name = 'Dev';
console.log(copyPerson); // [object Object] { name: 'Eru' }
