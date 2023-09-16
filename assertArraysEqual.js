// Call in assertArraysEqual function
const eqArrays = require("./eqArrays");

// Logs to the console whether two arrays, actual and expected, are equal
const assertArraysEqual = function(actual, expected) {
  // call the eqArrays function to compare the two arrays and return a boolean
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
