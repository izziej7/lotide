// Call in eqObjects function
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

// Call in assertObjectsEqual function
const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
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
  return true;
};

// Compare two objects and log if they are an exact match
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test assertObjectsEqual function
const shirtOne = { color: "red", size: "medium" };
const shirtTwo = { size: "medium", color: "red" };
assertObjectsEqual(shirtOne, shirtTwo);

const shirtThree = { colors: ["red", "blue"], size: "medium" };
const shirtFour = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(shirtThree, shirtFour);