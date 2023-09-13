/* Return a subset of the array source, removing unwanted elements specified in itemsToRemove
 * parameter: source - array
 * parameter: itemsToRemove - array
 * returns: array */
const without = function(source, itemsToRemove) {
  // declare an empty arrayAfterRemoved array
  const arrayAfterRemoved = [];
  /* loop through each element in the source array
   * call the helper function remove on each element
   * if it returns false, push the element onto the arrayAfterRemoved array */
  for (const item of source) {
    if (!remove(item, itemsToRemove)) {
      arrayAfterRemoved.push(item);
    }
  }
  // return the arrayAfterRemoved array
  return arrayAfterRemoved;
};

/* Helper function: return whether a source element must be removed
 * parameter: sourceItem - element from source array
 * parameter: itemsToRemove - array from main function
 * returns: boolean - true || false */
const remove = function(sourceItem, itemsToRemove) {
  /* loop through each element in the itemsToRemove array
   * if the sourceItem equals an element in the itemsToRemove array, return true */
  for (const item of itemsToRemove) {
    if (sourceItem === item) {
      return true;
    }
  }
  // if none of the elements in the itemsToRemove array equal the sourceItem, return false
  return false;
};

module.exports = without;