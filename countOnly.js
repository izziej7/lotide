// Returns the count in the allItems array of each string given as true in the itemsToCount array in an object
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // loop through each element of allItems
  for (const element of allItems) {
    // if the element is given as true in itemsToCount
    if (itemsToCount[element]) {
      // if the element is not a key in the results object, create it with value = 0
      if (!results[element]) {
        results[element] = 0;
      }

      // add 1 to the value of the element key in the results object
      results[element]++;
    }
  }

  return results;
};

module.exports = countOnly;