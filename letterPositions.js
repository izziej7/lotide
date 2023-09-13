/* Determine the index of each character in a sentence and return the results as an object
 * parameter: sentence - string
 * returns: object - [string]: number */
const letterPositions = function(sentence) {
  // declare an empty results object
  const results = {};
  /* loop through each character of the sentence
   * if it is a key in the results object, push the index onto the array value
   * if it is not a key in the results object, create it with an array containing the index as the value */
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // return the results object
  return results;
};

module.exports = letterPositions;

