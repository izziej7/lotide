// Returns the first key in object for which the given callback returns a truthy value
const findKey = function(object, callback) {
  // loop through the array of object's keys
  for (const key of Object.keys(object)) {
    // pass the value into the callback function and if the result is truthy
    if (callback(object[key])) {
      // return the key
      return key;
    }
  }
};

module.exports = findKey;