// Returns the count of each letter in a sentence in an object
const countLetters = function(sentence) {
  const results = {};
  // loop through each letter of sentence
  for (const letter of sentence) {
    // if the letter is not a space
    if (letter !== " ") {
      // and if the letter is a key in the results object, add 1 to the value
      if (results[letter]) {
        results[letter] += 1;
      // and if the letter is not a key in the results object, create it with value = 1
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;