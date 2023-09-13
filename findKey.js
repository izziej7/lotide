// Search through an object and return the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;