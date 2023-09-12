// Return all except the first element (head) of an array
const tail = function(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

module.exports = tail;