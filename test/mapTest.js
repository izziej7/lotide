// Use to test map function
const assert = require("chai").assert;
const map = require("../map");

// Test map function
describe("#map", () => {
  it("returns ['g', 'c'] for ['ground', 'control'] and word => word[0]", () => {
    assert.deepEqual(map(['ground', 'control'], word => word[0]), ['g', 'c']);
  });
  it("returns [2, 4, 6] for [1, 2, 3] and num => num * 2", () => {
    assert.deepEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
  });
  it("returns ['Fizza', 'Evan'] for [{ 'name': 'Fizza', id: 1234 }, { 'name': 'Evan', id: 1235 }] and student => student.name", () => {
    const students = [
      { 'name': 'Fizza', id: 1234 },
      { 'name': 'Evan', id: 1235 }
    ];
    assert.deepEqual(map(students, student => student.name), ['Fizza', 'Evan']);
  });
});