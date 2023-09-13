// Use to test the middle function
const assert = require("chai").assert;
const middle = require("../middle");

// Test middle function
describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns ['c'] for ['a', 'b', 'c', 'd', 'e']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
  });
});