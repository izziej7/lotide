// Returns the count in the allItems array of each string given as true in the itemsToCount array in an object
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // loop through each element of allItems
  for (const element of allItems) {
    // if the element is given as true in itemsToCount
    if (itemsToCount[element]) {
      // and if the element is a key in the results object, add 1 to the value
      if (results[element]) {
        results[element] += 1;
      // and if the element is not a key in the results object, create it with value = 1
      } else {
        results[element] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;