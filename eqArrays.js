// Returns a boolean based on whether two arrays, actual and expected, are equal
const eqArrays = function(actual, expected) {
  // if the lengths of the two arrays are not equal, return false
  if (actual.length !== expected.length) {
    return false;
  }
  // loop through each element of actual and expected
  for (let i = 0; i < actual.length; i++) {
    // if the element at the same index in each array is an array
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      // then make a recursive call for this element/nested array
      if (!eqArrays(actual[i], expected[i])) {
        // if the recursive call returns false (not equal), then return false
        return false;
      }
    // if the element at the same index in each array is a primitive
    } else if (actual[i] !== expected[i]) {
      // if they are not equal, then return false
      return false;
    }
  }
  // if false is not already returned (equal), then return true
  return true;
};

module.exports = eqArrays;
