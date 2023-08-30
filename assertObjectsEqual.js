// Call inside eqObjects function
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// Call inside assertObjectsEqual function
const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  for (const key of Object.keys(actual)) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (!eqArrays(actual[key], expected[key])) {
        return false;
      }
    } else if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

// Compare two objects and log the result to the console
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test assertObjectsEqual function
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);