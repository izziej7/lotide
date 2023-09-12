// Use to test the head function
const assertEqual = require("../assertEqual");
const head = require("../head");

// Test head function
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);