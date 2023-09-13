// Call in eqObjects function
const eqArrays = require("./eqArrays");

// Compare two objects and return a boolean based on whether they are an exact match
const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  for (const key of Object.keys(actual)) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (!eqArrays(actual[key], expected[key])) {
        return false;
      }
    } else if (typeof actual[key] === "object" && typeof expected[key] === "object") {
      if (!eqObjects(actual[key], expected[key])) {
        return false;
      }
    } else if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;