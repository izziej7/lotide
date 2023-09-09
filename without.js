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

// Use to test without function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Return a subset of the array source, removing unwanted elements specified in itemsToRemove
const without = function(source, itemsToRemove) {
  const arrayAfterRemoved = [];
  for (const item of source) {
    if (!remove(item, itemsToRemove)) {
      arrayAfterRemoved.push(item);
    }
  }
  return arrayAfterRemoved;
};

// Helper function: return whether a source element must be removed
const remove = function(sourceItem, itemsToRemove) {
  for (const item of itemsToRemove) {
    if (sourceItem === item) {
      return true;
    }
  }
  return false;
};

// Test without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);