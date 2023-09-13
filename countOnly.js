/* Count the occurrence of each specified string in an array and return the results as an object
 * parameter: allItems - array
 * parameter: itemsToCount - object - [string]: boolean
 * returns: object - [string]: number */
const countOnly = function(allItems, itemsToCount) {
  // declare an empty results object
  const results = {};
  /* loop through each string in the allItems array, if the string is true in itemsToCount and
   * it is a key in the results object, add 1 to the value
   * it is not a key in the results object, create it with value = 1 */
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  // return the results object
  return results;
};

module.exports = countOnly;