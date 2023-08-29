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

// Use to test flatten function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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