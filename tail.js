/* Return all except the first element (head) of an array
 * parameter: array
 * returns: array */
const tail = function(array) {
  // declare an empty tailArray array
  const tailArray = [];
  /* loop through each element of the parameter array
   * starting with index 1 (skipping the first element)
   * push each item onto the tailArray array */
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  // return the tailArray array
  return tailArray;
};

module.exports = tail;