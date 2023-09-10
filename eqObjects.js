// Call in eqObjects function (nested)
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// Use to test eqObjects function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Compare two objects and return true if they are an exact match
 * exclude objects that have objects as values */
const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  for (const key of Object.keys(actual)) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (!eqArrays(actual[key], expected[key])) {
        return false;
      }
    } else if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

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