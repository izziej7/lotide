// Use to test countLetters function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Count the occurrence of each letter in a sentence and return the results as an object
 * exclude spaces */
const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// Test countLetters function
const result1 = countLetters("code here");

assertEqual(result1["c"], 1);
assertEqual(result1["o"], 1);
assertEqual(result1["d"], 1);
assertEqual(result1["e"], 3);
assertEqual(result1["h"], 1);
assertEqual(result1["r"], 1);