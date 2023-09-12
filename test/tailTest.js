// Use to test the head function
const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test tail function
const resultOne = tail([5, 6, 7]);
assertEqual(resultOne.length, 2);
assertEqual(resultOne[0], 6);
assertEqual(resultOne[1], 7);

const resultTwo = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(resultTwo.length, 2);
assertEqual(resultTwo[0], "Lighthouse");
assertEqual(resultTwo[1], "Labs");

const resultThree = tail([4]);
assertEqual(resultThree.length, 0);

const resultFour = tail([]);
assertEqual(resultFour.length, 0);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);