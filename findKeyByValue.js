/* Search through an object and return the first key for which the value equals parameter value
 * exclude objects that have arrays or objects as values */
const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;