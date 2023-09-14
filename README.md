# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @izziej7/lotide`

**Require it:**

`const _ = require('@izziej7/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: logs to the console whether two arrays, actual and expected, are equal
* `assertEqual`: logs to the console whether two primitives, actual and expected, are equal
* `assertObjectsEqual`: logs to the console whether two objects, actual and expected, are equal
* `countLetters(sentence)`: returns the count of each letter in a sentence in an object
* `countOnly(allItems, itemsToCount)`: returns the count in the allItems array of each string given as true in the itemsToCount array in an object
* `eqArrays(actual, expected)`: returns a boolean based on whether two arrays, actual and expected, are equal
* `eqObjects(actual, expected)`: returns a boolean based on whether two objects, actual and expected, are equal
* `findKey(object, callback)`: returns the first key in object for which the given callback returns a truthy value 
* `findKeyByValue(object, value)`: returns the first key in object for which the given value equals the value
* `flatten(arrayOfArrays)`: returns an array of arrays flattened a single level deep in a new array
* `head(array)`: returns the first element of an array
* `letterPositions(sentence)`: returns the index of each character in a sentence in an object
* `map(array, callback)`: returns the results of calling a callback function on each element of an array in a new array
* `middle(array)`: returns the middle-most element(s) of an array in a new array
* `tail(array)`: returns all except the first element of an array in a new array
* `takeUntil(array, callback)`: returns a slice of the array in a new array, with elements from the beginning until the callback returns truthy
* `without(source, itemsToRemove)`: returns a subset of the array source in a new array, excluding given values in array itemsToRemove
