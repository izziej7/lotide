// Use to test without function
const assert = require("chai").assert;
const without = require("../without");

// Test without function
describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for ['1', '2', '3'] and [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
  it("returns [] for [] and []", () => {
    assert.deepEqual(without([], []), []);
  });
  it("returns [1, 2, 3] for [1, 2, 3] and []", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
  it("does not change the original array [1, 2, 3]", () => {
    const num = [1, 2, 3];
    without(num, [1]);
    assert.deepEqual(num, [1, 2, 3]);
  });
});