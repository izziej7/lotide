// Use to test takeUntil function
const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");

// Test takeUntil function
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = [2, 4, 6, 8, 10];
const results3 = takeUntil(data3, x => x % 2 !== 0);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);

const data4 = [3, 6, 9, 12];
const results4 = takeUntil(data4, x => x % 3 === 0);
assertArraysEqual(results4, []);