// Use to test the eqObjects function
const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

// Test eqObjects function
describe("#eqObjects", () => {
  it("returns true for { 'a': 1, 'b': 2 } and { 'b': 2, 'a': 1 }", () => {
    assert.strictEqual(eqObjects({ 'a': 1, 'b': 2 }, { 'b': 2, 'a': 1 }), true);
  });
  it("returns false for { 'a': [1, 2], 'b': 3 } and { 'b': 3, 'a': [1, 4] }", () => {
    assert.strictEqual(eqObjects({ 'a': [1, 2], 'b': 3 }, { 'b': 3, 'a': [1, 4] }), false);
  });
  it("returns true for { a: { c: { y: 0, d: { z: 1 } } }, b: 2 } and { a: { c: { y: 0, d: { z: 1 } } }, b: 2 }", () => {
    const objOne = { a: { c: { y: 0, d: { z: 1 } } }, b: 2 };
    const objTwo = { a: { c: { y: 0, d: { z: 1 } } }, b: 2 };
    assert.strictEqual(eqObjects(objOne, objTwo), true);
  });
  it("returns false for { a: { c: { y: 0, d: { z: 1 } } }, b: 2 } and { a: { c: { y: 0, d: { z: 2 } } }, b: 2 }", () => {
    const objOne = { a: { c: { y: 0, d: { z: 1 } } }, b: 2 };
    const objTwo = { a: { c: { y: 0, d: { z: 2 } } }, b: 2 };
    assert.strictEqual(eqObjects(objOne, objTwo), false);
  });
  it("returns true for { a: { c: [1, 2, 3] }, b: 2 } and { a: { c: [1, 2, 3] }, b: 2 }", () => {
    const objOne = { a: { c: [1, 2, 3] }, b: 2 };
    const objTwo = { a: { c: [1, 2, 3] }, b: 2 };
    assert.strictEqual(eqObjects(objOne, objTwo), true);
  });
});