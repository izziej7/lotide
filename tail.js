// Returns all except the first element of an array in a new array
const tail = function(array) {
  const tailArray = [];
  /* loop through each element of array
   * start with index 1 (skip the first element)
   * push each element into new array */
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

module.exports = tail;