// Use to test findKey function
const assert = require("chai").assert;
const findKey = require("../findKey");

// Test findKey function
describe("#findKey", () => {
  it("returns 'c' for object = { 'a': { stars: 1 }, 'b': { stars: 3 }, 'c': { stars: 2 } } and x => x.stars === 2", () => {
    const object = { 'a': { stars: 1 }, 'b': { stars: 3 }, 'c': { stars: 2 } };
    assert.strictEqual(findKey(object, x => x.stars === 2), 'c');
  });
  it("returns 'b' for object = { 'a': 75, 'b': 91, 'c': 98 } and x => x > 90", () => {
    const object = { 'a': 75, 'b': 91, 'c': 98 };
    assert.strictEqual(findKey(object, x => x > 90), 'b');
  });
  it("returns undefined for object = { 'a': true, 'b': true } and x => !x", () => {
    const object = { 'a': true, 'b': true };
    assert.strictEqual(findKey(object, x => !x), undefined);
  });
});