// Call in assertArraysEqual function (nested)
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

// Use to test flatten function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Return a flattened version (single-level array) of a nested array
const flatten = function(nestedArray) {
  const flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flatArray.push(nestedArray[i][j]);
      }
    } else {
      flatArray.push(nestedArray[i]);
    }
  }
  return flatArray;
};

// Test flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", "2", ["3", "4"], "5", ["6"]]), ["1", "2", "3", "4", "5", "6"]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, 3, [], 4]), [1, 2, 3, 4]);