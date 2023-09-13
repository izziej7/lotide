// Use to test the tail function
const assert = require("chai").assert;
const tail = require("../tail");

// Test tail function
describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for [4]", () => {
    assert.deepEqual(tail([4]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("does not change the original array [1, 2, 3]", () => {
    const num = [1, 2, 3];
    tail(num);
    assert.deepEqual(num, [1, 2, 3]);
  });
});