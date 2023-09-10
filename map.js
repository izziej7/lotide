// Call in assertArraysEqual function
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// Use to test map function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Call a callback on every element in an array and return the results in a new array
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test map function
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);

const students = [
  { name: "Fizza", id: 1234 },
  { name: "Evan", id: 1235 },
  { name: "Katie", id: 1236 }
];
const results3 = map(students, student => student.name);
assertArraysEqual(results3, ["Fizza", "Evan", "Katie"]);