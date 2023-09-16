// Returns the count of each letter in a sentence in an object
const countLetters = function(sentence) {
  const results = {};
  
  // loop through each letter of sentence
  for (const letter of sentence) {
    // if the letter is a space, skip this iteration of the loop
    if (letter === " ") {
      continue;
    }

    // if the letter is not a key in the results object, create it with value = 0
    if (!results[letter]) {
      results[letter] = 0;
    }

    // add 1 to the value of the letter key in the results object
    results[letter]++;
  }

  return results;
};

module.exports = countLetters;