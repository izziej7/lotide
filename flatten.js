// Returns an array of arrays flattened a single level deep in a new array
const flatten = function(arrayOfArrays) {
  const flatArray = [];

  // loop through each element of arrayOfArrays
  for (const element of arrayOfArrays) {
    // if the element is an array, loop through each element of this array
    if (Array.isArray(element)) {
      for (const subelement of element) {
        // push each element of this array into the flatArray
        flatArray.push(subelement);
      }
    }
    
    // if the element is not an array, push it into the flatArray
    if (!Array.isArray(element)) {
      flatArray.push(element);
    }
  }
  
  return flatArray;
};

module.exports = flatten;