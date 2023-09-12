// Use to test the head function
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const head = require("../head");

// Test head function
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
});