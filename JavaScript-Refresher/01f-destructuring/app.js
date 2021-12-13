/**
 * Destructuring
 * Easily extract array elements or object properties and store them in variables
 * Array Destructuring
 * ---
 * [a, b] = ['Hello', 'Eru'];
 * console.log(a, b) // Hello Eru
 * ---
 *
 * Object Destructuring
 * ---
 * {name} = {name: 'Eru', age: 26}
 * console.log(name) // Eru
 * console.log(age) // undefined
 * ---
 */

// Array
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); // 1, 2
[num1, , num3] = numbers;
console.log(num1, num3); // 1, 3
