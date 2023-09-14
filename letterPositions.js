// Returns the index of each character in a sentence in an object
const letterPositions = function(sentence) {
  const results = {};
  // loop through each character of sentence
  for (let i = 0; i < sentence.length; i++) {
    // if it is a key in the results object, push the index into the array that is the value
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    // if it is not a key in the results object, create it with an array containing the index as the value
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

