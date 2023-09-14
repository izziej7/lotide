// Call in eqObjects function
const eqArrays = require("./eqArrays");

// Returns a boolean based on whether two objects, actual and expected, are equal
const eqObjects = function(actual, expected) {
  // if the length of the two objects are not equal, return false
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  // loop through each value of actual and expected using their keys
  for (const key of Object.keys(actual)) {
    // if the value with the same key in each object is an array
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      // then call the eqArrays function to compare the value/array for the two objects
      if (!eqArrays(actual[key], expected[key])) {
        // if the eqArrays function returns false (not equal), then return false
        return false;
      }
    // if the value with the same key in each object is an object
    } else if (typeof actual[key] === "object" && typeof expected[key] === "object") {
      // then make a recursive call for this value/object
      if (!eqObjects(actual[key], expected[key])) {
        // if the recursive call returns false (not equal), then return false
        return false;
      }
    // if the value with the same key in each object is a primitive
    } else if (actual[key] !== expected[key]) {
      // if they are not equal, then return false
      return false;
    }
  }
  // if false is not already returned (equal), then return true
  return true;
};

module.exports = eqObjects;