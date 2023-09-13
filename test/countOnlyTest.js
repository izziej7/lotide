// Use to test countOnly function
const assert = require("chai").assert;
const countOnly = require("../countOnly");

// Test countOnly function
describe("#countOnly", () => {
  it("returns { 'Jason': 1, 'Fang': 2 } for allItems = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'] and itemstoCount = { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }", () => {
    const allItems = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
    const itemsToCount = { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false };
    assert.deepEqual(countOnly(allItems, itemsToCount), { 'Jason': 1, 'Fang': 2 });
  });
});