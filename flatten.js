// Return a flattened version (single-level array) of a nested array
const flatten = function(nestedArray) {
  const flatArray = [];
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
      for (const val of item) {
        flatArray.push(val);
      }
    } else {
      flatArray.push(item);
    }
  }
  return flatArray;
};

module.exports = flatten;