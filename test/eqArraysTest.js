// Use to test the eqArrays function
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

// Test eqArrays function
describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] and [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for [] and []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it("returns false for ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
  it("returns true for [1, [[2, 3], [4, [5]]], [6]] and [1, [[2, 3], [4, [5]]], [6]]", () => {
    assert.strictEqual(eqArrays([1, [[2, 3], [4, [5]]], [6]], [1, [[2, 3], [4, [5]]], [6]]), true);
  });
  it("returns false for [1, 2, 3] and [1, [2], 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, [2], 3]), false);
  });
});