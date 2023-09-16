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
    // declare variables to store whether each value with the same key is an array
    const actualArr = Array.isArray(actual[key]);
    const expectedArr = Array.isArray(expected[key]);
    
    // declare variables to store whether each value with the same key is an object
    const actualObj = typeof actual[key] === "object" ? true : false;
    const expectedObj = typeof expected[key] === "object" ? true : false;

    // if the value is an array in both actual and expected
    if (actualArr && expectedArr) {
      // call the eqArrays function
      if (!eqArrays(actual[key], expected[key])) {
        return false;
      }
    }

    // if the value is an array in one but not both of actual and expected
    if (!actualArr && expectedArr || actualArr && !expectedArr) {
      return false;
    }

    // if the value is not an array but is an object in both actual and expected
    if (!actualArr && !expectedArr && actualObj && expectedObj) {
      // make a recursive call for this value
      if (!eqObjects(actual[key], expected[key])) {
        return false;
      }
    }

    // if the value is an object in one but not both of actual and expected
    if (!actualObj && expectedObj || actualObj && !expectedObj) {
      return false;
    }

    // if the value is not an object in both actual and expected
    if (!actualObj && !expectedObj) {
      if (actual[key] !== expected[key]) {
        return false;
      }
    }
    
  }

  // if false is not already returned, then return true
  return true;
};

module.exports = eqObjects;