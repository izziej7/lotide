// Call in eqObjects function
const eqArrays = require("./eqArrays");

// Call in assertObjectsEqual function
const eqObjects = require("./eqObjects");

// Compare two objects and log if they are an exact match
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;