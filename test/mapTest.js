// Use to test map function
const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

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