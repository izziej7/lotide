// Use to test the assertArraysEqual function
const assertArraysEqual = require("../assertArraysEqual");

// Test assertArraysEqual function
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);