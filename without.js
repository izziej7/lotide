// Returns a subset of the array source in a new array, excluding given values in array itemsToRemove
const without = function(source, itemsToRemove) {
  const arrayAfterRemoved = [];
  // loop through each element of source
  for (const element of source) {
    // pass each element into the remove helper function
    if (!remove(element, itemsToRemove)) {
      // if the helper function returns false, push the element into arrayAfterRemoved
      // if the helper function returns true, the element will not be in arrayAfterRemoved
      arrayAfterRemoved.push(element);
    }
  }
  return arrayAfterRemoved;
};

// Helper function: returns whether an element of source must be removed
const remove = function(sourceElement, itemsToRemove) {
  // loop through each element of itemsToRemove
  for (const element of itemsToRemove) {
    // if the source element is equal to an element of itemsToRemove, return true for removal
    if (sourceElement === element) {
      return true;
    }
  }
  // if the source element is not equal to any of the elements of itemsToRemove, return false
  return false;
};

module.exports = without;