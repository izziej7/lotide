// Use to test the assertObjectsEqual function
const assertObjectsEqual = require("../assertObjectsEqual");

// Test assertObjectsEqual function
const shirtOne = { color: "red", size: "medium" };
const shirtTwo = { size: "medium", color: "red" };
assertObjectsEqual(shirtOne, shirtTwo);

const shirtThree = { colors: ["red", "blue"], size: "medium" };
const shirtFour = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(shirtThree, shirtFour);