// Use to test takeUntil function
const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

// Test takeUntil function
describe("#takeUntil", () => {
  it("returns [1, 2, 3] for [1, 2, 3, -1, 4, 5] and x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 3, -1, 4, 5], x => x < 0), [1, 2, 3]);
  });
  it("returns ['a', 'b'] for ['a', 'b', ',', 'c'] and x => x === ','", () => {
    assert.deepEqual(takeUntil(['a', 'b', ',', 'c'], x => x === ','), ['a', 'b']);
  });
  it("returns [2, 4, 6, 8] for [2, 4, 6, 8] and x => x % 2 !== 0", () => {
    assert.deepEqual(takeUntil([2, 4, 6, 8], x => x % 2 !== 0), [2, 4, 6, 8]);
  });
  it("returns [] for [3, 6, 9] and x => x % 3 === 0", () => {
    assert.deepEqual(takeUntil([3, 6, 9], x => x % 3 === 0), []);
  });
});