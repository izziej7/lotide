// Return the middle-most element(s) of an array
const middle = function(array) {
  const index = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[index]];
  } else {
    return [array[index - 1], array[index]];
  }
};

module.exports = middle;