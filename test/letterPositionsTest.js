// Use to test letterPositions function
const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

// Test letterPositions function
describe("#letterPositions", () => {
  it("returns { 'h': [0], 'e': [1], 'l': [2, 3], 'o': [4] } for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { 'h': [0], 'e': [1], 'l': [2, 3], 'o': [4] });
  });
  it("returns { 't': [0, 3], 'a': [1], 'r': [2] } for 'tart'", () => {
    assert.deepEqual(letterPositions("tart"), { 't': [0, 3], 'a': [1], 'r': [2] });
  });
  it("returns {} for ''", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});
