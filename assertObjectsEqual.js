// Call in assertObjectsEqual function
const eqObjects = require("./eqObjects");

// Logs to the console whether two objects, actual and expected, are equal
const assertObjectsEqual = function(actual, expected) {
  // use to log the objects to the console
  const inspect = require('util').inspect;
  // call the eqObjects function to compare the two objects and return a boolean
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;