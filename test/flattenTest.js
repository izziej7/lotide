// Call in assertArraysEqual function
const eqArrays = require("../eqArrays");

// Use to test flatten function
const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

// Test flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", "2", ["3", "4"], "5", ["6"]]), ["1", "2", "3", "4", "5", "6"]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, 3, [], 4]), [1, 2, 3, 4]);