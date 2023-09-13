/* Return a flattened version (single-level array) of a nested array
 * parameter: nestedArray - array of arrays
 * returns: single-level array */
const flatten = function(nestedArray) {
  // declare an empty flatArray array
  const flatArray = [];
  /* loop through each element in the nestedArray array
   * if the element is an array, loop through and push each element to flatArray
   * if the element is not an array, push each element to flatArray */
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
      for (const val of item) {
        flatArray.push(val);
      }
    } else {
      flatArray.push(item);
    }
  }
  // return the flatArray array
  return flatArray;
};

module.exports = flatten;