// Returns the first key in object for which the given value equals the value
const findKeyByValue = function(object, value) {
  // loop through the array of object's keys
  for (const key of Object.keys(object)) {
    // check if the object's value equals the given value
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;