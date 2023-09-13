/* Compare two primitive types and log to the console whether they are strictly equal
 * parameter: actual - any primitive
 * parameter: expected - any primitive
 * returns: undefined */
const assertEqual = function(actual, expected) {
  // compare the values using the strict equality operator
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;