// Use to test the middle function
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// Test middle function
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["a", "b", "c", "d", "e"]), ["c"]);