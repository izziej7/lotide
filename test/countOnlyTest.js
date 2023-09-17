// Use to test countOnly function
const assert = require("chai").assert;
const countOnly = require("../countOnly");

// Test countOnly function
describe("#countOnly", () => {
  it("returns { 'a': 1, 'b': 2 } for allItems = ['a', 'b', 'b', 'c'] and itemsToCount = { 'a': true, 'b': true, 'c': false, 'd': true }", () => {
    const allItems = ['a', 'b', 'b', 'c'];
    const itemsToCount = { 'a': true, 'b': true, 'c': false, 'd': true };
    assert.deepEqual(countOnly(allItems, itemsToCount), { 'a': 1, 'b': 2 });
  });
  it("returns {} for allItems = ['a', 'b'] and itemsToCount = {}", () => {
    const allItems = ['a', 'b'];
    const itemsToCount = {};
    assert.deepEqual(countOnly(allItems, itemsToCount), {});
  });
  it("returns {} for allItems = [1, 2] and itemsToCount = { 1: false}", () => {
    const allItems = [1, 2];
    const itemsToCount = { 1: false };
    assert.deepEqual(countOnly(allItems, itemsToCount), {});
  });
});