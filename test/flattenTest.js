// Use to test flatten function
const assert = require("chai").assert;
const flatten = require("../flatten");

// Test flatten function
describe("#flatten", () => {
  it("returns [1, 2, 3, 4] for [1, [2, 3], [4]]", () => {
    assert.deepEqual(flatten([1, [2, 3], [4]]), [1, 2, 3, 4]);
  });
  it("returns ['1', '2', '3', '4'] for ['1', ['2', '3'], ['4']]", () => {
    assert.deepEqual(flatten(['1', ['2', '3'], ['4']]), ['1', '2', '3', '4']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("returns [1, 2, 3, 4] for [1, 2, 3, [], 4]", () => {
    assert.deepEqual(flatten([1, 2, 3, [], 4]), [1, 2, 3, 4]);
  });
});