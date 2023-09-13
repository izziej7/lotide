const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const takeUntil = require("./takeUntil");
const without = require("./without");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const map = require("./map");
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  takeUntil: takeUntil,
  without: without,
  countLetters: countLetters,
  countOnly: countOnly,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual
};