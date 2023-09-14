// Returns the first key in object for which the given value equals the value
const findKeyByValue = function(object, value) {
  // loop through the array of object's keys
  for (const key of Object.keys(object)) {
    // if the object's value equals the given value
    if (object[key] === value) {
      // return the key
      return key;
    }
  }
};

module.exports = findKeyByValue;