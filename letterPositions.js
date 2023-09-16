// Returns the index of each character in a sentence in an object
const letterPositions = function(sentence) {
  const results = {};

  // loop through each character of sentence
  for (let i = 0; i < sentence.length; i++) {
    // if it is not a key in the results object, create it with a value of empty array
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }

    // push the index of the character into the array value of character key in the results object
    results[sentence[i]].push(i);
  }
  
  return results;
};

module.exports = letterPositions;

