// Returns the middle-most element(s) of an array in a new array
const middle = function(array) {
  // declare index to store the index of the middle element
  const index = Math.floor(array.length / 2);
  // if the array length is less than or equal to 2, return an empty array (no middle)
  if (array.length <= 2) {
    return [];
  // if the array length is odd, return the middle element based on the index
  } else if (array.length % 2 !== 0) {
    return [array[index]];
  // if the array length is even, return the two middle elements based on the index
  } else {
    return [array[index - 1], array[index]];
  }
};

module.exports = middle;