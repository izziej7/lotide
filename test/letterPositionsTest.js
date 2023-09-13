// Use to test letterPositions function
const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

// Test letterPositions function
const result1 = letterPositions("hello");

assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);