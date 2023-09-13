// Call in assertArraysEqual function
const eqArrays = require("./eqArrays");

/* Compare two arrays and log to the console whether they are an exact match
 * parameter: actual - array
 * parameter: expected - array
 * returns: undefined */
const assertArraysEqual = function(actual, expected) {
  // pass the arrays into the eqArrays function to determine whether they are an exact match
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
