// Use to test countLetters function
const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

// Test countLetters function
const result1 = countLetters("code here");

assertEqual(result1["c"], 1);
assertEqual(result1["o"], 1);
assertEqual(result1["d"], 1);
assertEqual(result1["e"], 3);
assertEqual(result1["h"], 1);
assertEqual(result1["r"], 1);