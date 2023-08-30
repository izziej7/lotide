// Call inside assertArraysEqual function
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

// Return a subset of an array (source), removing unwanted elements (itemsToRemove)
const without = function(source, itemsToRemove) {
  const itemsRemovedArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!remove(source[i], itemsToRemove)) {
      itemsRemovedArray.push(source[i]);
    }
  }
  return itemsRemovedArray;
};

// Helper function: return whether a source element must be removed
const remove = function(sourceElement, itemsToRemove) {
  for (let j = 0; j < itemsToRemove.length; j++) {
    if (sourceElement === itemsToRemove[j]) {
      return true;
    }
  }
  return false;
};

// Alternative approach using built-in methods
// const without = function(source, itemsToRemove) {
//   return source.filter((element) => !itemsToRemove.includes(element));
// };

// Test without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);