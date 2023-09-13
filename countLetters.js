/* Count the occurrence of each letter in a sentence and return the results as an object
 * exclude spaces 
 * parameter: sentence - string
 * returns: object - [string]: number */
const countLetters = function(sentence) {
  // declare an empty results object
  const results = {};
  // loop through each letter of the sentence
  // if it is not a space and it is a key in the results object, add 1 to the value
  // if it is not a space and it is not a key in the results object, create it with value = 1
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  // return the results object
  return results;
};

module.exports = countLetters;