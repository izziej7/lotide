/* Call a callback on every element in an array and return the results in a new array
 * parameter: array
 * parameter: callback - function
 * returns: array */
const map = function(array, callback) {
  // declare an empty results array
  const results = [];
  /* loop through each element in the parameter array
   * call the callback function on each element
   * push the results to the results array */
  for (const item of array) {
    results.push(callback(item));
  }
  // return the results array
  return results;
};

module.exports = map;