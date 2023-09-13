/* Compare two arrays and return a boolean based on whether they are an exact match
 * cannot handle array elements that are objects but not arrays
 * parameter: actual - array || array of arrays
 * parameter: expected - array || array of arrays 
 * returns: boolean - true || false */
const eqArrays = function(actual, expected) {
  // if the lengths of the two arrays are not equal, return false
  if (actual.length !== expected.length) {
    return false;
  }
  /* loop through the arrays and
   * if the elements are also arrays, make a recursive call 
   * recursive calls will continue to be made until the elements of the arrays are not arrays
   * if the result of the recursive calls is false, return false
   * if the elements are primitives, compare them and if they are not strictly equal, return false */
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  // after looping through the arrays, if false was not returned, then return true
  return true;
};

module.exports = eqArrays;
