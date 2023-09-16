// Returns a boolean based on whether two arrays, actual and expected, are equal
// does not handle objects as values in the arrays
const eqArrays = function(actual, expected) {
  // if the lengths of the two arrays are not equal, return false
  if (actual.length !== expected.length) {
    return false;
  }

  // loop through each element of actual and expected
  for (let i = 0; i < actual.length; i++) {
    // declare variables to store whether the element at the same index in actual and expected is an array
    const actualArr = Array.isArray(actual[i]);
    const expectedArr = Array.isArray(expected[i]);

    // if the element is an array in both actual and expected
    if (actualArr && expectedArr) {
      // make a recursive call for this element
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    }

    // if the element is an array in one but not both of actual and expected
    if (!actualArr && expectedArr || actualArr && !expectedArr) {
      return false;
    }

    // if the element is not an array in both actual and expected
    if (!actualArr && !expectedArr) {
      // compare the primitive values
      if (actual[i] !== expected[i]) {
        return false;
      }
    }

  }
  
  // if false is not already returned, then return true
  return true;
};

module.exports = eqArrays;
