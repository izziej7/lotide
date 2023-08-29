// Call inside assertArraysEqual function
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// Use to test without function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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