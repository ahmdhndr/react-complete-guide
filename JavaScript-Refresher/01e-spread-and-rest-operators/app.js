/**
 * Spread & Rest Operators
 * using '...'
 * it depends on when the '...' use
 * in Spread Operators => Used to split up array elements OR object properties
 * ----
 * const newArray = [ ...oldArray, 1, 2 ] * copying all array from oldArray
 * const newObject = { ...oldObject, newProp: 5 } * pull out all the properties and values from oldObject and adding key:value pairs to the newObject
 * PS: if the oldObject also have newProp it'll overwritten with the newProp: 5 that newObject takes
 * ----
 * in Rest Operators => Used to merge a list of function arguments into an array
 * ----
 * function sortArgs(...args) {
 *  return args.sort()
 * }
 * ----
 */

// Ex

// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // [1, 2, 3, 4, 5,6]
// if not using ...
const newNumbers = [numbers, 4, 5, 6];
console.log(newNumbers); // [[1, 2, 3], 4, 5, 6]

// Rest
const filtered = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filtered(1, 2, 3, 4, 5, 1, 1, 2)); // [1, 1, 1]
