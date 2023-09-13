// Call in assertObjectsEqual function
const eqObjects = require("./eqObjects");

/* Compare two objects and log to the console whether they are an exact match
 * parameter: actual - object - [string]: any
 * parameter: expected - object - [string]: any
 * returns: undefined */
const assertObjectsEqual = function(actual, expected) {
  // use to log the objects to the console
  const inspect = require('util').inspect;
  // pass the objects into the eqObjects function to determine whether they are an exact match
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;