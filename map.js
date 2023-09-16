// Returns the results of calling a callback function on each element of an array in a new array
const map = function(array, callback) {
  const results = [];

  // loop through each element of array
  for (const element of array) {
    // push the results of calling the callback on the element into the new array
    results.push(callback(element));
  }
  
  return results;
};

module.exports = map;