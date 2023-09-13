// Returns a slice of the array in a new array, with elements from the beginning until the callback returns truthy
const takeUntil = function(array, callback) {
  const results = [];
  // loop through each element of array
  for (const element of array) {
    // push elements into the new array until the callback returns truthy for an element
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
};

module.exports = takeUntil;