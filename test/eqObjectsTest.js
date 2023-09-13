// Use to test the eqObjects function
const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

// Test eqObjects function
const shirtOne = { color: "red", size: "medium" };
const shirtTwo = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtOne, shirtTwo), true);

const shirtThree = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtOne, shirtThree), false);

const shirtFour = { colors: ["red", "blue"], size: "medium" };
const shirtFive = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(shirtFour, shirtFive), true);

const shirtSix = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(shirtFour, shirtSix), false);

const objOne = { a: { z: 1 }, b: 2 };
const objTwo = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(objOne, objTwo), true);

const objThree = { a: { y: 0, z: 1 }, b: 2 };
const objFour = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(objThree, objFour), false);

const objFive = { a: { c: { y: 0, d: { z: 1 } } }, b: 2 };
const objSix = { a: { c: { y: 0, d: { z: 1 } } }, b: 2 };
assertEqual(eqObjects(objFive, objSix), true);

const objSeven = { a: { c: { y: 0, d: { z: 2 } } }, b: 2 };
assertEqual(eqObjects(objSix, objSeven), false);