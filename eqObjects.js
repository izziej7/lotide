// Call in eqObjects function
const eqArrays = require("./eqArrays");

/* Compare two objects and return a boolean based on whether they are an exact match
 * parameter: actual - object - [string]: any
 * parameter: expected - object - [string]: any
 * returns: boolean - true || false */
const eqObjects = function(actual, expected) {
  // if the length of the two objects are not equal, return false
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  /* loop through the array of object keys
   * if both the objects' values are arrays, call the eqArrays function to compare them
   * if the result of the call is false, return false
   * if both the objects' values are objects (but not arrays), make a recursive call
   * recursive calls will continue to be made until the values of the objects are not objects
   * if the result of the recursive calls is false, return false
   * if both the objects' values are primitives, compare them
   * if they are not strictly equal, return false */
  for (const key of Object.keys(actual)) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (!eqArrays(actual[key], expected[key])) {
        return false;
      }
    } else if (typeof actual[key] === "object" && typeof expected[key] === "object") {
      if (!eqObjects(actual[key], expected[key])) {
        return false;
      }
    } else if (actual[key] !== expected[key]) {
      return false;
    }
  }
  // after looping through the objects, if false was not returned, then return true
  return true;
};

module.exports = eqObjects;