/* Search through an object and return the first key for which the callback returns a truthy value
 * parameter: object - [string]: any
 * parameter: callback - function
 * returns: string || undefined */
const findKey = function(object, callback) {
  /* loop through the array of object keys
   * pass the object's value into the callback function
   * if the result is truthy, return the corresponding key */
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;