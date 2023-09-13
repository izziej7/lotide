// Use to test without function
const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

// Test without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);

// Test without function does not change the source array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);