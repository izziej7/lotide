// Use to test countLetters function
const assert = require("chai").assert;
const countLetters = require("../countLetters");

// Test countLetters function
describe("#countLetters", () => {
  it("returns { 'c': 1, 'o': 1, 'd': 1, 'e': 3, 'h': 1, 'r': 1 } for 'code here'", () => {
    assert.deepEqual(countLetters("code here"), { 'c': 1, 'o': 1, 'd': 1, 'e': 3, 'h': 1, 'r': 1 });
  });
  it("returns { 'b': 1, 'a': 1, 't': 2, 'l': 1, 'e': 1 } for 'battle'", () => {
    assert.deepEqual(countLetters("beetle"), { 'b': 1, 'e': 3, 't': 1, 'l': 1 });
  });
  it("returns {} for an empty string", () => {
    assert.deepEqual(countLetters(""), {});
  });
});