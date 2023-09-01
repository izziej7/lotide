// Use to test findKey function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Search through an object and return the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// Test findKey function
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma"); 

assertEqual(findKey({
  Anne: 75,
  Jane: 91,
  John: 82,
  Jack: 66,
  Beth: 98
}, x => x > 90), "Jane");

assertEqual(findKey({
  dog: true,
  cat: true,
  bird: true,
  hamster: true
}, x => !x), undefined);