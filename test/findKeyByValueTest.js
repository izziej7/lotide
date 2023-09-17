// Use to test findKeyByValue function
const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

// Test findKeyByValue function
describe("#findKeyByValue", () => {
  it("returns 'a' for object = { 'a': 1, 'b': 2, 'c': 3 } and value = 1", () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    assert.strictEqual(findKeyByValue(object, 1), 'a');
  });
  it("returns undefined for object = { 'a': 'a', 'b': 'b' } and value = 'c'", () => {
    const object = { 'a': 'a', 'b': 'b' };
    assert.strictEqual(findKeyByValue(object, 'c'), undefined);
  });
  it("returns 'b' for object = { 'a': 1, 'b': 2, 'c': 2 } and value = 2", () => {
    const object = { 'a': 1, 'b': 2, 'c': 2 };
    assert.strictEqual(findKeyByValue(object, 2), 'b');
  });
});