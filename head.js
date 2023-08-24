// Had to rename assertEqual because VS Code was detecting declaration in other file
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns the first element (head) of an array
const head = function(array) {
  return array[0];
};

// Test results
assertEquals(head([5, 6, 7]), 5);
assertEquals(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEquals(head([4]), 4);
assertEquals(head([]), undefined);
assertEquals(head([3, 4, 5]), 4);
assertEquals(head([]), 0);

