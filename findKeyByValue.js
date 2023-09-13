/* Search through an object and return the first key for which the value equals parameter value
 * exclude objects that have arrays or objects as values 
 * parameter: object - [string]: any primitive 
 * parameter: value - any primitive 
 * returns: string || undefined */
const findKeyByValue = function(object, value) {
  /* loop through the array of object keys
   * if the object's value equals the parameter value, return the corresponding key */
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;