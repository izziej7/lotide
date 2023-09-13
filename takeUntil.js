/* Return a slice of the array with elements from the start until the callback returns a truthy value
 * parameter: array
 * parameter: callback - function
 * returns: array */
const takeUntil = function(array, callback) {
  // declare an empty results array
  const results = [];
  /* loop through each element in the parameter array
   * call the callback function on each element and if it returns a truthy value, return the results array
   * otherwise, push the element onto the results array */
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  // return the results array
  return results;
};

module.exports = takeUntil;